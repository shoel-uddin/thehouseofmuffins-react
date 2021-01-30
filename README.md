# React project for 'The House Of Muffins' Business page

## Create React project

```sh
npx create-react-app the-house-of-muffins
```
## Remove unnecessary codes

- clear out `README.md`
- Remove codes from `app.js`

## Create Components 

- make a folder in `src`
- create `.jsx` files inside of the newly created components
    - `Home.jsx`
    - `BakedGoods.jsx`
    - `Menu.jsx`
    - `About.jsx`

## Install add ons

- To be able to use routers
    -   ```sh
        yarn add react-router-dom
        # npm install react-router-dom
        ```

## Import `react-router-dom`

```js
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom';
```

## Use Router

Wrap your *entire* App with it.

```js
    <Router>
      <div className="App">

        <Home />
        <Stuff />
        <About />

      </div>
    </Router>
```
