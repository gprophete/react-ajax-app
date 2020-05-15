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

                            <div><img src={movieItem.image} alt={movieItem.name} /></div>


                        </div>
                    )
                })}
            </div>
        );
    }
};