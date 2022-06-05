import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />

        <div>
          <Post />
          <Post />
        </div>
      </Layout>
    </>
  );
};

export { App };
