import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { LinkService } from './link.service';

import { Link as UserModel} from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly linkService: LinkService,
  ) {}

  @Post('createLink')
  async signupUser(
    @Body() linkData: { shortUrl: string; longUrl: string },
  ): Promise<UserModel> {
    return this.linkService.createUser(linkData);
  }
}
