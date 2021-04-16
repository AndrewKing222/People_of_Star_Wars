import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import { PersonItem } from "./PersonItem";

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
    }
  }
`;

interface PeopleListProps {}

export const PeopleList: React.FC<PeopleListProps> = ({}) => {
  const { data, loading, error } = useQuery<any>(PEOPLE_LIST);

  if (loading) return <h4>Loading...</h4>;
  if (error) {
    console.log(error);
    return <h4>ERROR</h4>;
  }
  if (!data) return <h4>No People found</h4>;
  console.log(data);

  return (
    <Fragment>
      {data.allPeople.map((person: any) => (
        <PersonItem key={person.index} name={person.name} />
      ))}
    </Fragment>
  );
};
