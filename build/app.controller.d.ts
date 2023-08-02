import { LinkService } from './link.service';
import { Link as UserModel } from '@prisma/client';
export declare class AppController {
    private readonly linkService;
    constructor(linkService: LinkService);
    signupUser(linkData: {
        shortUrl: string;
        longUrl: string;
    }): Promise<UserModel>;
}
