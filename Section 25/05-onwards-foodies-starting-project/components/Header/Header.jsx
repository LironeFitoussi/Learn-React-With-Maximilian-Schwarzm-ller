// Styles
import classes from './Header.module.css';

// Next.js Components
import Link from 'next/link';
import Image from 'next/image';

// Assets
import logoImg from '@/assets/logo.png';

// Custom Components
import NavLink from './NavLink';
const Header = () => {
    const links = [
        { href: '/meals', text: 'Browse Meals' },
        { href: '/comunity', text: 'Foodies Community' },
    ];

    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/' >
                <Image width={1024} height={1024} src={logoImg.src} alt="A Plate with food on it" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    {links.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.href}>{link.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;