import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";

export async function POST(request: Request) {
  const body = await request.json()
  const {email, pass} = body

  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: pass,
  })
  return NextResponse.json({ data,error });
}
