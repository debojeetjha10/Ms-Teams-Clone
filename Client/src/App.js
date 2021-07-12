import './App.css';
import {Route , Switch,BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import SideBar from './components/SideBar/SideBar';
import JoinPage from './components/JoinPage/JoinPage'
import MeetCreatePage from './components/MeetCreatePage/MeetCreatePage';
import JoinCreateDecidePage from './components/JoinCreateDecidePage/JoinCreateDecidePage';
import EndCallPage from './components/EndCallPage/EndCallPage';
import JoinChat from './components/JoinChat/JoinChat';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
      <Navbar/>
      <div className='main-content'>
        <Switch>
        <Route path='/' exact component={JoinCreateDecidePage} />
        <Route path='/join' exact component={JoinPage}/>
        <Route path='/create' exact component={MeetCreatePage}/>
        <Route path = '/joinchat' exact component={JoinChat}/>
        <Route path='/end' exact component={EndCallPage}/>
        <Route path='/aboutus' exact component={AboutUs}/>
        <Route path='/contactus' exact component={ContactUs}/>

        </Switch>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
