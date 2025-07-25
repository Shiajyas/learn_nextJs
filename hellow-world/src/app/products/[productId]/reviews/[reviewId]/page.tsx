
import { notFound } from "next/navigation"

export default async function({params}: {params: Promise<{productId: string,reviewId : string}>}){
    
    let {reviewId,productId} = await params

    if(parseInt(reviewId) > 999){
      notFound()
    }

    return (
        <h1>product id {productId} and review id :{reviewId} </h1>
    )
}