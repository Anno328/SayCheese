// プロフィール写真
import Image from 'next/image'
import { Avatar} from "@nextui-org/react";

export default function ProfileImg(props:{src:string,width:number,height:number}) {
    const imageStyle = {
        borderRadius: '50%',
    }

  return (
    <div className='flex justify-center my-5'>
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026702d"
          squared
          css={{ size: "$50" }}
        />
        {/* <Image
        src={props.src}
        width={props.width}
        height={props.height}
        alt="Picture of the user"
        style={imageStyle}
        /> */}
    </div>
  )
}
