import styles from './Navbar.module.css'
import Link from 'next/link'

const NavBar = () => {
    return (
        /* return a navbar with a top level div, and links to the homepage, Game page, and History page! */
        /* Hint: the Next.js Link component may come in handy https://nextjs.org/docs/pages/api-reference/components/link */
        <div id={styles.navbar}>
            <div className={styles.title}>
                {/* Link to the home page here! */}
                <Link href="/">Home</Link>
            </div>

            {/* Link to other pages here! */}
            <div className={styles.nav_buttons}>
                <Link href="/game">Game Page</Link>
                <Link href="/gameHistory">History</Link>
            </div>

        </div>
    )
}

export default NavBar
// Export the NavBar, and import it in pages/_app.jsx to render it on all pages of your website!