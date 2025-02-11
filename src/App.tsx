import useSWR from "swr";
import "./App.css";
import { getAllData } from "./utils/supabaseFunction";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Card from "./components/Card";

function App() {
  const { data, error, isLoading } = useSWR("fetchData", getAllData, { revalidateIfStale: false });

  return (
    <>
      <Layout>
        <Header />
        <div>
          {data ? (
            <div className="flex flex-wrap justify-between">
              {data.map((data) => {
                return (
                  <Card key={data.id}>
                    <div className="w-[70%] mx-auto h-[230px]">
                      <img src={`${data.img}`} />
                    </div>
                    <div className="font-bold">{data.name}</div>
                    <div className="font-bold">{data.group}</div>
                    <div className="font-bold">{data.country}</div>
                    <div className="font-bold">{data.birthday}</div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}

export default App;
