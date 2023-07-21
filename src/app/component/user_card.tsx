// ユーザ情報表示コンポーネント
import ProfileImg from '../component/profile_img'

export default function UserCard() {
  
  return (
    <div className='border-2 border-sky-500'>
        <ProfileImg/>
        <p>username</p>
        <p>discription</p>
    </div>
  )
}
