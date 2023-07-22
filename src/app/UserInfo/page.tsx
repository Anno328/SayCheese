"use client"
// ユーザ情報ページ
import ProfileImg from '../component/profile_img'


export default function Home() {
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
