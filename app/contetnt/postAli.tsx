
type typ = {
  params: Promise<{ ditelz: string }>;
};


export default async function Post({ postId }: { postId: number }) {
    // const par = await params;

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

    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{
        next:{
            revalidate:120
        }
    })
    
    const resolt:postType = await post.json()
    return(
        <>
            <hr/>
            <h1 style={{fontWeight:`bold` , fontSize:`19px`}}>{resolt.title}</h1>
            <hr/>
            <p>{resolt.body}</p>
            <hr/>
       </>
    )
}