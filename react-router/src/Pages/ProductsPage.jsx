
import styled from "styled-components"
import AddForm from "../Products/AddForm"
import ProductList from "../Products/ProductList"

function ProductsPage({array,setArray}) {

    return (
        <PageMain>
            <AddForm array = {array} setArray = {setArray} /> 
            <ProductList array={array} setArray={setArray} />
        </PageMain>
    )
}

export default ProductsPage

const PageMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;