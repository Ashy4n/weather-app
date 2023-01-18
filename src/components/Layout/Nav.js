import { NavLink } from "react-router-dom"
import styles from './Nav.module.css'

const Nav = () => {
    const NavLinkStyle = ({ isActive }) => isActive ? styles.active + " " + styles.NavLink : styles.NavLink 
   
    return (
        <div className={styles.container}>
            <NavLink className={NavLinkStyle} to='/'>Weather Map</NavLink>
            <NavLink className={NavLinkStyle} to='/history'>Weather History</NavLink>
        </div>
    )
}
export default Nav