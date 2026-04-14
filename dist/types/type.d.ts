import type { Request } from "express";
interface destinationcallback {
    (error: Error | null, destination: string): void;
}
interface filenamecallback {
    (error: Error | null, filename: string): void;
}
export interface Destination {
    (req: Request, file: Express.Multer.File, cb: destinationcallback): void;
}
export interface filename {
    (req: Request, file: Express.Multer.File, cb: filenamecallback): void;
}
export interface AuthRequest extends Request {
    userid?: string;
}
export interface updateavatar extends AuthRequest {
    file?: Express.Multer.File;
}
export {};
//# sourceMappingURL=type.d.ts.map