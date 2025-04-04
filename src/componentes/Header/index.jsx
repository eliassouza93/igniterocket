import styles from './Header.module.css'
import igniteLogo from '../../assets/ignite-logo.svg'

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={igniteLogo} alt='logotipo ignite' />
            <h1> Ignite Feed </h1>

        </div>
    )
}