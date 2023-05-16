import Card from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'
import getnewst from "../../lib/getnewst"


export default async  function Home() {
  const imgdata = await getnewst()

  return (
<>
    <div className='flex flex-col' >
    {/* <Filter/> */}
    <div className='flex flex-wrap justify-center items-center' >
   {imgdata && imgdata.map((e ,i )=>(<><Card id={e.id} text={e.text} url={e.url}  key={i} /></>))}
    </div>
    </div>
</>
  )
}
