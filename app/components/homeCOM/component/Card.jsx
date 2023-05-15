import Image from "next/image"
import Link from "next/link"
export default function Card({id}) {
  console.log(id);
    return (
      <Link href='/store/123' >
      <div className='flex flex-col border-black border-2 border-spacing-2 w-40 h-52 rounded p-6 m-1 bg-teal-50 hover:text-lg ' >
        <Image
        className="h-64 w-96 "
        src="/testTback.png" 
        width={1000}
        height={1100}
        alt="img"
      />
      <div className="border-t-2 border-black text-center " >
      <h1>تحفة فنية</h1>
      </div>
      </div>
      </Link>
    )
  } 
  