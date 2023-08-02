import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Link, Prisma } from '@prisma/client';

@Injectable()
export class LinkService {
  constructor(private prisma: PrismaService) {}

    async createUser(data: Prisma.LinkCreateInput): Promise<Link> {
    return this.prisma.link.create({
      data,
    });
  }
}
