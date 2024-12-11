import { Link } from "react-router-dom";

function Header(){
    return (
        <ul>
           
            <li><Link to = '/products'>Products</Link></li>
        </ul>
    )
}

export default Header