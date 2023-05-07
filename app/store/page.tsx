import Crd from '../components/homeCOM/component/Card'
import Filter from '../components/storeCOM/filter'
export default function Home() {
  return (
<>
    <div className='flex flex-col' >
    {/* <Filter/> */}
    <div className='flex flex-wrap justify-center items-center' >
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    <Crd/>
    </div>
    </div>
</>
  )
}
