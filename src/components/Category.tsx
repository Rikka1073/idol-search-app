import { IdolData } from "../data/IdolData";

type CategoryProps = {
  setSelectedGroup: (group: string) => void;
};

const Category = ({ setSelectedGroup }: CategoryProps) => {
  const onClickButton = (group: string) => {
    console.log(`${group}です`);
    setSelectedGroup(group);
  };

  const selectIdol = IdolData;

  return (
    <div className="flex space-x-2">
      {selectIdol.map((data) => {
        return (
          <div key={data.id}>
            <a
              href={`/Idol/${data.group}`}
              className="btn btn-outline btn-sm rounded-xl"
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
