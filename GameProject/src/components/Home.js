import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import '../myStyles.css';


function Home  () {
    return ( <div className="home">
        <h1>Time for a break?</h1>
        <h2>Feel free to choose from these 3 games to chillax a bit...</h2>
        <br></br>
    <CardDeck >
    <Card className='deck'>
      <Card.Title className='deck'>Magic Mystical Advisor</Card.Title>
      <Card.Img className= 'pic' variant="top" src="https://cdn.pixabay.com/photo/2018/02/13/23/41/nature-3151869_960_720.jpg" />
      <Card.Body className='deck'>
    
      <Card.Text>
        Stuck with a question in mind? Why not ask for some guidance!
      </Card.Text>
      <button   className='fortuneBtn'><a className='btn' href='/magic'>Ask a question</a></button>
  
      </Card.Body>

    </Card>
    <Card className='deck'>
      <Card.Title className='deck'>To Do List</Card.Title>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/30/22/50/forest-3119826_960_720.jpg" />
      <Card.Body className='deck'>
      
      <Card.Text>
        A great way to beat stress is to write all your task down so you don't worry about forgetting!
      </Card.Text>
      <button   className='fortuneBtn'><a className='btn' href='/todo'>Write it down</a></button>
  
      </Card.Body>

    </Card>
      <Card className='deck'>
      <Card.Title className='deck'>Finding Zen</Card.Title>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2018/01/09/20/24/wood-3072434__340.jpg" />
      <Card.Body className= 'deck'>
    
      <Card.Text>
        Have you lost your Zen? Come here and we'll help you find it...
     
      </Card.Text>
      <button   className='fortuneBtn'><a className='btn' href='/zen'>Woosah</a></button>
     
      </Card.Body>

   </Card>
   </CardDeck>
    <br></br>
  </div>

    );
}

//create Home component to access all the other games with Router in app.js & href in Home component
export default Home;