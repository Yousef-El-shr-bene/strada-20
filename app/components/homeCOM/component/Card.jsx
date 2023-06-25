import Image from "next/image";
import Link from "next/link";
export default function Card({ id, text, url }) {
  return (
    <Link href={`/store/${id}`}>
      <div className="flex flex-col w-72 h-max rounded border-2 border-solid m-5 hover:text-lg bg-white">
        <Image
          className="h-96 w-96 img3 block "
          src={url[0]}
          width={1000} 
          height={1100}
          alt={text}
        />
              <div className=" p-1 font-bold text-xs sm:text-base text-center text-black ">
          <h1 className="block" >{text}</h1>
        </div>
      </div>
    </Link>
  );
}