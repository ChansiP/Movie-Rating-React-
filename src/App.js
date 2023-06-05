import React, { useState } from 'react';
import Favorites from './Favorites';
import Container from 'react-bootstrap/Container';
import Cards from './Cards';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
 // const [searchTerm, setSearchTerm] = useState('');
const [showFavorites, setShowFavorites] = useState(false);

 const toggleFavorites = () => {
  setShowFavorites(!showFavorites);
};
  return (
    <div><Container style={{ 
      backgroundColor:'black',
      marginTop: 10,
      height:"60px",
      color:'white',
      border:'10',
      textAlign: 'center' }}>
       
     <h2>MOVIES APP<br></br> </h2></Container> 
     <Container style={{marginTop:10,height:"50px",width:'300px', marginTop:20,backgroundColor:'black',textAlign: 'left'}} >  
     <Button style={{marginTop: 10,width:'300px'}} variant='success' onClick={toggleFavorites} > 
      <h4>  {showFavorites ? 'Hide Favorites' : 'Favourite Movies'}</h4>
      </Button></Container> 
    <Container>
    {showFavorites ? <Favorites /> : <Cards />}</Container> 
    
    
      </div>
  );
}

export default App;
