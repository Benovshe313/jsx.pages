
import { useParams } from "react-router-dom";
import styled from "styled-components"

function ProductDetails({ array }) {
    const {productId}  = useParams()
    const product = array.find((item) => item.id === parseInt(productId))

  if (!product) {
    return <p>Product not found!</p>
  }

  return (
    <Details>
      <p><span>Product Name: </span>{product.ProductName}</p>
      <p><span>Product Desc: </span>{product.ProductDesc}</p>
      <p><span>Product Price: </span>{product.ProductPrice} AZN</p>
    </Details>
  );
}

export default ProductDetails

const Details = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
`;
