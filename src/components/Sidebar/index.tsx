import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://unsplash.it/500"
        alt="Unsplash Random Image"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://github.com/ylyra.png" alt="avatar" />
        <strong>Yan Lyra</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
