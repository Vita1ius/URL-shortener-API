import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Link, Prisma } from '@prisma/client';
import { link } from 'fs';

@Injectable()
export class LinkRepository {
  constructor(private prisma: PrismaService) {}

    async create(
      shortUrl: string,
      longUrl: string
      ): Promise<Link> {
        return this.prisma.link.create({
          data:{
            shortUrl,
            longUrl
          },
        });
      }
    async  getLinkByShortUrl(linkWhereUniqueInput: Prisma.LinkWhereUniqueInput): Promise<Link | null>{
      return this.prisma.link.findUnique({
        where: linkWhereUniqueInput,
      });
    }
    async delete(id: number): Promise<Link | null>{
      return this.prisma.link.delete({
        where: {
          id
        }
      });
    }
}
