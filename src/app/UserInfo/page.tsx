"use client"
// ユーザ情報ページ
import ProfileImg from '../component/profile_img'


export default function Home() {
  return (
    <div className='h-screen'>
      <ProfileImg width="250" height="250" src="/profile.jpg"/>
      <p>プロフィール</p>
        <p>年齢性別場所属性
        </p>
      <p>instaアカウント</p>
      <p>自己紹介ぶん</p>
      <p>ポートフォリオ</p>

    </div>
  )
}
