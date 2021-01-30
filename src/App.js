import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import BakedGoods from './components/BakedGoods';
import About from './components/About';


import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Gallery from './components/Gallery';
import { useEffect, useState } from 'react';

// require('dotenv').config();


function App() {

  const [cards, setCard] = useState([])
  useEffect(() => {
    // InstaClient.authBySessionId('201216075%3ANgWa9H6sAzm4Kn%3A0')
	  // .then(account => console.log(account))
    // .catch(err => console.error(err));
    // console.log("its running");


    async function getCard() {
    const getInstaPics = fetch('https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"42892210326","first":10}')
    const response = await getInstaPics
    console.log(response);
    const cardData = await response.json()
    console.log(cardData);
    const card = cardData.data.user.edge_owner_to_timeline_media.edges.map(edge =>({
      url: edge.node.thumbnail_src,
      caption: edge.node.edge_media_to_caption?.edges[0]?.node?.text,
      id: edge.node.id
    }))
    console.log(card);
    console.log(card[0].url); 
    setCard(card[1].url)
    // const newPost = [
    //   ...cards,
    //   card
    // ]
    setCard(card)
    
  }
  getCard()
  }, []) 
  // console.log(cards);

  return (
    <Router>
      <div className="container">
        <header>The House Of Muffins</header>
        <nav>
            <div><Link to = "/" >Home</Link></div>
            <div><Link to = "/menu" >Menu</Link></div>
            <div><Link to = "/gallery" >Gallery</Link></div>
            <div><Link to = "/bakedgoods" >Baked Goods</Link></div>
            <div><Link to = "/about" >About</Link></div>
        </nav>
        
        <Switch>
          <Route path ="/" exact>
            <Home />
          </Route>
          <Route path ="/menu">
            <Menu />
          </Route>
          <Route path ="/gallery">
            <Gallery cards={cards}/>
          </Route>
          <Route path ="/bakedgoods">
            <BakedGoods />
          </Route>
          <Route path ="/about">
            <About />
          </Route>
        </Switch>
        
        <aside>
          
        </aside>
        <footer>
          <p>&copy ShoDotz </p>
        </footer>
      </div>
    </Router>
    
  );
}

export default App;
