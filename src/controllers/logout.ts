import type { Request, Response } from "express";

export const logout = (req: Request, res: Response) => {
    // Clear httpOnly token cookie
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "none",
    });

    // Clear isAuthenticated cookie
    res.clearCookie("isAuthenticated", {
        httpOnly: false,
        secure: true,
        sameSite: "none",
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully",
    });
};
