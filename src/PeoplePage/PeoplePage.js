import React from "react";
import { NavLink, Link} from "react-router-dom";
import * as peopleApi from "../api/people";
import DataTable from '../DataTable/datatable'


const peopleColumnConfig = {
  name: {
    title: 'Имя', 
    isSortable: true, 
    isSearchable: true,

    render: (person) => (
      <Link to={`/people/${person.id}`}>{person.name}</Link>
    )
  },
  birth_year: {
    title: 'Год рождения',
    isSortable: true, 
  },
  height: {
    title: 'Рост',
  },
  gender: { 
    title: 'Пол',
  },
  mass: {
    title: 'Вес',
  },
  hair_color: {
    title: 'Цвет волос',
  },
  skin_color: {
    title: 'Цвет кожи',
  },
  eye_color: {
    title: 'Цвет глаз',
  }
};


class PeoplePage extends React.Component {
  state = {
    isLoaded: false,
    people: [],
    config: peopleColumnConfig
  };

  async componentDidMount() {
    const people = await peopleApi.getAll();
    this.setState({ people, isLoaded: true });
  }
  render() {
    const { people, isLoaded, config } = this.state;
    return (
      <div className="PeoplePage">
        <div className="navbar">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/people">People</NavLink>
          <NavLink to="/planets">Planets</NavLink>
          <NavLink to="/films">Films</NavLink>
          <NavLink to="/species">Species</NavLink>
          <NavLink to="/starships">Starships</NavLink>
          <NavLink to="/vehicles">Vehicles</NavLink>
        </div>

        {isLoaded ? (
         <DataTable config={config} items={people} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default PeoplePage;
