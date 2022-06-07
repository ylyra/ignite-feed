import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.scss";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar src="https://i.pravatar.cc/150" alt="avatar" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jesus Ramos</strong>
              <time title="11 de Maior às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devor, parabéns!!</p>
        </div>

        <button className={styles.likePost}>
          <ThumbsUp />
          Aplaudir <span>20</span>
        </button>
      </div>
    </div>
  );
}
