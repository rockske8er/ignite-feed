import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";
import s from "./styles.module.css";

const Sidebar = () => {
  return (
    <aside className={s.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1567641091603-0a84d19c87c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        className={s.sidebar__cover}
      />

      <div className={s.sidebar__profile}>
        <Avatar hasBorder src="https://github.com/markus90souza.png" />

        <strong className={s.username}>Marcos de Souza</strong>
        <span className={s.desc}>React Native Developer</span>
      </div>

      <footer className={s.sidebar__footer}>
        <a className={s.link} href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
};

export { Sidebar };
