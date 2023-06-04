import Newcrds from "../../components/homeCOM/Newcrds";
import getnewst from "../../../lib/getnewst"
import getonecrd from "../../../lib/getonecrd"
import Imgenav from "./imgenav"
import Order from "./order";
interface params {
  crdinfo : string 
}

export default async function CrdInfo({ params } : {params : params}) {
  const id : BodyInit | null | undefined  = params.crdinfo
  const imgdata = await getnewst()
  const onecrd = await getonecrd(id)
  return (

    <>
    
      <Imgenav onecrd={onecrd}  />
      <div>
        <Newcrds data={imgdata} />
      </div>
    </>
    
  );
}