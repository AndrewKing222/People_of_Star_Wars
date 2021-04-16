import React from "react";

interface PersonItemProps {
  name: string;
}

export const PersonItem: React.FC<PersonItemProps> = ({ name }) => {
  return (
    <div className="card card-body mb-2">
      <div className="row">
        <div className="col-md-9">
          <h5>{name}</h5>
        </div>
      </div>
    </div>
  );
};
