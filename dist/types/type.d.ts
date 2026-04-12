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
export {};
//# sourceMappingURL=type.d.ts.map