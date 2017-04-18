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
        console.log(res.data);
        console.log(typeof (res.data));
        const iasipCharacters = Array.from(res.data.results);

        console.log(iasipCharacters);
        this.setState({ iasipCharacters });
      });
  }

  render() {
    return (
      <div>
        <h2>Characters</h2>
        <ul>
          {this.state.iasipCharacters.map(char =>
            <li key={char.preferred_name}>{char.preferred_name}</li>
          )}
        </ul>
      </div>
    );
  }
}