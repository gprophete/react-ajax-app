import React from 'react';
import SearchMovies from './SearchMovies.js'
import SearchResults from './SearchResults.js';
// import { queryTVMazeAPI } from './Util'

export default class HomePage extends React.Component {

    state = {
        movieList: [
            {
                "name": "The Office",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/85/213184.jpg"
            },
            {
                "name": "Radiant Office",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/101/254702.jpg"
            },
            {
                "name": "The Office",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/93/234802.jpg"
            },
            {
                "name": "Mr. Box Office",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/97/244942.jpg"
            },
            {
                "name": "The Queen of Office",
                "image": "http://static.tvmaze.com/uploads/images/medium_portrait/58/146476.jpg"
            },
        ]
    }
    toggleSearchMovies = () => {
        const ShowSearchMovies = !this.state.ShowSearchMovies
        this.setState({ ShowSearchMovies: ShowSearchMovies })
    }



    render() {

        return (
            <div>
                <h1>Welcome</h1>
                <div>
                    <SearchMovies />
                    <button type="submit" value="Search" onClick={this.toggleSearchMovies}>
                        Search
                    </button>
                    {this.state.ShowSearchMovies === true
                        ? <SearchResults movieList={this.state.movieList} />
                        : null
                    }

                </div>






            </div>
        )
    }
}