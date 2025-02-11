import { ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
