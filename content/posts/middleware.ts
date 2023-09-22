import { NextRequest, NextResponse } from "next/server";
import { pbkdf2 } from "lib/utils/crypto";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/api/notion-integration/habit")) {
    const providedKey = req.headers.get("x-api-key");
    const expectedKey = process.env.NOTION_INTEGRATION_API_KEY;
    if (
      providedKey &&
      expectedKey &&
      process.env.SALT &&
      process.env.SALT_ROUNDS
    ) {
      const providedHash = await pbkdf2(
        providedKey,
        process.env.SALT,
        parseInt(process.env.SALT_ROUNDS),
      ).then((bits) => Buffer.from(bits).toString("hex"));

      if (providedHash !== expectedKey) {
        return NextResponse.json(
          { message: "Invalid API key" },
          { status: 401 },
        );
      }
    } else {
      if (!providedKey) {
        return NextResponse.json(
          { message: "No API key provided" },
          { status: 401 },
        );
      } else if (
        !expectedKey ||
        !process.env.SALT ||
        !process.env.SALT_ROUNDS
      ) {
        return NextResponse.json(
          { message: "Internal Server Error" },
          { status: 500 },
        );
      }
    }
  }
}

export const config = {
  matcher: ["/api/notion-integration/:path*"],
};
