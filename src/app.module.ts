import { Module } from '@nestjs/common'
import { LinkController } from './controller/link.controller'
import { PrismaService } from './prisma.service'
import { LinkRepository } from './repository/link.repository'

@Module({
  imports: [],
  controllers: [LinkController],
  providers: [PrismaService,LinkRepository]
})
export class AppModule {}
