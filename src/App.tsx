import "./App.css";
import { getAllData } from "./utils/supabaseFunction";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const limit = 8;
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IdolData[]>([]);

  type IdolData = {
    id: number;
    name: string;
    group: string;
    country: string;
    birthday: string;
    img: string;
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllData(page, limit);
      console.log(res);
      setData(res);
    };
    fetchData();
  }, [page]);

  const oncClickNext = () => {
    setPage(page + 1);
  };

  const oncClickPrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <Layout>
        <Header />
        <div className="mb-10">
          {data && (
            <div className="flex flex-wrap justify-between">
              {data.map((data) => {
                return (
                  <Card key={data.id}>
                    <div className="w-[70%] mx-auto h-[230px]">
                      <img src={`${data.img}`} className="w-full h-full" />
                    </div>
                    <div className="font-bold">{data.name}</div>
                    <div className="font-bold">{data.group}</div>
                    <div className="font-bold">{data.country}</div>
                    <div className="font-bold">{data.birthday}</div>
                  </Card>
                );
              })}
            </div>
          )}
          {data.length === 0 && (
            <div className="flex justify-center">
              <div className="text-2xl font-bold">No data</div>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <div className="join grid grid-cols-2">
            <button
              onClick={oncClickPrev}
              className="join-item btn border-green-300 bg-white rounded-tl-xl rounded-bl-xl"
              disabled={page === 1}
            >
              Previous page
            </button>
            <button
              onClick={oncClickNext}
              className="join-item btn border-green-300 bg-white rounded-tr-xl rounded-br-xl"
              disabled={data.length < limit}
            >
              Next
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
