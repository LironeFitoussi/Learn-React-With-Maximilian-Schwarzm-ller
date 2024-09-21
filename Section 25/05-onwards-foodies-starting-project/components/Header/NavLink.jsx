'use client';

// Styles
import classes from './NavLink.module.css';

// Next.js Hooks
import { usePathname } from 'next/navigation';

// Next.js Components
import Link from 'next/link';

export default function NavLink({ href, children }) {
    const pathname = usePathname();
    
    return (
        <Link href={href} className={pathname.startsWith(href) ? classes.active : ''}>
            {children}
        </Link>
    );
}
