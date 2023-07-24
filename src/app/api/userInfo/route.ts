import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const userid = request.nextUrl.searchParams.get('userid')
  let { data: User, error } = await supabase
  .from('User')
  .select('*')
  .eq('userid',userid);

  console.log(User);
  return NextResponse.json({ User });
}
