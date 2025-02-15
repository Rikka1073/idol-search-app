import { useState } from "react";

import "./App.css";
import Category from "./components/Category";
import Layout from "./components/Layout";
import PageRoute from "./router/PageRoute";
import Header from "./components/Header";

function App() {
  const [selectedGroup, setSelectedGroup] = useState("");
  return (
    <>
      {selectedGroup}
      <Layout>
        <Header />
        <Category setSelectedGroup={setSelectedGroup} />
        <PageRoute />
      </Layout>
    </>
  );
}

export default App;
