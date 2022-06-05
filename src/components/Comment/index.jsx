import { ThumbsUp, Trash } from "phosphor-react";
import s from "./styles.module.css";

const Comment = () => {
  return (
    <div className={s.comment}>
      <img
        className={s.profile__avatar}
        src="https://github.com/markus90souza.png"
      />

      <div className={s.comment__box}>
        <div className={s.comment__content}>
          <header className={s.comment__content_header}>
            <div className={s.comment__content_profile}>
              <strong>Marcos de Souza</strong>
              <time>Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer className={s.comment__box__footer}>
          <button className={s.btn__like}>
            <ThumbsUp size={20} /> Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
