import React from "react";
import { NavLink } from "react-router-dom";
import { get } from "../api/_helper";

class HomePage extends React.Component {
  state = {
    data: {},
    isLoaded: false
  };

  async componentDidMount() {
    const data = await get();
    this.setState({ data, isLoaded: true });
  }
  render() {
    const data = this.state.data;
    const arr = Object.entries(data);
    return (
      <div className="container">
        {arr.map(item => {
          return (
            <div key={item[0]} className="content">
              <NavLink to={`/${item[0]}`}>
                <div className="card">
                  <div className="card__img">
                    <img
                      alt={item[0]}
                      src={`./img/categories/${
                        item[0] === "people" ? "character" : item[0]
                      }.jpg`}
                    />
                    <span>{item[0]}</span>
                  </div>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HomePage;
