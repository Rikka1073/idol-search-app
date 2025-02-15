import { useState } from "react";
import Pagination from "../components/Pagination";
import Card from "../components/Card";
import { getIdolData } from "../utils/supabaseFunction";
import useSWR from "swr";

const Home = () => {
  const limit = 8;
  const today = "07/21";
  const [page, setPage] = useState(1);
  // const [idolData, setidolData] = useState<IdolData[]>([]);

  // type IdolData = {
  //   id: number;
  //   name: string;
  //   group: string;
  //   country: string;
  //   birthday: string;
  //   img: string;
  // };

  const fetcher = async (page: number, limit: number) => {
    const res = await getIdolData(page, limit);
    return res;
  };

  const { data = [], isLoading } = useSWR(["getIdolData", page], () => fetcher(page, limit));

  return (
    <>
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
        {isLoading && (
          <div className="flex justify-center mb-10 h-96">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
      <Pagination setPage={setPage} page={page} data={data} limit={limit} />
    </>
  );
};

export default Home;
