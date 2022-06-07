import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import s from "./styles.module.css";

const Comment = ({ content, onDeleteComment }) => {
  const [like, setLike] = useState(0);

  const handleRemoveComment = () => {
    onDeleteComment(content);
  };

  const handleLiked = () => {
    setLike(like + 1);
  };

  return (
    <div className={s.comment}>
      <Avatar src="https://github.com/markus90souza.png" />

      <div className={s.comment__box}>
        <div className={s.comment__content}>
          <header className={s.comment__content_header}>
            <div className={s.comment__content_profile}>
              <strong>Marcos de Souza</strong>
              <time>Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleRemoveComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer className={s.comment__box__footer}>
          <button className={s.btn__like} onClick={handleLiked}>
            <ThumbsUp size={20} /> Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
