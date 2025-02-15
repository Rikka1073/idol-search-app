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

type CategoryProps = {
  setSelectedGroup: (group: string) => void;
};

const Category = ({ setSelectedGroup }: CategoryProps) => {
  const onClickButton = (group: string) => {
    console.log(`${group}です`);
    setSelectedGroup(group);
  };

  return (
    <div className="flex space-x-2">
      {idolData.map((data) => {
        return (
          <div key={data.id}>
            <a
              href={`/${data.group}`}
              className="btn btn-outline btn-xs"
              onClick={() => onClickButton(data.group)}
            >
              {data.group}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
