import { IdolData } from "../data/IdolData";

const selectIdol = IdolData;

const Category = () => {
  return (
    <div className="flex space-x-2 flex-wrap">
      {selectIdol.map((data) => {
        return (
          <div key={data.id}>
            <a href={`/${data.group}`} className="btn btn-outline btn-sm rounded-xl">
              {data.group}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
