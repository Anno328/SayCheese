import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";

export async function POST(request: Request) {
  const { error } = await supabase.auth.signOut();
  return NextResponse.json({ error });
}
