import useSWR from "swr";
import "./App.css";
import { getAllData } from "./utils/supabaseFunction";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  const { data, error, isLoading } = useSWR("fetchData", getAllData, { revalidateIfStale: false });

  return (
    <>
      <Layout>
        <Header />
        <div>
          {data ? (
            <div>
              {data.map((data) => {
                return (
                  <div key={data.id}>
                    <div>{data.name}</div>
                    <div>{data.group}</div>
                    <div>{data.country}</div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>データがありません</div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
