type typ = {
  params: Promise<{ title: string }>;
};


export const metadata = {
  title:`hello aziz`
}
export default async function Artikals({params}:typ) {
  const data = await params;

  return (
    <>
      <h1 style={{ color: "red" }}>hello worlds</h1>
      <h1>{data.title}</h1>
    </>
  );
}