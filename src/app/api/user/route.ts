import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";

export async function GET(request: Request) {
  let { data: User, error } = await supabase
  .from('User')
  .select();
  console.log(User);
  return NextResponse.json({ User });
}
