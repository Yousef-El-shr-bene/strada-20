import Card from './component/Card'




export default function Newcrds({data}) {
  return (
    <div className='flex flex-col w-full bg-slate-800 justify-center items-center border-t-2 border-teal-500 ' >
        <h1 className='mb-2 p-2 bg-teal-500 rounded-b-2xl text-white text-lg' > جديد </h1>
        <div className='flex justify-center flex-wrap m-3 ' >
            {data && data.map((e)=>(<><Card id={e.id} text={e.text} url={e.url} key={e.id}/></>))}
        </div> 
    </div>
  ) 
}   