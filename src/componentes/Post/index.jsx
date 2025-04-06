import { formatDistanceToNow } from 'date-fns'
import Comentarios from '../Comentarios'
import styles from './Post.module.css'
import { useState } from 'react'
import Comment from './Comets/Coment'

export default function Post({ author, publishedAt, }) {
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
    }).format(publishedAt)



    const [comentarios, setComentarios] = useState(['Post muit bacana, hein?'])

    function criarNovoComentario(event) {
        event.preventDefault()
        const novoComentarioTexto = event.target.coment.value
        setComentarios([...comentarios, novoComentarioTexto])

        event.target.coment.value = ''


    }
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

            <form onSubmit={criarNovoComentario} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea name='coment' placeholder='Deixe um comentário' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>
            <div className={styles.content}>

                {comentarios.map(coment => {
                    return <Comment content={coment} />
                })}

            </div>
        </article>
    )
}