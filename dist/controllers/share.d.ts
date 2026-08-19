import type { Request, Response } from "express";
import type { AuthRequest } from "../types/type.js";
export declare const generateShareLink: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const share: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=share.d.ts.map