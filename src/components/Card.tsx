import { ReactNode } from "react";

const Card = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div
      className={`card bg-base-100 w-72 shadow-xl rounded-xl mt-10 border-1 border-gray-100 ${className}`}
    >
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
