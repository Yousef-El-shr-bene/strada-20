export default async function getonecrd(text: BodyInit | null | undefined) {
    const data = await fetch(`${process.env.NEXTAUTH_URL}/api/serch`, {
      method: "POST",
      body: JSON.stringify({ text: text }),
    } as any);
    const { textserch } = await data.json();
    return textserch;
}