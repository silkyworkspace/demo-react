import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/react-typed">タイピングアニメーション</Link>
        <Link to="/react-icons">アイコン</Link>
      </nav>
    </header>
  )
}

export default Header
