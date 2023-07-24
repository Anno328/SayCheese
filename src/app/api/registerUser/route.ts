import { NextResponse } from "next/server";
import supabase from "../../utils/supabase";

export async function POST(request: Request) {
  const body = await request.json()
  const {email, pass, name, age, sex, place, type, insta, description, isVisible} = body

  // email,passでユーザ登録
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: pass,
  });

  // 登録に成功したらプロフィールも登録
  if(error == null){
    const userid = data.user.id;

    console.log("userid");
    console.log(userid);
    console.log("pass");
    console.log(pass);
    const { error } = await supabase
    .from('User')
    .insert([
      {
        name: name,
        age: age,
        place: place,
        type: type,
        instaurl: insta,
        description: description,
        isvisible: isVisible,
        userid: userid,
      }
    ])
    .select();
    console.log("error");
    console.log(error);
  }

  return NextResponse.json({ data,error });
}
