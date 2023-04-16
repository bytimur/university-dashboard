import { NextRequest, userAgent } from "next/server";
import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export default function middleware(req: NextRequest) {
  // const { device } = userAgent(req);
  // const token = req.cookies.get("token")?.value;
  // const login_as = req.cookies.get("login_as")?.value;
  // const next_locale = req.cookies.get("NEXT_LOCALE")?.value;
  // const token = req.cookies.get("access")?.value;
  // console.log(
  //   `MIDDLEWARE LOGS:\nUSER_AGENT: ${device.type}\nNEXT_LOCALE: ${next_locale}\nTOKEN: ${token};\nROLE: ${login_as}\n`
  // );
  // if (
  //   req.nextUrl.pathname.startsWith("/_next") ||
  //   req.nextUrl.pathname.includes("/api/") ||
  //   PUBLIC_FILE.test(req.nextUrl.pathname)
  // ) {
  //   return;
  // }
  // if (req.nextUrl.locale === "default") {
  //   const locale = next_locale || "ru";
  //   return NextResponse.redirect(
  //     new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
  //   );
  // }
}
