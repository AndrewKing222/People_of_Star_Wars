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

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>ERROR</h4>;
  }
  if (!data) return <h4>No People found</h4>;

  //console.log(data);

  return (
    <Fragment>
      {data.peoplePage.map((person: any) => (
        <div key={person.url}>
          <PersonItem
            name={person.name}
            onClick={() => setShowDetails(person.name)}
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
