import useSWR from "swr";
import "./App.css";
import { getAllData } from "./utils/supabaseFunction";

function App() {
  const { data, error, isLoading } = useSWR("fetchData", getAllData);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button className="btn btn-outline">Default</button>
    </>
  );
}

export default App;
