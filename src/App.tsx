import "./App.css";
import PageRoute from "./router/PageRoute";

// const today = new Date();
// const year = today.getFullYear();
// const month = ("0" + (today.getMonth() + 1)).slice(-2);
// const day = ("0" + today.getDate()).slice(-2);
// const todayStr = `${year}-${month}-${day}`;
// console.log(todayStr);

function App() {
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   // console.log(e.target.value);
  //   console.log(inputValue);
  //   setInputValue(e.target.value);
  //   searchDate(e.target.value);
  // };

  // const searchDate = (value: string) => {
  //   if (value === "") {
  //     return console.log("empty");
  //   }
  // };

  // searchDate(inputValue);

  return (
    <>
      <PageRoute />
    </>
  );
}

export default App;
