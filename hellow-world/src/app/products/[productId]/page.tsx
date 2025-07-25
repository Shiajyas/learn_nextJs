


export default async function ProductDetail({params}:{params: Promise<{productId: string}>}) {
    
    let {productId} =  (await params)

    return (
        <div  >
            Details for product : {productId}
        </div>
    )
}