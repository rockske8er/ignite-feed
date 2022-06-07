import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      name: "Marcos de Souza",
      role: "UI Developer",
      avatar_url: "https://github.com/markus90souza.png",
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
        content: "👉 jane.design/doctorcare<",
      },
    ],

    published_at: new Date("2022-06-06 22:00:00"),
  },

  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      role: "CTO",
      avatar_url: "https://github.com/diego3g.png",
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
        content: "👉 jane.design/doctorcare<",
      },
    ],

    published_at: new Date("2022-06-05 11:00:00"),
  },
];

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.published_at}
              />
            );
          })}
        </main>
      </Layout>
    </>
  );
};

export { App };
