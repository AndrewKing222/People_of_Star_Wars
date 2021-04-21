import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { PersonItem } from "./PersonItem";
import { PersonDetails } from "./PersonDetails";

const PEOPLE_LIST = gql`
  query PeopleList($page: Int!) {
    peoplePage(page: $page) {
      url
      name
      # height
      # mass
      # gender
      # homeworld {
      #   name
      # }
    }
  }
`;

const getPersonID = (personURL: String) => {
  let splitPersonURL = personURL.split("/");
  return parseInt(splitPersonURL[splitPersonURL.length - 2]);
};

interface PeopleListProps {
  page: number;
}

export const PeopleList: React.FC<PeopleListProps> = ({ page }) => {
  const [showDetails, setShowDetails] = useState();

  const { loading, error, data } = useQuery<any>(PEOPLE_LIST, {
    variables: { page },
  });

  if (loading)
    return (
      <div className="d-flex justify-content-center mb-3">
        <div className="spinner-border" role="status"></div>
      </div>
    );
  if (error) {
    console.log(error);
    return <h4>ERROR</h4>;
  }
  if (!data) return <h4>No People found</h4>;

  return (
    <Fragment>
      {data.peoplePage.map((person: any) => (
        <div key={person.url}>
          <PersonItem
            name={person.name}
            onClick={() => setShowDetails(person.name)}
            activeItem={showDetails}
          />
          {person.name === showDetails && (
            <PersonDetails
              id={getPersonID(person.url)}
              // person={person}
              // // height={person.height}
              // // mass={person.mass}
              // // gender={person.gender}
              // homeworld={person.homeworld.name}
            />
          )}
        </div>
      ))}
    </Fragment>
  );
};
