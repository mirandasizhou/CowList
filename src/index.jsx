import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CowList from './components/CowList.jsx';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      cows: [],
      newCow: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getCows = this.getCows.bind(this);
  }
  //component did mmount all the cows after getting from the db
  componentDidMount() {
    this.getCows();
  }
  //method to get all cows from the db
  getCows() {
    axios.get('/api/cows')
      .then((results) => {
        this.setState({
          cows: results.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  handleChange(e) {
    var value = e.target.value;
    var name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleClick() {
    var cow = {
      name: this.state.newCow,
      description: this.state.description
    }
    axios.post('/api/cows', cow)
      .then(() => {
        console.log('Successfully posted new cow');
        this.setState({
          newCow: '',
          description: ''
        }, () => {
          this.getCows();
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render () {
    return (
      <div>
        <h1>Cows go Moo</h1>
        <CowList props={this.state.cows}/>
        <h2>Create a new cow</h2>
        Name the cow: <input value={this.state.newCow} onChange={this.handleChange} name="newCow" />
        <br />
        Describe the cow: <input value={this.state.description} onChange={this.handleChange} name="description" />
        <br/>
        <button onClick={this.handleClick}>Submit Cow</button>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));