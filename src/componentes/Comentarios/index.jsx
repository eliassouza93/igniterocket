import styles from './Comentarios.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export default function Comentarios({content,deleteComentario}) {


  function deletarComentario () {
    deleteComentario(content)
    console.log('tewte')
  }

  return (
    <div className={styles.comment}>
       <img src="https://cdn.pixabay.com/photo/2024/06/25/13/12/woman-8852664_640.jpg" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={deletarComentario} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}