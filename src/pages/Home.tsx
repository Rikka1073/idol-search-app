import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import Layout from "../components/Layout";
import Category from "../components/Category";
import Card from "../components/Card";
import { getAllData } from "../utils/supabaseFunction";

const Home = () => {
  const limit = 8;
  const today = "07/21";
  const [page, setPage] = useState(1);
  const [data, setData] = useState<IdolData[]>([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [inputValue, setInputValue] = useState("");

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

  return (
    <Layout>
      {/* <Header inputValue={inputValue} /> */}
      <Category setSelectedGroup={setSelectedGroup} />
      <div className="mb-10">
        {data && (
          <div className="flex flex-wrap justify-between">
            {data.map((data) => {
              return (
                <Card key={data.id} className={`${today === data.birthday ? "bg-red-100" : ""}`}>
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
      <Pagination setPage={setPage} page={page} data={data} limit={limit} />
    </Layout>
  );
};

export default Home;
