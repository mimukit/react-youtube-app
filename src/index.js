import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';

const YT_API = 'AIzaSyDqL_re6cE8YhtNr_O7GvX1SX3aQo1clyg';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: YT_API, term: 'coc'}, (videos) => {
      this.setState({ videos });
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
