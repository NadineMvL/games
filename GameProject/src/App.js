import MagicEight from './components/MagicEight';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home.js';
import ToDo from './components/ToDo.js';
import Menu from './components/Menu.js';
import Guess from './components/Guess.js';
import Help from './components/Help.js';


function App() {

  return (
    <div>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

<BrowserRouter>
      <div>
       <Menu />
       <Route path ='/zen' component ={Guess} />
      <Route  path='/home' component = {Home}/>
      <Route path ='/help' component ={Help} />
            <Route path='/magic' component = {MagicEight}/>
      <Route path='/todo' component= {ToDo}/>

     </div>
     </BrowserRouter>
</div>
   
    
  );
}

export default App;
