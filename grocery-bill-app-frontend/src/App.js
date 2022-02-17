import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Items from './Items';
import AddItem from './AddItem';
import UpdateItem from './UpdateItem';
import Login from './Login';
import ItemsCart from './ItemsCart';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/items" component={Items}></Route>
          <Route path="/items-cart" component={ItemsCart}></Route>
          <Route path="/add-item" component={AddItem}></Route>
          <Route path="/update-item/:id" component={UpdateItem}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
