import "./App.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
import ImgGallery from "./Components/ImgGallery";
import Header from "./Components/MainCom/Header";
import Footer from "./Components/MainCom/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/MainCom/Home";
import Search from "./Components/MainCom/Search";
import CovidApi from "./Components/CovidApi";
import Contactus from "./Components/MainCom/Contactus";
import Weather from "./Components/MainCom/Weather";
import Todo from "./Components/Todo";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/imagegallery' component={ImgGallery}/>
        <Route exact path='/imagesearch' component={Search}/>
        <Route exact path='/covidapi' component={CovidApi}/>
        <Route exact path='/contact' component={Contactus}/>
        <Route exact path='/weather' component={Weather}/>
        <Route exact path='/todoapp' component={Todo}/>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
