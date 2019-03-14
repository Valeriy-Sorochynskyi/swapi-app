import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as planetsApi from "../api/planets";
import DataTable from "../DataTable/datatable";

const peopleColumnConfig = {
  name: {
    title: "Имя",
    isSortable: true,
    isSearchable: true,

    render: planet => <Link to={`/planets/${planet.id}`}>{planet.name}</Link>
  },
  rotation_period: {
    title: "Период вращения"
  },
  orbital_period: {
    title: "Орбитальный период"
  },
  diameter: {
    title: "Диаметр"
  },
  climate: {
    title: "Климат"
  },
  gravity: {
    title: "Гравитация"
  },
  surface_water: {
    title: "Поверхностная вода"
  },
  population: {
    title: "Население"
  }
};

class PeoplePage extends React.Component {
  state = {
    isLoaded: false,
    people: [],
    config: peopleColumnConfig
  };

  async componentDidMount() {
    const people = await planetsApi.getAll();
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
