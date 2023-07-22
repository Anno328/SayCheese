// ユーザ情報表示コンポーネント
import ProfileImg from '../component/profile_img'
import Link from 'next/link'

export default function UserCard(props:{name:string,sex:string,place:string,src:string}) {
  
  return (
    <div className='bg-white mb-3 drop-shadow-xl z-40 rounded-lg'>
      <Link href="/UserInfo">
        <ProfileImg width="250" height="250" src={props.src}/>
        <p>ユーザ名:{props.name}</p>
        <p>性別:{props.sex}</p>
        <p>場所:{props.place}</p>
        <p>属性(カメラ/モデル)</p>
      </Link>
    </div>
  )
}
