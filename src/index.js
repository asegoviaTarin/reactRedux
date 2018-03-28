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
      selectedVideo: null,
      searchKey: 'angular'
    };
    this.videoSearch(this.state.searchKey)
  }

  videoSearch(key) {
    console.log(key)
    YTSearch({ key: API_KEY, term: key }, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0],
       });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onBarChange = {searchKey => this.videoSearch({searchKey})}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList onVideoSelect = {selectedVideo => this.setState({selectedVideo})} videos ={this.state.videos} />
      </div>
    );
  };
}

ReactDOM.render(<App />, document.querySelector('.container'));
