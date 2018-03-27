import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Alberto',
    placeHolder: 'AlbertoPlaceholder',
   };
  }

  onInputChanges = (e) => {
    this.setState({ term: e.target.value });
    // this.setState({ props.handler: e.target.value });
    this.props.handler =  e.target.value
  }

  render() {
    return (
      <div>
        <input  value= {this.state.term}
        placeholder = {this.state.placeHolder}
        onChange={this.onInputChanges} />
       
      </div>

    ) 
  }
}

export default SearchBar;