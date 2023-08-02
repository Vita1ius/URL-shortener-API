import { PrismaService } from './prisma.service';
import { Link, Prisma } from '@prisma/client';
export declare class LinkService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(data: Prisma.LinkCreateInput): Promise<Link>;
}
