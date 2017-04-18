import React from "react";
import axios from 'axios';


export class Characters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iasipCharacters: []
    };
  }

  componentDidMount() {
    axios.get(`http://iasip-backend.herokuapp.com/characters.json`)
      .then(res => {
        const iasipCharacters = res.data.data.children.map(obj => obj.data);
        this.setState({ iasipCharacters });
      });
  }

  render() {
    return (
      <div>
        <h2>Characters</h2>
        <ul>
          {this.state.iasipCharacters.map(char => 
            <li key={char}>{char.preferred_name}</li>
          )}
        </ul>
      </div>
    );
  }
}