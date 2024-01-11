'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavBar() {
    const path = usePathname()

    return(
        <nav className="NavBar"
        style={{backgroundColor: '#0912b', color: '#14bbe5'}}>
            <ul className="menu">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/dash' className={path.startsWith('dash')? 'active':null}>
                    Dashboard</Link></li>
                    <li><Link href='/about' className={path.startsWith('dash')? 'active':null}>
                    Dashboard</Link></li>
            </ul>
        </nav>
    )
    
}