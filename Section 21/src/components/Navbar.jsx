import styles from "./Navbar.module.css"
import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header className={styles.header}>
            <nav className={styles.list}>
                <ul>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                isActive ? styles.active : undefined
                            }
                            // style={({isActive}) => isActive ? {color: "red"} : undefined}
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/products" 
                            className={({isActive}) => 
                                isActive ? styles.active : undefined
                            }
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}