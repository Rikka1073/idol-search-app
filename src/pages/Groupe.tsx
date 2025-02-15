import { useParams } from "react-router";
import { getAllData } from "../utils/supabaseFunction";
import Card from "../components/Card";
import useSWR from "swr";

const Groupe = () => {
  const { id } = useParams();

  const fetcher = async () => {
    const res = await getAllData();
    const filterRes = res.filter((data) => data.group === id);
    console.log(filterRes);
    return filterRes;
  };

  const { data = [], isLoading } = useSWR(["getIdolData", id], fetcher);

  return (
    <>
      <h2 className="text-2xl font-bold mt-5 text-center">{id}</h2>
      <div className="grid grid-cols-4 gap-4">
        {data &&
          data.map((data) => {
            return (
              <Card key={data.id}>
                {data.member === true ? (
                  <span className="bg-green-300 badge absolute right-0 -top-3">Member</span>
                ) : data.member === false && data.now_team !== null ? (
                  <span className="bg-green-300 badge absolute right-0 -top-3">
                    {data.now_team}
                  </span>
                ) : (
                  false
                )}
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
