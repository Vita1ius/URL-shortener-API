import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { PrismaService } from './prisma.service'
import { LinkService } from './link.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,LinkService]
})
export class AppModule {}
