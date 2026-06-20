import type { AuthRequest } from "../types/type.js";
import type { Response } from "express";
export declare const twitter: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletetwitter: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updatetwitter: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const gettwitter: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=twitter.d.ts.map