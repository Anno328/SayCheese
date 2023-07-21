// プロフィール写真
import Image from 'next/image'

export default function ProfileImg() {
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid #fff',
      }
       
  return (
    <div className=''>
        <Image
        src="/profile.jpg"
        width={250}
        height={250}
        alt="Picture of the user"
        style={imageStyle}
        />
    </div>
  )
}
