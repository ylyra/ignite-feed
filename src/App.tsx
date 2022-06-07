import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import "./styles/global.scss";
import styles from "./styles/App.module.scss";

const posts = [
  {
    id: 1,
    author: {
      name: "Darrell Robinson",
      avatar: "https://i.pravatar.cc/150",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-11 08:13:30"),
  },
  {
    id: 2,
    author: {
      name: "Jeremiah Jennings",
      avatar: "https://i.pravatar.cc/150",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-20 08:13:30"),
  },
];

function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </section>
    </>
  );
}

export default App;
