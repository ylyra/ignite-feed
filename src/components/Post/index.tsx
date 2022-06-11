import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
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
  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const { handleSubmit, register, reset } = useForm<CommentFormProps>({
    defaultValues: {
      comment: "",
    },
  });
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  const onSubmit: SubmitHandler<CommentFormProps> = (data, e) => {
    setComments((oldComments) => [...oldComments, data.comment]);
    reset();
  };

  const handleDeleteComment = (comment: string) => {
    setComments((oldComments) => oldComments.filter((c) => c !== comment));
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={post.author.avatar} alt="avatar" />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <main className={styles.content}>
        {post.content.map((content) => {
          switch (content.type) {
            case "paragraph":
              return <p>{content.content}</p>;
            case "link":
              return (
                <p>
                  <a href={content.content} target="_blank">
                    {content.content}
                  </a>
                </p>
              );
            default:
              return null;
          }
        })}
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
        {comments.map((comment) => (
          <Comment
            key={comment}
            comment={comment}
            onDelete={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  );
}
