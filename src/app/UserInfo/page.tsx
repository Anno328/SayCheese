"use client"
// ユーザ情報ページ
import ProfileImg from '../component/profile_img'
import { useState,useEffect,useContext } from 'react';
import { useSearchParams } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    const userid = searchParams.get("userid");
    console.log(userid)

    const fetchUser = async () => {
      const response = await fetch(`/api/userInfo?userid=${userid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.json();
      setUser(data.User);
      console.log(data);
    };
    fetchUser();
  }, []);

  return (
    <div className='h-screen'>
      <ProfileImg width="250" height="250" src="/profile.jpg"/>
      <p className='text-cyan-600	text-xl tracking-wide	font-semibold'>ユーザ名</p>
      <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>プロフィール</p>
        <p>年齢性別場所属性</p>
        <p>texttexttexttexttexttexttexttexttexttext</p>
        <p>texttexttexttexttexttexttexttexttexttext</p>
        <p>texttexttexttexttexttexttexttexttexttext</p>

      <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>Instagram</p>
      <p>texttexttexttexttexttexttexttexttexttext</p>

      <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>自己紹介文</p>
      <p>texttexttexttexttexttexttexttexttexttext</p>

      <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>ポートフォリオ</p>
      <p>texttexttexttexttexttexttexttexttexttext</p>
      <p>texttexttexttexttexttexttexttexttexttext</p>
    </div>
  )
}
