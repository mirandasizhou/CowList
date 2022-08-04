import React from 'react';
import CowDescription from './CowDescription.jsx';

class CowList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedCow: '',
      cowDesc: ''
    }
    this.showCow = this.showCow.bind(this);
    this.showDesc = this.showDesc.bind(this);
  }

  showCow(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      clickedCow: e.target.value
    }, () => {
      this.showDesc();
    })

  }

  showDesc() {
    var cows = this.props.props;
    var desc = '';
    cows.forEach(cow => {
      if (cow.name === this.state.clickedCow) {
        this.setState({
          cowDesc: cow.description
        }, () => {
          console.log(this.state)
        })
      }
    });
  }

  render () {
    return (
      <>
        <h2>{this.state.clickedCow} {this.state.cowDesc}</h2>
        <h4>All Available Cows </h4>
        {this.props.props.map((cow, id) => (
        <div key={id}>
          <button value={cow.name} onClick={(e) => this.showCow(e)}>{cow.name}</button>
        </div>
        ))}
    </>
    )
  }
}


export default CowList