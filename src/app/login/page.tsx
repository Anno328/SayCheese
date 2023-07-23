"use client"

// ログインページ
import Image from 'next/image'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {

  const [loginInfo, setLoginInfo] = useState();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit: any = async(data) => {
    const response = await fetch('/api/login',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email:data.email,pass:data.pass}),
    });
    const loginInfo = await response.json();
    // setLoginInfo(loginInfo);
    console.log(loginInfo)

    // router.push('/');
  };

  return (
    <div className='h-screen'>
      <p className='text-cyan-600	text-xl tracking-wide	font-semibold'>
        SayCheeseにログイン
      </p>
      <Image
      src='/login.png'
      width='500'
      height='500'
      alt="Picture of the login"
      />
      <div>
        <form className='' onSubmit={handleSubmit(onSubmit)}>
          <input className='my-5' {...register("email")} placeholder="メールアドレス" />
          <br />
          <input className='my-5' {...register("pass")} placeholder="パスワード" />
          <br />
          <input className='bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-slate-50 rounded-lg px-5 my-5' type="submit" value="ログイン"/>
        </form>
      </div>
    </div>
  )
}
