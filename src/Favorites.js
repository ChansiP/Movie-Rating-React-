import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage on component mount
 
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    console.log(storedFavorites);
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
      console.log(storedFavorites);
    }
  }, []);
{/*} useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
 }, [favorites]);*/}
 // console.log(favorites);
  // Save favorites to localStorage on update
  

  // Remove a favorite movie from the list
  const removeFavorite = (movieId) => {
   const newFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(newFavorites);
    console.log(newFavorites);
    console.log(favorites);
    localStorage.clear();
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const newfavorites = localStorage.getItem('favorites');
    console.log(newfavorites);
    };
    //useEffect(() => {
       //localStorage.setItem('newFavorites', JSON.stringify(favorites));
     // }, [favorites]);
     
  return (
    <div>
    <Card style={{marginTop:20}}>
      <div style={{color:'black',height:"40px",textAlign:'center'}}><h3>My Favorite Movies</h3></div>
      {favorites.length === 0 ? (
        <h6>No favorite movies added yet.</h6>
      ) : (
        <ul style={{marginTop:15}}>
          {favorites.map((movie) => (
           <div><li style={{marginTop:15}} key={movie.imdbID}>
                <Row>
                    <Col>
              <h4>{movie.Title}</h4></Col>
              <Col>
              <Button variant="danger" onClick={() => removeFavorite(movie.imdbID)}>Remove from favorites</Button></Col></Row>
              <img src={movie.Poster} alt={movie.Title} />
            
            </li></div> 
          ))}
        </ul>
      )}
      </Card>
    </div>
  );
}

export default Favorites;
