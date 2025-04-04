import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'


export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

            <div className={styles.profile}>
                <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_640.jpg"  />

                <strong className={styles.nome}>Elias de souza</strong>
                <span className={styles.spa}>Web Developer</span>
            </div>

            <footer> <a href="#"> <PencilLine size={16}/>Editar seu perfil</a> </footer>
        </aside>
    )
}