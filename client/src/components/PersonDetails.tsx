import React from "react";
import { gql, useQuery } from "@apollo/client";

const PERSON_DETAILS = gql`
  query PersonDetails($id: Int!) {
    personDetails(id: $id) {
      height
      mass
      gender
      homeworld {
        name
      }
    }
  }
`;

interface PersonDetailsProps {
  //   person: {
  //     height: String;
  //     mass: String;
  //     gender: String;
  //   };
  //   homeworld: Planet;
  // }
  // interface Planet {
  //   name: String;
  id: number;
}

export const PersonDetails: React.FC<PersonDetailsProps> = ({ id }) =>
  // {
  //   person: { height, mass, gender },
  //   homeworld,
  // }
  {
    const { loading, error, data } = useQuery<any>(PERSON_DETAILS, {
      variables: { id },
    });

    if (loading)
      return (
        <div className="d-flex justify-content-center mb-3">
          <div className="spinner-border" role="status"></div>
        </div>
      );
    if (error) {
      console.log(error);
      return <h5>ERROR</h5>;
    }
    if (!data) return <h4>No details found</h4>;

    const { height, mass, gender, homeworld } = data.personDetails;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Gender: {gender}</p>
            <p>Homeworld: {homeworld.name}</p>
          </div>
        </div>
      </div>
    );
  };
