import Card from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'
import getserch from "../../lib/getserch"
export default async  function Home({params}) {
  const text = params.serch
  const textdata = await getserch(text)
  console.log(textdata , "textdata");
  return (
  <>
    <div className='flex flex-col' >
    {/* <Filter/> */}
    <div className='flex flex-wrap justify-center items-center' >
      {textdata !== [] ? textdata.map((e ,i )=>(<><Card id={e.id} text={e.text} url={e.url}  key={i} /></>)) : "now data found" }
    </div>
    </div>
</>
  )
}
