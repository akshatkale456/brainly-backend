import type { Response, NextFunction } from "express";
import "dotenv/config";
import type { AuthRequest } from "../types/type.js";
export declare const authimiddleware: (req: AuthRequest, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=autthmiddleware.d.ts.map