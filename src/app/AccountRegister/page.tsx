"use client"
// アカウントページ
import ProfileImg from '../component/profile_img'
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit } = useForm();
  const onSubmit: any = data => console.log(data);

  return (
    <div className='h-screen'>
      <ProfileImg width="250" height="250" src="/profile.jpg"/>

      <form className='' onSubmit={handleSubmit(onSubmit)}>

        <div>
          <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>プロフィール</p>
          <div>
            <input className='my-5' {...register("email")} placeholder="メールアドレス" />
            <br />
            <input className='my-5' {...register("pass")} placeholder="パスワード" />
            <br />
          </div>
          <input {...register("userName")} placeholder="ユーザ名" />
          <div>
            <select {...register("age")}>
              <option value="">年齢</option>
              <option value="M">20代前半</option>
              <option value="F">20代後半</option>
              <option value="O">その他</option>
            </select>
          </div>
          <div>
            <select {...register("sex")}>
              <option value="">性別</option>
              <option value="M">男性</option>
              <option value="F">女性</option>
              <option value="O">その他</option>
            </select>
          </div>
          <div>
            <select {...register("place")}>
              <option value="">場所</option>
              <option value="M">北海道</option>
              <option value="F">青森</option>
              <option value="O">その他</option>
            </select>
          </div>
          <div>
            <select {...register("type")}>
              <option value="">タイプ</option>
              <option value="M">カメラマン</option>
              <option value="F">モデル</option>
            </select>
          </div>
        </div>

        <div>
          <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>Instagram</p>
          <input {...register("insta")} placeholder="Instagram URL" />
        </div>

        <div>
          <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>自己紹介</p>
          <textarea {...register("description")} placeholder="自己紹介" />
        </div>

        <div>
          <p>他のユーザがあなたを閲覧できるようにする</p>
          <input
            type="checkbox"
            placeholder="他のユーザがあなたを閲覧できるようにする"
            value="yes"
            {...register("isVisible")}
          />
        </div>

        {/* :TODO ポートフォリオで写真集表示できるように */}
        {/* <div>
          <p className='text-cyan-600 my-5 text-lg tracking-wide	font-semibold text-left'>ポートフォリオ</p>
        </div> */}

        <input className='bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-slate-50 rounded-lg px-5' type="submit" value="登録"/>
      </form>
    </div>
  )
}
