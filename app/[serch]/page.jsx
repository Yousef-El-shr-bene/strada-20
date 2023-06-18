import Card from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'
export default async  function Home({params}) {
  const text = params.serch
 async function getserch(text) {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/serch`, {
      method: "POST",
      body: JSON.stringify({ text: text }),
    });
    const { textserch } = await data.json();
    return textserch;
}
  const textdata = await getserch(text)


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
