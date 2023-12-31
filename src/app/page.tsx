"use client"

// homeページ
import Image from 'next/image'
import UserCard from './component/user_card'
import { useForm } from "react-hook-form";
import { useState,useEffect,useContext } from 'react';
import { AccountInfoContext } from './layout'
import { useRouter } from 'next/navigation';

export default function Home() {
  
  const { AccountInfo } = useContext(AccountInfoContext);
  const router = useRouter();
  const [users, setUsers] = useState([]);

  const Users = ()=>{
    console.log(users)
    if(users){
      return users.map((user) => 
      <UserCard name= {user.name} place={user.place} src="/profile.jpg" userid={user.userid}/>
      );
    }else{
      return 'loading';
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/user');
      const data = await response.json();
      setUsers(data.User);
      console.log(users);
    };
    // ログインしてなかったら/loginに遷移
    if(sessionStorage.getItem('isLogin') == "false"){
      router.push('/login');
    }else{
      fetchUsers();
    }
  }, []);

  const { register, handleSubmit } = useForm();
  const onSubmit: any = data => console.log(data);

  return (
      <div>
        {/* 検索窓 */}
        <div className='bg-white mb-3 rounded-lg flex flex-row'>
          <div className='basis-1/4 flex items-center'>
            <Image
            src="/search.png"
            width={70}
            height={70}
            alt="Picture of the Search"
            />
          </div>
          <form className='flex flex-row' onSubmit={handleSubmit(onSubmit)}>
            <div className='basis-1/4 flex items-center z-30 mx-1'>
              <select {...register("place")}>
                <option value="">場所</option>
                <option value="A">北海道</option>
                <option value="B">青森</option>
              </select>
            </div>
            <div className='basis-1/4 flex items-center z-30 mx-1'>
              <select {...register("type")}>
                <option value="">タイプ</option>
                <option value="A">カメラマン</option>
                <option value="B">モデル</option>
              </select>
            </div>
            <div className='basis-1/4 flex items-center z-30 mx-1'>
              <input className='bg-cyan-600 hover:bg-cyan-500 active:bg-cyan-700 text-slate-50	rounded-lg px-5' type="submit" value="検索"/>
            </div>
          </form>
        </div>
        {/* ユーザ一覧表示 */}
        <Users />
      </div>
  )
}
