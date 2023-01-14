import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <ul>
            <li><Link to='/'>Weather Map</Link></li>
            <li><Link to='/history'>Weather History</Link></li>
        </ul>
    )
}
export default Nav