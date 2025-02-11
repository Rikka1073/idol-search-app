import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card bg-base-100 w-80 shadow-xl rounded-xl">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
