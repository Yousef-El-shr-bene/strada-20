export default async function getnewst() {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/newst`)
    const imgdata = await data.json()

    console.log(data , 111);
  return await imgdata.imgdata
}
