import type { Request, Response } from 'express';
import http from 'http';
export declare const initializewebsocketserver: (req: Request, res: Response, server: http.Server) => Response<any, Record<string, any>> | undefined;
export declare const getLivePin: (req: Request, res: Response) => Promise<void>;
export declare const deleteLivePin: (req: Request, res: Response) => Promise<void>;
export declare const deleteLivePinCard: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=livepin.d.ts.map