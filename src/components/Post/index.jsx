import { Avatar } from "../Avatar";
import { Comment } from "./../Comment";
import s from "./styles.module.css";

const Post = () => {
  return (
    <article className={s.post}>
      <header className={s.post__header}>
        <div className={s.post__profile}>
          <Avatar hasBorder src="https://github.com/markus90souza.png" />

          <div className={s.profile__info}>
            <strong>Marcos de Souza</strong>
            <span>UI Developwe</span>
          </div>
        </div>

        <time title="06 de junho" dateTime="2022-06-94">
          Publicado há 1h
        </time>
      </header>

      <div className={s.post__content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href=""> 👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href=""> #novoprojeto </a>
          <a href=""> #nlw</a>
          <a href=""> #rocketseat </a>
        </p>
      </div>

      <form className={s.comment__form}>
        <strong>Deixe sue feedback!</strong>
        <textarea placeholder="Deixe seu comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={s.comment__list}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export { Post };
