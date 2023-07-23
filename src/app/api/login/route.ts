import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";

export async function POST(request: Request) {
  // console.log(request.body);
  // return NextResponse.json({});

  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
  return NextResponse.json({ data,error });
}
