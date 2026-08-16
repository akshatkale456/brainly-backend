import type { AuthRequest } from "../types/type.js";
import type { Response } from "express";
export declare const createEvent: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getEvents: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteEvent: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateEvent: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=event.d.ts.map