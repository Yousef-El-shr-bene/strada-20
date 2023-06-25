import Card from '../../components/homeCOM/component/Card'
export const revalidate = 0
export default async  function Home({params}) {
  const text = params.serchText
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
    <div className='flex flex-wrap justify-center items-center' >
      {textdata.length !== 0 ? textdata.map((e ,i )=>(<><Card id={e.id} text={e.text} url={e.url}  key={i} /></>)) : <h1 className='text-base font-bold' >no data found for {text}</h1> }
    </div>
    </div>
</>
)}