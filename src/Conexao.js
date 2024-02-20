import React, {Component} from 'react';
import axios from 'axios';


class Conexao extends Component {
  state = {
    recruitment: []
  }

  componentDidMount(){
    axios.get('https://localhost:7232/api/v1/idata').then(response => {
      console.log(response.data)
      const recruitment = response.data
      this.setState({ recruitment });
    })
  }

  render(){
    return (
      <div>
        <h1>Teste de Conexao - {this.state.recruitment.length}</h1>
      </div>
    );
  }
}

export default Conexao;