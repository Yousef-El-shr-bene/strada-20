import Newcrds from "../../components/homeCOM/Newcrds";
import Imgenav from "./imgenav";
interface params {
  crdinfo: string;
}
export const revalidate = 0
export default async function CrdInfo({ params }: { params: params }) {
  async function getnewst() {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/newst`);
    const { imgdata } = await data.json();
    return imgdata;
  }
  async function getonecrd(id: BodyInit | null | undefined) {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/crdinfo`, {
      method: "POST",
      body: JSON.stringify({ id: id }),
    } as any);
    const { crdinfo } = await data.json();
    return crdinfo;
  }
  const id: BodyInit | null | undefined = params.crdinfo;
  const imgdata = await getnewst();
  const onecrd = await getonecrd(id);
  return (
    <>
      <Imgenav onecrd={onecrd} />
      <div>
        <Newcrds data={imgdata} />
      </div>
    </>
  );
}
