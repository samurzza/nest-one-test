import Link from "next/link";

export const metadata = {
    title:`test noe`
}

export default function TestOne(){
    return (
        <>
            <h1 className="text-4xl p-5 bg-amber-50">hello aziz</h1>
            
            <p className="bg-cyan-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum repellendus necessitatibus officiis. Reiciendis unde distinctio, fugit sit ullam earum ratione sint nisi minus. Commodi ut aliquam doloribus porro consectetur!</p>
            <p className="bg-cyan-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non rerum repellendus necessitatibus officiis. Reiciendis unde distinctio, fugit sit ullam earum ratione sint nisi minus. Commodi ut aliquam doloribus porro consectetur!</p>
            <button style={{color:`white`, backgroundColor:`gray` ,width:`150px` }} className="hover:bg-gray-800" ><Link href="/test1/learnMor">learn mor</Link></button>
        </>
    )
}