import React from 'react'

const IMAGE_API = 'https://image.tmdb.org/t/p/w1280'

const setColour = (vote) => {
    if (vote >= 8){
        return 'green'
    } else if(vote >= 6){
        return 'orange'
    }else{
        return 'red';
    }
}

const Movie = ({title, overview,poster_path,vote_average}) => (
    <div className='movie'>
        <img src={poster_path ? IMAGE_API+poster_path : 'https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdmllfGVufDB8fDB8&auto=format&fit=crop&w=900&q=60'} alt ={title} />
        <div className = 'movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setColour(vote_average)}`}>{vote_average}</span>
        </div>
        <div className='movie-over'>
            <h2>Overview:</h2>
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie
