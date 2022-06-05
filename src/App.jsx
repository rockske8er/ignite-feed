import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Sidebar />

        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi qui
          porro consequuntur eaque. Fugiat, modi temporibus. Tempora atque
          nesciunt reprehenderit fuga, nemo impedit. Minus consequatur ipsum
          ducimus, eligendi neque ut.
        </div>
      </Layout>
    </>
  );
};

export { App };
