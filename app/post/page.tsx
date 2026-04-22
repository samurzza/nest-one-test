import Link from "next/link"



export default async function home(){

    type postType = [ {
    "userId": number,
    "id": number,
    title: string,
    body: string},]

    const posts = await fetch("https://jsonplaceholder.typicode.com/posts",{
        next:{
            revalidate:120
        }
    })


    const resolt:postType = await posts.json()
    const allPost = resolt.map((e)=>{
        return(
            <Link key={e.id} href={`/post/${e.id}`}>
            <div style={{ padding:`7.5px`, margin:`15px`}} className="bg-amber-500 hover:bg-amber-300 transition-all cursor-pointer"  >
                <h1 style={{fontWeight:`bold`, fontSize:`19px` }}>{e.title}</h1>
                <p>{e.body}</p>
            </div>
            </Link>
        )
    })

    return(
        <>
            <div>
                {allPost}
            </div>
        </>
    )
}