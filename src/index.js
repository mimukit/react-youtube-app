import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';


const YT_API = 'AIzaSyDqL_re6cE8YhtNr_O7GvX1SX3aQo1clyg';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: undefined };

    YTSearch({ key: YT_API, term: 'coc'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
