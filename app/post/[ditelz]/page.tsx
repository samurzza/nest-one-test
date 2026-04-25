import { Suspense } from "react";
import PostAli from "@/app/contetnt/postAli"

type typ = {
  params: Promise<{ ditelz: string }>;
};


export default async function name({params}:typ) {
    const par = await params;

    return(
    <>
    <div style={{ padding:`7.5px`, margin:`15px`}} className="bg-amber-500 hover:bg-amber-300 transition-all cursor-pointer">
        <h1>all ditalze</h1>
        <Suspense fallback={<div>loding . . .</div>}>
            <PostAli postId={Number(par.ditelz)} />
        </Suspense>
    </div>
    </>
    )
}