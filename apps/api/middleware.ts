import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";
// import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authHeader = req.headers.authorization;

    // if (!authHeader || !authHeader.startsWith("Bearer ")) {
    req.userId = "1";

    next();
  } catch (err) {
    console.error("JWT Verify Error:", err);
    return res.status(401).json({ error: "Invalid token" });
  }
}
