import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAxWaUt8lt7d8O1Pf-KIS1Rn-Z_BJApmo4 ';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchKey: 'penguins'
    };

    YTSearch({ key: API_KEY, term: this.state.searchKey }, (videos) => {
      this.setState({ videos });
    });
  }

 

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video = {this.state.videos[0]}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));
