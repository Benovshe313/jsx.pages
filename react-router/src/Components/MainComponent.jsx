import { useState } from "react"
import { products } from "../assets/data"
import styled from "styled-components"
import ProductsPage from "../Pages/ProductsPage"
import { Route, Routes } from "react-router-dom"
import ProductDetails from "../Pages/ProductDetails"

function MainComponent() {
    const [array, setArray] = useState([...products])

    return (
        <PageMain>
            <Routes>
                <Route path = '/products'
                element = {<ProductsPage
                array={array}
                setArray={setArray}/>} />
                <Route
                path="/products/:productId"
                element={<ProductDetails array = {array}/>} />
            </Routes>
        </PageMain>
    )
}

export default MainComponent

const PageMain = styled.main`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;