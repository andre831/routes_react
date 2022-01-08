import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";

const Router = () => {
    return(
		
      <BrowserRouter>
				<Navbar />
        <Switch>
					<Route exact path="/" component={  Home } />
					<Route path="/product/:id" component={ Product } />
					<Route path="/about" component={  About } />
				</Switch>
      </BrowserRouter>
    )
  }

export default Router;