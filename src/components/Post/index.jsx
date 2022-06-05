import s from "./styles.module.css";

const Post = () => {
  return (
    <article className={s.post}>
      <header className={s.post__header}>
        <div className={s.post__profile}>
          <img
            className={s.profile__avatar}
            src="https://github.com/markus90souza.png"
            alt=""
          />
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
          <a href=""> #novoprojeto #nlw #rocketseat </a>
        </p>
      </div>
    </article>
  );
};

export { Post };
