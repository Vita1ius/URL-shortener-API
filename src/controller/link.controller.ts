import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { generateUrl } from 'src/service/link-generate';
import { Response } from 'express';
import { LinkRepository } from '../repository/link.repository';

import { Link as LinkModel} from '@prisma/client';

@Controller()
export class LinkController {
  constructor(
    private readonly linkRepository: LinkRepository,
  ) {}

  @Post('createLink')
  async createLink(
    @Body() data: { longUrl: string }
  ): Promise<string> {
    if (!data.longUrl) {
      throw new HttpException('Invalid input', HttpStatus.BAD_REQUEST);
    }
    
    try {
      const shortUrl: string = await generateUrl(data.longUrl);
      const link: LinkModel = await this.linkRepository.create(
        shortUrl,
        data.longUrl
      );
  
      
      return `Your shortened URL: http://localhost:3000/${link.shortUrl}`;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'An error occurred while processing your request',
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  @Get('/:shortUrl')
  async getLink(@Param('shortUrl') shortUrl: string, @Res() res: Response): Promise<void> {
    try {
      const link = await this.linkRepository.getLinkByShortUrl({ shortUrl });
      if (link) {
        res.redirect(301, link.longUrl);
      } else {
        res.status(HttpStatus.NOT_FOUND).send({ message: 'The short URL does not exist' });
      }
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ message: 'An error occurred while processing your request' });
    }
  }


  @Delete(':id')
  async deleteLink(@Param('id') id: string): Promise<string> {
    try {
      const deletedLink = await this.linkRepository.delete(Number(id));
      if (deletedLink) {
        return 'Link deleted successfully';
      }

    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Link not found',
        },
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
