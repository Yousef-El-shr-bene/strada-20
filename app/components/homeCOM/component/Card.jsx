import Image from "next/image"
import Link from "next/link"
export default function Card({id,text,url}) {
  console.log(id);
    return (
      <Link href={`/store/${id}`} >
      <div className='flex flex-col border-black border-2 border-spacing-2 w-40 h-52 sm:w-64 sm:h-80 rounded p-6 m-1 bg-teal-50 hover:text-lg ' >
        <Image
        className="h-64 w-96 "
        src={url} 
        width={1000}
        height={1100}
        alt="img"
      />
      <div className="border-t-2 border-black text-center " >
      <h1>{text}</h1>
      </div>
      </div>
      </Link>
    )
  } 
  