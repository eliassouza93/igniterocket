import Comentarios from '../Comentarios'
import styles from './Post.module.css'

export default function Post({author, publishedAt}) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      }).format(publishedAt)

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={author.avatarUrl} />

                    <div className={styles.authorInfo}>
                        
                        <strong> {author.name} </strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='11 de maio às 08:13' dateTime='2022-05-11 14:19:30'>{publishedDateFormatted}</time>
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
            <Comentarios />
            <Comentarios />
            <Comentarios />
        </article>
    )
}