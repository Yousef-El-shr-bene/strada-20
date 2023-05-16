
import Card from './component/Card'

export default async function Newcrds() {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/newst`)
    const imgdata = await data.json()
  return (
    <div className='flex flex-col w-full bg-slate-800 justify-center items-center border-t-2 border-teal-500 ' >
        <h1 className='mb-2 p-2 bg-teal-500 rounded-b-2xl text-white text-lg' > جديد </h1>
        <div className='flex justify-center flex-wrap m-3 ' >
            {imgdata.imgdata.map((e,i)=>(<Card id={e.id} text={e.text} url={e.url}  key={i}  />))}
        </div>
    </div>
  ) 
}