import React, { useEffect , useState} from 'react'



const Header = ({ selectedProducts }) => {

    const [showModal,setShowModal] = useState(false)


    return (
        <>
        <div style={{
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#222831",
            color: "red"
        }}>

            <div className='logo-part' style={{marginLeft:"25px"}}>
                <img src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg" width={120} height={30} style={{ borderRadius: "5px" }} alt="" />
            </div>

            <div style={{color:"white",fontWeight:"bold"}}>
                Header-App MF
            </div>



            <div className='right-part' style={{ position: "relative" , marginRight:"25px" }}>
                {
                    selectedProducts.length > 0 && (
                        <div
                            style={{ position: "absolute", right: "-10px", top: "-10px", height: "30px", width: "30px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "red", color: "white", borderRadius: "100px" }}
                            onClick={()=>{


                                setShowModal(!showModal)


                            }}
                            >

                            {selectedProducts.length}</div>
                    )}
                <img src="https://images.pngnice.com/download/2007/E-Commerce-PNG-Transparent.png" width={50} height={30} style={{ borderRadius: "100px" }} alt="" />
            </div>



        </div>
            
            {
                showModal && (
                    <div style={{width:"400px",margin:"auto" , backgroundColor:"gainsboro" , borderRadius:"8px" , border:"2px solid gray" , padding:"10px" , marginTop:"10px"}}>
                        {
                            selectedProducts.map((sItem)=>{
                                return(
                                    <div>{sItem.name}</div>
                                )
                            })
                        }
                    </div>
                )
            }

        </>
    )
}

export default Header

