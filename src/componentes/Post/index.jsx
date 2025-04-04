import Comentarios from '../Comentarios'
import styles from './Post.module.css'

export default function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_640.jpg" />
                    <div className={styles.authorInfo}>
                        <strong>Elias de souza</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='11 de maio às 08:13' dateTime='2022-05-11 14:19:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur necessitatibus iste incidunt dolore quaerat expedita tempora pariatur hic voluptates atque. Reprehenderit corporis quisquam hic. Odio consequuntur veritatis voluptas consectetur illo?</p>
                <p><a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <Comentarios/>
            <Comentarios/>
            <Comentarios/>
        </article>
    )
}