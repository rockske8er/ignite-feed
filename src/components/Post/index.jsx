import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { Comment } from "./../Comment";
import s from "./styles.module.css";

const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState([]);

  const [comment, setComment] = useState("");
  const publishedAtFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'ás' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const handleDeleteComment = (commentToDelete) => {
    const commentsWithouToDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithouToDeleteOne);
  };

  const handleCommentInvalid = () => {
    event.target.setCustomValidity("Esse campo e obrigátorio");
  };

  return (
    <article className={s.post}>
      <header className={s.post__header}>
        <div className={s.post__profile}>
          <Avatar hasBorder src={author.avatar_url} />

          <div className={s.profile__info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={s.post__content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}

        <p>
          <a href=""> #novoprojeto </a>
          <a href=""> #nlw</a>
          <a href=""> #rocketseat </a>
        </p>
      </div>

      <form className={s.comment__form} onSubmit={handleCreateNewComment}>
        <strong>Deixe sue feedback!</strong>
        <textarea
          placeholder={"Deixe seu comentario"}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onInvalid={handleCommentInvalid}
          required
        />

        <footer>
          <button disabled={comment.length === 0} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={s.comment__list}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={handleDeleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export { Post };
