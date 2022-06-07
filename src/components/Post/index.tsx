import { SubmitHandler, useForm } from "react-hook-form";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import styles from "./styles.module.scss";

type PostProps = {
  post: {
    id: number;
    author: {
      name: string;
      avatar: string;
      role: string;
    };
    content: {
      type: string;
      content: string;
    }[];
    publishedAt: Date;
  };
};

type CommentFormProps = {
  comment: string;
};

export function Post({ post }: PostProps) {
  const { handleSubmit, register } = useForm<CommentFormProps>({
    defaultValues: {
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<CommentFormProps> = (data) => {
    console.log(data);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://i.pravatar.cc/150" alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>Darrell Robinson</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de Maior às 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <main className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </main>

      <footer>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
          <label htmlFor="comment_input">Deixe o seu feedback</label>
          <textarea
            id="comment_input"
            placeholder="Deixe um comentário"
            {...register("comment", {
              required: "É necessário preencher este campo",
            })}
          />
          <div>
            <button type="submit">Publicar</button>
          </div>
        </form>
      </footer>

      <div className={styles.comments}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
