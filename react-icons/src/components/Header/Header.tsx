import styles from './Header.module.css';

type Props = {
    text: string
}

export default function Header({text}: Props) {
    return (
        <header className={styles.header}>
            <h1>{text}</h1>
        </header>
    )
}
