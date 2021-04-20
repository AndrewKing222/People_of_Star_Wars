import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { PersonItem } from "./PersonItem";
import { PersonDetails } from "./PersonDetails";

const PEOPLE_SEARCH = gql`
  query PeopleSearch($search: String!) {
    peopleSearch(search: $search) {
      url
      name
    }
  }
`;

const getPersonID = (personURL: String) => {
  let splitPersonURL = personURL.split("/");
  return parseInt(splitPersonURL[splitPersonURL.length - 2]);
};

interface PeopleSearchProps {
  search: String;
}

export const PeopleSearch: React.FC<PeopleSearchProps> = ({ search }) => {
  const [showDetails, setShowDetails] = useState();

  const { loading, error, data } = useQuery<any>(PEOPLE_SEARCH, {
    variables: { search },
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
      {data.peopleSearch.map((person: any) => (
        <div key={person.url}>
          <PersonItem
            name={person.name}
            onClick={() => setShowDetails(person.name)}
          />
          {person.name === showDetails && (
            <PersonDetails id={getPersonID(person.url)} />
          )}
        </div>
      ))}
    </Fragment>
  );
};
