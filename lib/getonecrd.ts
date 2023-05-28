export default async function getonecrd(id: BodyInit | null | undefined) {
  console.log(id);
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/crdinfo`, {
    method: "POST",
    body: JSON.stringify({ id: id }),
  } as any);
  const { crdinfo } = await data.json();
  console.log("crdinfo.js", crdinfo);
  return crdinfo;
}
