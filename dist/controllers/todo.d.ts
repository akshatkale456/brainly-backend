import type { AuthRequest } from "../types/type.js";
import type { Response } from "express";
export declare const todo: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const gettodo: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deletetodo: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updatetodo: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=todo.d.ts.map