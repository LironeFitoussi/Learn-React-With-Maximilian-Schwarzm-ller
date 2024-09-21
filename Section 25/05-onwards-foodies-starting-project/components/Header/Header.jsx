// Styles
import classes from './Header.module.css';

// Next.js Components
import Link from 'next/link';
import Image from 'next/image';

// Assets
import logoImg from '@/assets/logo.png';

const Header = () => {
    console.log(classes);
    
    return (
        <header className={classes.header}>
            <Link className={classes.logo} href='/' >
                <Image width={1024} height={1024} src={logoImg.src} alt="A Plate with food on it" priority/>
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href='/meals'>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href='/comunity'>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;