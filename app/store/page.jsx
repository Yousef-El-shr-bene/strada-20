import Card from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'

export async function getStaticPaths() {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/newst`)
  const {imgdata} = await data.json()
  return { props : { imgdata } };
}

export default  function Home({imgdata}) {


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
