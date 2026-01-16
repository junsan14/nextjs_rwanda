// app/api/users/route.js
import { getUsers } from "@/lib/db";

export async function GET() {
  return Response.json(getUsers());
}
