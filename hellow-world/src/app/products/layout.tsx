

export default function ProductPageLayout({children}:{children: React.ReactNode}){
return (
    <>
    <div>
        <h1>Featured Product</h1>
   {children}
 
    </div>
 
    </>
)
}