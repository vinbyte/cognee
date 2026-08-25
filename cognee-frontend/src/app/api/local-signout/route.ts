import { NextResponse } from "next/server";

const localApiUrl = process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:8000";

export async function GET(request: Request) {
  // Call the local backend's logout endpoint to invalidate the session
  try {
    await fetch(`${localApiUrl}/api/v1/auth/logout`, {
      method: "POST",
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    });
  } catch {
    // Backend might be down — still clear cookies and redirect
  }

  // Use a relative Location so a reverse proxy cannot turn the redirect into
  // its internal origin (for example, http://localhost:3000).
  const response = new NextResponse(null, {
    status: 303,
    headers: { Location: "/local-login" },
  });
  response.cookies.set("fastapiusersauth", "", {
    maxAge: 0,
    path: "/",
  });
  return response;
}
