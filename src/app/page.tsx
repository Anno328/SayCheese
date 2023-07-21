// homeページ
import Image from 'next/image'
import UserCard from './component/user_card'

export default function Home() {
  //:TODO ログインしてなかったら/loginに遷移
  return (
      <div>
        <h1 className="text-3xl ">
          Welcome to SayCheese!
        </h1>
        <UserCard/>
        <UserCard/>
        <UserCard/>

      </div>
  )
}
