import React from 'react';



export default class SearchResults extends React.Component {
    render() {

        return (
            <div>
                {this.props.movieList.map((movieItem, index) => {
                    return (
                        <div key={`movie-item-${index}`}>
                            <h5>Movie Title</h5>
                            <h4>{movieItem.name}</h4>
                            <div>{movieItem.image}</div>
                           
                        </div>
                    )
                })}
            </div>
        );
    }
};