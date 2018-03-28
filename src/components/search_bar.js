import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '',
    placeHolder: 'Search...',
   };
  }

  onInputChanges = (term) => {
    console.log(term)
    this.props.onBarChange(term)
    this.setState({term});
  }

  _handleKeyPress =(e) => {
    if (e.key === 'Enter') {
      console.log(e.value)
      props.onBarChange(e.target.value);
    }
  }
  render() {
    return (
      <div>
        <input value= {this.state.term}
        placeholder = {this.state.placeHolder}
        
        onChange={event => this.onInputChanges(event.target.value)} />
       
      </div>

    ) 
  }
}

export default SearchBar;