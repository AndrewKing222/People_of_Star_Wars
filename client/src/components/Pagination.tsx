import React from "react";
import styled from "styled-components";

const PageSelect = styled.div`
  button:hover {
    color: #000;
    background: #b4b4b4;
  }
`;

interface PaginationProps {
  setSelectedPage: any;
}

export const Pagination: React.FC<PaginationProps> = ({ setSelectedPage }) => {
  //const [selectedPage, setSelectedPage] = useState(currentPage);

  const onPageChange = (page: number) => {
    setSelectedPage(page);
  };

  return (
    <PageSelect>
      <div className="mt-4">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(1)}>
              1
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(2)}>
              2
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(3)}>
              3
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(4)}>
              4
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(5)}>
              5
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(6)}>
              6
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(7)}>
              7
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(8)}>
              8
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={() => onPageChange(9)}>
              9
            </button>
          </li>
        </ul>
      </div>
    </PageSelect>
  );
};
