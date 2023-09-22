import React from 'react';
 import ProductList from '../../Component/Productlist';
// import React, {useState, useEffect} from 'react';


// function ProductPage() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Replace with the actual API URL for fetching product data
//     const apiUrl = 'https://dummyjson.com/products/1';

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching product data:', error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="product-page">
//       <h1>Product Page</h1>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="product-list">
//           {products.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <h2>{product.name}</h2>
//               <p>Price: ${product.price}</p>
//               <p> Description:{product.description}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductPage;

const ProductPage = () => {
  return (
    <div className=''>
      {/* <h1>Product Details</h1>
      <p>This is a product description.</p> */}
      <ProductList /> 
    </div>
  );
};

export default ProductPage;
