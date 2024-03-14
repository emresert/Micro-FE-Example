import React ,{useState} from "react";
import ReactDOM from "react-dom";

import Header from "headerApp/Header";



const App = () => {

  const [selectedProducts, setSelectedProducts] = useState([])

  const products = [{
    id: "11", name: "Product 1", image: "https://picsum.photos/300/300"
  }, {
    id: "22", name: "Product 2", image: "https://picsum.photos/200/301"
  }, {
    id: "33", name: "Product 3", image: "https://picsum.photos/200/302"
  }, {
    id: "44", name: "Product 4", image: "https://picsum.photos/200/303"
  }, {
    id: "55", name: "Product 5", image: "https://picsum.photos/200/304"
  }]

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header
        selectedProducts={selectedProducts}
      />

      <div className="list-wrapper" style={{ margin: "25px" }}>

        {
          products.map((pItem, index) => {
            const checkData = selectedProducts.find((el) => el.id == pItem.id)
            return (
              <div key={index} className="item-wrapper" style={{ display: "flex", alignItems: "center", margin: "5px" }}>
                <div style={{ marginRight: "25px", maxHeight: "50px" }}>
                  <img src={pItem.image} style={{ maxHeight: "50px", borderRadius: "5px", border: "1px solid black" }} width={50} height={50} alt="item" />
                </div>
                <div style={{ marginRight: "25px" }}>{pItem.name}</div>
                <div>
                  <button style={{ backgroundColor: "dodgerblue", padding: "5px", borderRadius: "5px" , minWidth:"60px" ,color:"white", fontSize:"13px",cursor:"pointer" }} onClick={() => {
                   
                  
                    if (!checkData) {
                      let arr = []
                      selectedProducts.map((item) => {
                        arr.push(item)
                      })
                      arr.push(pItem)
                      setSelectedProducts(arr)
                    }
                  }}>
                    {
                      checkData ? "Seçildi" : "Seç"
                    }
                  
                  </button>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));
