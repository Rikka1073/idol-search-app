import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllData } from "../utils/supabaseFunction";
import Card from "../components/Card";
import useSWR from "swr";

type IdolData = {
  id: number;
  name: string;
  group: string;
  country: string;
  birthday: string;
  img: string;
};
const Groupe = () => {
  const { id } = useParams();
  // const [displayData, setDisplayData] = useState<IdolData[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await getAllData();
  //     console.log(res);
  //     const filterRes = res.filter((data) => data.group === id);
  //     console.log(filterRes);
  //     setDisplayData(filterRes);
  //   };
  //   fetchData();
  // }, [id]);

  const fetcher = async () => {
    const res = await getAllData();
    const filterRes = res.filter((data) => data.group === id);
    return filterRes;
  };

  const { data = [], isLoading } = useSWR(["getIdolData", id], fetcher);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {data &&
          data.map((data) => {
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
      {isLoading && (
        <div className="flex justify-center mb-10 h-96">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default Groupe;
