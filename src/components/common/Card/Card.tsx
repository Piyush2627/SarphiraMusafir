import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <>
      <div className="base-block" title={title}>
        <div className="container">
          {title && <h2 className="base-block-head">{title}</h2>}
          <div className="base-block-body">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
