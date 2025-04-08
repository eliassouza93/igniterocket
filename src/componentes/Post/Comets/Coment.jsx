import { useState } from 'react';
import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';

export default function Comment({ id, content, deleteComentario }) {
  function deletarComentario() {
    deleteComentario(id);
  }
  const [likeCount, setLikeCont] = useState(0)

  function likeComment() {
    setLikeCont(likeCount +1)
  }



  return (
    <div className={styles.comment}>
      <img src="https://cdn.pixabay.com/photo/2025/03/22/20/26/ai-generated-9487507_640.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Elias de souza</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>
            <button onClick={deletarComentario} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={likeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
