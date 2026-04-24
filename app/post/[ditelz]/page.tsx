import { resolve } from "path";

type typ = {
  params: Promise<{ ditelz: string }>;
};


export default async function name({params}:typ) {
    const par = await params;

   await new Promise<void>((resolve) => {
        setTimeout(()=>{
            resolve()
        },1500)
    })
    
    type postType =  {
    userId: number,
    id: number,
    title: string,
    body: string};

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${par.ditelz}`,{
        next:{
            revalidate:120
        }
    })
    
    const resolt:postType = await post.json()
    return(
        <div style={{ padding:`7.5px`, margin:`15px`}} className="bg-amber-500 hover:bg-amber-300 transition-all cursor-pointer">
            <hr/>
            <h1 style={{fontWeight:`bold` , fontSize:`19px`}}>{resolt.title}</h1>
            <hr/>
            <p>{resolt.body}</p>
            <hr/>
        </div>
    )
}