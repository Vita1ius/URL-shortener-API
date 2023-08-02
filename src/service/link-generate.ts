import { createHash,randomBytes } from 'crypto';

export async function generateUrl(longUrl:string) : Promise<string>{
  const generateUrl = randomBytes(4).toString('hex');
  return generateUrl;
}