import React from 'react';
import Child from '../bob/bob';
import Results from '../results/results';

class Mom extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bobMoney: 0,
      child: 'bob',
      money: 100,
      name: 'bobette',
      pokemon: []
    };
  }

  giveBob20 = () => {
    // 1. reduce mom's money by $20
    this.setState({ money: this.state.money - 20 });

    // 2. update the money state that she is sending to bob
    this.setState({ bobMoney: this.state.bobMoney + 20 });
  }

  // time for bob to get a job! 
  getPoke = (pokemon) => {
    // take the results and display them
    this.setState({ pokemon });
  }

  render(){
    console.log('mom', this.state, this.props)
    return(
      <div>
        <p>Hi my name is {this.state.name} and I have {this.state.money} dollars. I have a son name {this.state.child}</p>

        <Child
        name={this.state.child}
        money={this.state.bobMoney}
        askMomForMoney={this.giveBob20}
        url={'https://pokeapi.co/api/v2/pokemon'}
        giveMomPoke={this.getPoke}
        />

        <Results
        pokemon={this.state.pokemon}
        />
      </div>
    )
  }

}

export default Mom;

