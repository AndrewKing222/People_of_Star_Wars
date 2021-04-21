import React from "react";
import styled from "styled-components";

const Item = styled.div`
  :hover {
    color: #fff;
    opacity: 0.8;
  }
  h5 {
    margin: 0px;
  }
`;

const ItemName = styled.div`
  color: #ffe81f;
`;

interface PersonItemProps {
  name: string;
  onClick: () => void;
  activeItem?: string;
}

export const PersonItem: React.FC<PersonItemProps> = ({
  name,
  onClick,
  activeItem,
}) => {
  return (
    <Item>
      <div onClick={onClick} className="card card-body mt-1 py-2">
        <div className="row">
          <div className="col-md-9">
            {activeItem === name ? (
              <ItemName>
                <h5>{name}</h5>
              </ItemName>
            ) : (
              <h5>{name}</h5>
            )}
          </div>
        </div>
      </div>
    </Item>
  );
};
