import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllData } from "../utils/supabaseFunction";
import Card from "../components/Card";

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
  const [displayData, setDisplayData] = useState<IdolData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllData();
      console.log(res);
      const filterRes = res.filter((data) => data.group === id);
      console.log(filterRes);
      setDisplayData(filterRes);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <div className="flex flex-wrap justify-between">
        {displayData
          ? displayData.map((data) => {
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
            })
          : null}
      </div>
    </>
  );
};

export default Groupe;
