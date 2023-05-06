import Card from './component/Card'
export default function MostSelles() {
  return (
    <div className='flex flex-col w-full bg-slate-900  justify-center items-center border-t-2 border-teal-500' >
        <h1 className='mb-2 p-2 bg-teal-500 rounded-b-2xl text-white text-lg' >الاكثر مبيعا</h1>
        <div className='flex justify-center flex-wrap m-3 ' >
        <Card/>
        <Card/>
        <Card/> 
        <Card/> 
        </div>
    </div>
  )
}
