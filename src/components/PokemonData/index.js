import React from 'react';

class Form extends React.Component {
  render() {
    const { name, image, onCatch } = this.props;

    return (
      <div className="data-container">
        <p>{name}</p>
        <img alt="" src={image}></img>
        <button onClick={onCatch}>Catch</button>
      </div>
    );
  }
}

export default Form;
