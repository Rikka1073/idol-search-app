const idolData = [
  {
    id: 1,
    group: "IZ*ONE",
  },
  {
    id: 2,
    group: "TWICE",
  },
  {
    id: 3,
    group: "ITZY",
  },
];

const Category = () => {
  const onClickButton = (group: string) => {
    console.log(`${group}です`);
  };
  return (
    <div className="flex space-x-2">
      {idolData.map((data) => {
        return (
          <div key={data.id}>
            <button className="btn btn-outline btn-xs" onClick={() => onClickButton(data.group)}>
              {data.group}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
