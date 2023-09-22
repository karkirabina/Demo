import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with the actual API URL for fetching product data
    const apiUrl = "https://dummyjson.com/products";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products);
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <br></br>
      <h1 style={{fontSize:'24px', fontWeight:'bold'}}>Product List</h1>
      <br></br>
      <div className="grid grid-cols-4 gap-y-10 gap-x-10 mx-8 ">
        {products?.map((p, index) => (
          <div key={p.id} style={{display:"flex",paddingTop:"20px",paddingBottom:'20px',flexDirection:"column",borderRadius:'12px',borderColor:"#d3d3d3",alignItems:'center', border: "1px solid #000" }}>
            <h3>{p.name}</h3>
            {/* <p>Description: {p.description}</p> */}
            <p style={{textAlign:'center'}}>Price: ${p.price}</p>
            <img

              src={p.thumbnail}
              style={{ width: "200px", height: "200px", }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
