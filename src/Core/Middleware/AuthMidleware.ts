import { verify } from "hono/jwt";
import { createMiddleware } from "hono/factory";
import {
  JwtAlgorithmNotImplemented,
  JwtHeaderInvalid,
  JWTPayload,
  JwtTokenExpired,
  JwtTokenInvalid,
  JwtTokenIssuedAt,
  JwtTokenNotBefore,
  JwtTokenSignatureMismatched,
} from "hono/utils/jwt/types";
import { __ } from "@/src/lang";

interface JwtVerifyInterface extends JWTPayload {
  id: number;
  email: string;
  role: {
    role_id: number[];
    role_name: string[];
  };
}

export default function AuthMiddleware() {
  return createMiddleware(async (c, next) => {
    try {
      const authHeader = c.req.header("Authorization"); // get bearerToken from header
      const bearerToken = authHeader?.split("Bearer ")[1];

      if (!bearerToken) {
        return c.json({ message: __("Unauthorized") }, 401);
      }

      if (!process.env.APP_KEY) {
        return c.json({ message: __("Error: Private key not found") }, 500);
      }

      const privateKey = process.env.APP_KEY;

      const decoded: JwtVerifyInterface = (await verify(
        bearerToken,
        privateKey,
        "RS256",
      )) as JwtVerifyInterface;

      await next();
    } catch (error) {
      if (error instanceof JwtAlgorithmNotImplemented) {
        return c.json(
          { message: __("Unauthorized: Algorithm not implemented") },
          401,
        );
      }
      if (error instanceof JwtTokenInvalid) {
        return c.json({ message: __("Unauthorized: Invalid token") }, 401);
      }
      if (error instanceof JwtTokenNotBefore) {
        return c.json(
          { message: __("Unauthorized: Token not yet valid") },
          401,
        );
      }
      if (error instanceof JwtTokenExpired) {
        return c.json({ message: __("Unauthorized: Token expired") }, 401);
      }
      if (error instanceof JwtTokenIssuedAt) {
        return c.json(
          { message: __("Unauthorized: Token issued in the future") },
          401,
        );
      }
      if (error instanceof JwtHeaderInvalid) {
        return c.json({ message: __("Unauthorized: Invalid header") }, 401);
      }
      if (error instanceof JwtTokenSignatureMismatched) {
        return c.json(
          { message: __("Unauthorized: Token signature mismatched") },
          401,
        );
      }

      console.error("Authentication error", error);
      return c.json({ message: __("Internal server error") }, 500);
    }
  });
}
