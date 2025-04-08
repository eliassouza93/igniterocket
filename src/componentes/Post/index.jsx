import { useState } from 'react';
import styles from './Post.module.css';
import Comment from './Comets/Coment';

export default function Post({ author, publishedAt }) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt);

  const [comentarios, setComentarios] = useState([]);
  const [novoComentarioTexto, setNovoComentarioTexto] = useState('');

  function criarNovoComentario(event) {
    event.preventDefault();

    if (novoComentarioTexto.trim() === '') return;

    const novoComentario = {
      id: crypto.randomUUID(), 
      content: novoComentarioTexto,
    };
    

    setComentarios([...comentarios, novoComentario]);
    setNovoComentarioTexto('');
  }

  function novoComentario(event) {
    setNovoComentarioTexto(event.target.value);
  }

  function deleteComentario(idParaDeletar) {
    const comentariosAtualizados = comentarios.filter(
      comentario => comentario.id !== idParaDeletar
    );
    setComentarios(comentariosAtualizados);
  }
  function comentarioInvalido (event) {
    event.target.setCustomValidity('')
    setNovoComentarioTexto(event.target.value)
  }

  

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title='11 de maio às 08:13' dateTime='2022-05-11 14:19:30'>{publishedDateFormatted}</time>
      </header>

      <form onSubmit={criarNovoComentario} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="coment"
          value={novoComentarioTexto}
          placeholder="Deixe um comentário"
          onInvalid={comentarioInvalido}
          onChange={novoComentario}
          required
        />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.content}>
        {comentarios.map(coment => (
          <Comment
            key={coment.id}
            id={coment.id}
            content={coment.content}
            deleteComentario={deleteComentario}
          />
        ))}
      </div>
    </article>
  );
}
