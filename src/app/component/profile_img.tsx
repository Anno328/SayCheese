// プロフィール写真
import Image from 'next/image'

export default function ProfileImg(props:{src:string,width:number,height:number}) {
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
    }

  return (
    <div className=''>
        <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="Picture of the user"
        style={imageStyle}
        />
    </div>
  )
}
