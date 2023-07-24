// ユーザ情報表示コンポーネント
import ProfileImg from '../component/profile_img'
import Link from 'next/link'
import { Badge,Grid } from "@nextui-org/react";

export default function UserCard(props:{name:string,sex:string,place:string,src:string,userid:string}) {

  return (
    <div className='bg-white active:bg-slate-100 mb-3 drop-shadow-xl rounded-lg text-center p-5'>
      <Link href={{pathname: "/UserInfo", query: { userid: props.userid }}}>
        <ProfileImg width="250" height="250" src={props.src}/>
        <p className='text-cyan-600	text-xl tracking-wide	font-semibold'>{props.name}</p>
        <Grid.Container gap={1}>
          <Grid>
            <Badge variant="flat">モデル</Badge>
          </Grid>
          <Grid>
            <Badge variant="flat">20代</Badge>
          </Grid>
          <Grid>
            <Badge variant="flat">{props.place}</Badge>
          </Grid>
        </Grid.Container>
      </Link>
    </div>
  )
}
