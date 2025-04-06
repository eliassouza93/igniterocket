import styles from './Comment.module.css'

import { ThumbsUp, Trash } from 'phosphor-react';
 

export default function Comment({content}) {
  return (
    <div className={styles.comment}>
     <img src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_640.png"  />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
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