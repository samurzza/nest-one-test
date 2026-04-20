import Link from "next/link"

export const metadata = {
    title:`drid layout`
}
export default function NewHome(  {children}: Readonly<{children: React.ReactNode;}>){
    return(
            <div className="container mx-auto">
                <nav className=" text-white bg-red-300 w-full h-18 mt-4  flex  justify-center items-center ">
                    <Link  className=" bg-emerald-300 m-14 p-4 text-xl cursor-pointe hover:bg-emerald-400" href="/drid">Go To dird</Link>
                    <Link  className=" bg-emerald-300 m-14 p-4 text-xl cursor-pointe hover:bg-emerald-400" href="/drid/azoz" >Go To aziz</Link>
                    <Link  className=" bg-emerald-300 m-14 p-4 text-xl cursor-pointe hover:bg-emerald-400" href="/drid/no-thenk" >Go To no is umty</Link>
                </nav>
            <div style={{backgroundColor:`orange` , padding:`15px`, margin:`15px `}}>
                {children}
            </div>
        </div>
    )
}