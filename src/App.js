import './App.css';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';
import Items from './components/Items';
import Gallery from './components/Gallery';
import Header from './components/Header';
import { useEffect, useState } from 'react';

import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';





function App() {

  const [cards, setCard] = useState([])


  useEffect(() => {
    // InstaClient.authBySessionId('201216075%3ANgWa9H6sAzm4Kn%3A0')
	  // .then(account => console.log(account))
    // .catch(err => console.error(err));
    // console.log("its running");


    async function getCard() {
    const getInstaPics = fetch('https://www.instagram.com/graphql/query/?query_hash=003056d32c2554def87228bc3fd9668a&variables={"id":"42892210326","first":50}')
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
    // console.log(card[0].url); 
    // setCard(card[1].url)
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
        <Header />
        <nav>
          <div className='navButton'>
            <button><Link to = "/" >Home</Link></button>
            <button><Link to = "/menu" >Menu</Link></button>
            <button><Link to = "/gallery" >Gallery</Link></button>
            <button><Link to = "/items" >Items</Link></button>
            <button><Link to = "/about" >About</Link></button>
          </div>
            
        </nav>
        <main>
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
            <Route path ="/items">
              <Items />
            </Route>
            <Route path ="/about">
              <About />
            </Route>
          </Switch>
        </main>
        <aside>
          
        </aside>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
