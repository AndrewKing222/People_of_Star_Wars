import React, { Fragment, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { PersonItem } from "./PersonItem";
import { PersonDetails } from "./PersonDetails";

// export const PERSON_TILE_DATA = gql`
//   fragment PersonTile on Person {
//     #__typename
//     name
//     height
//     mass
//     gender
//     homeworld {
//       name
//     }
//   }
// `;

// export const GET_PEOPLE = gql`
//   query AllPeople($after: String) {
//     people(after: $after) {
//       cursor
//       hasMore
//       people {
//         ...PersonTile
//       }
//     }
//   }
//   ${PERSON_TILE_DATA}
// `;

const PEOPLE_LIST = gql`
  query PeopleList {
    allPeople {
      name
      # height
      # mass
      # gender
      # homeworld {
      #   name
      # }
      url
    }
  }
`;

const getPersonID = (personURL: String) => {
  let splitPersonURL = personURL.split("/");
  return parseInt(splitPersonURL[splitPersonURL.length - 2]);
};

interface PeopleListProps {}

export const PeopleList: React.FC<PeopleListProps> = () => {
  const [showDetails, setShowDetails] = useState();

  const { loading, error, data } = useQuery<any>(PEOPLE_LIST);

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>ERROR</h4>;
  }
  if (!data) return <h4>No People found</h4>;

  //console.log(data);

  // const handleShowDetails = (name: any) => {
  //   setShowDetails(name);
  // };

  return (
    <Fragment>
      {data.allPeople.map((person: any) => (
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
