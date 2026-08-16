import type { Request, Response } from 'express';
import type { AuthRequest } from '../types/type.js';
export declare const deleteLivePin: (req: Request, res: Response) => Promise<void>;
export declare const deleteLivePinCard: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const editLivePinCard: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const createLivePinCard: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCardsByRoomId: (req: AuthRequest, res: Response) => Promise<void>;
//# sourceMappingURL=livepin.d.ts.map