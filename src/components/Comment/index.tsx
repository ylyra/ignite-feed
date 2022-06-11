import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./styles.module.scss";

type CommentProps = {
  comment: string;
  onDelete: (comment: string) => void;
};

export function Comment({ comment, onDelete }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleUserLike() {
    setLikeCount((oldCount) => oldCount + 1);
  }

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

            <button
              title="Deletar comentário"
              onClick={() => onDelete(comment)}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <button className={styles.likePost} onClick={handleUserLike}>
          <ThumbsUp />
          Aplaudir <span>{likeCount}</span>
        </button>
      </div>
    </div>
  );
}
