type typ = {
  params: Promise<{ title: string }>;
};


export const metadata = {
  title:`hello aziz`
}

export default async function Artikals({params}:typ) {
  const data = await params;

  const respons = await fetch('https://jsonplaceholder.typicode.com/todos')
  const todo:[
    {
      userId: number,
      id: number,
      title: string,
      completed: boolean
    },
  ] = await respons.json();
  

const contensst = todo.map((e) => {
  return (
    <div key={e.id} className="bg-amber-50 p-3 m-5">
      <h1>{e.title}</h1>
      <p>ID is : {e.id}</p>
      <p>completed or not : {e.completed.toString()}</p>
    </div>
  );
});

  return (
    <>
      <h1 style={{ color: "red" }}>hello worlds</h1>
      <h1>{data.title}</h1>

      <div className="w-full bg-indigo-500 pt-5">
        
          {contensst}
        
      </div>
    </>
  );
}