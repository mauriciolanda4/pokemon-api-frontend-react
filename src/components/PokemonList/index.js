import React from 'react';

import './index.css';

class Form extends React.Component {
  render() {
    const { list } = this.props;

    if (!list || list.length === 0) {
      return null;
    }

    return (
      <div className="data-container">
        <span>Pokemons Catched</span>
        {list.map((data, idx) => (
          <div className="pokemon" key={idx}>
            <span>{data.name}</span>
            <img alt="" src={data.image} />
          </div>
        ))}
      </div>
    );
  }
}

export default Form;
