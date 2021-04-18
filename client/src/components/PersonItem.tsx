import React from "react";

interface PersonItemProps {
  name: string;
  onClick: () => void;
}

export const PersonItem: React.FC<PersonItemProps> = ({ name, onClick }) => {
  return (
    <div onClick={onClick} className="card card-body mb-2">
      <div className="row">
        <div className="col-md-9">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};
