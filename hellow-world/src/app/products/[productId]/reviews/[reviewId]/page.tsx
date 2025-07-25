
export default async function({params}: {params: Promise<{productId: string,reviewId : string}>}){
    
    let {reviewId,productId} = await params

    return (
        <h1>product id {productId} and review id :{reviewId} </h1>
    )
}