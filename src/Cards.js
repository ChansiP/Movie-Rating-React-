import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Favorites from './Favorites';

function Cards() {
    const [searchTerm, setSearchTerm] = useState('');
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [poster, setPoster] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [imdbid, setImdbid] = useState([]);
    const [actors,setActors]=useState('');
    const [country,setCountry]=useState('');
    const [rating,setRating]=useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.get(
            `http://www.omdbapi.com/?t=${searchTerm}&plot=full&apikey=f5bfbd2d`
          );
        const data = response.data;
        if(data)
        {
        const name=data.Title;
        const genre=data.Genre;
        const year=data.Year;
        const imdbid=data.imdbID;
        console.log("imdbid",imdbid)
        const actors=data.Actors;
        const country=data.Country;
        const rating=data.imdbRating;
        
        const data1= await axios.get(`http://www.omdbapi.com/?i=${imdbid}&apikey=f5bfbd2d`);
        console.log("data1",data1)
        const poster=data1.data.Poster;
        console.log(name);
        setName(name)
        setGenre(genre)
        setYear(year)
        setPoster(poster)
        setActors(actors)
        setCountry(country)
        setRating(rating)
        setImdbid=(imdbid)
    
        }else{
            setName('Movie not found');
        }
        }catch (error) {
            //console.log(error);
          }
    }
    const handleAddToFavorites = () => {
      //const movie = { name };
     // setFavorites([favorites, movie]);
     const movie = { Title: name, Year: year, Poster: poster ,imdbID:imdbid};
     setFavorites([...favorites, movie]);
     
      console.log(favorites);
      console.log(movie);
    };
    useEffect(() => {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);
    console.log(favorites);

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };

    return (
        <Container>
        <Card style=
        {{width:"1000px",
         backgroundColor:'',
         marginTop:30,
         padding:6,
         marginLeft:3,
         
        }}>
        <Card.Body>
        <Form onSubmit={handleSearch}> 
        <Row>
          <Col sm={6}>
        <Form.Control type="text" placeholder="Enter Movie" value={searchTerm}
              onChange={handleInputChange}
         /> </Col>
        <Col sm={2}>
        <Button variant="danger" type="submit">
        <h5>Search</h5>
      </Button>
      </Col>
        <Col sm={2}>
        <Button variant="warning" type="submit" onClick={handleAddToFavorites}>
       <h5> Add to Favourites</h5>
      </Button>
      </Col>
      
      </Row>
      </Form>
        </Card.Body>
      </Card>
      {name!=="" &&(
      <Card style={{marginTop:30,backgroundColor:'black',color:'white'}}>
      <Row>
        <Col sm={7}>
      <Card.Body ><h5>Title: { name}</h5></Card.Body>
      <Card.Body><h5>Genre:{ genre}</h5></Card.Body>
      <Card.Body><h5>Year:{ year}</h5></Card.Body>
      <Card.Body><h5>Actors:{ actors}</h5></Card.Body>
      <Card.Body><h5>Country:{ country}</h5></Card.Body>
      <Card.Body><h5>Rating:{ rating}</h5></Card.Body>
      <Card.Body><h5>ImdbId:{ imdbid}</h5></Card.Body>

      </Col>
      <Col>
      <Card.Body > <img src={poster} alt="poster" height={'380px'} width={'380px'} /></Card.Body></Col>
      </Row>
      </Card>)}
      </Container>
    );
  }
  
  export default Cards;
