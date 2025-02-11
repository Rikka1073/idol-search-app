import useSWR from "swr";
import "./App.css";
import { getAllData } from "./utils/supabaseFunction";

function App() {
  const { data, error, isLoading } = useSWR("fetchData", getAllData, { revalidateIfStale: false });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-outline">Default</button>
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
    </>
  );
}

export default App;
