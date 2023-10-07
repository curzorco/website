//CSS Styles
import './static/css/styles.css'
//Router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
//Components
import Navbar_Es from './components/Navbar_Es';
import Navbar_En from './components/Navbar_En';
import Home_Es from './components/Home_Es';
import Home_En from './components/Home_En';
import Footer_Es from './components/Footer_Es';
import Footer_En from './components/Footer_En';
import Privacy_Es from './components/Privacy_Es';
import Privacy_En from './components/Privacy_En';
import WhatsAppBtn from './components/WhatsAppBtn';
//MessengerChat
import {MessengerChat} from 'react-messenger-chat-plugin';
//Analytics
import ReactGA from 'react-ga';
//SEO
import RouteChangeTracker from './components/RouteChangeTracker';

function App() {

  ReactGA.initialize('UA-224567252-1');
  
  ReactGA.pageview(window.location.pathname + window.location.search);
  

  return (
    <>
      <Router>
      <header>
        <RouteChangeTracker/>

          <Switch>
            <Route path="/" exact>
              <Navbar_Es />
              <Home_Es />
              <WhatsAppBtn />
              <Footer_Es />
            </Route>
            <Route path="/en">
              <Navbar_En/>
              <Home_En />
              <MessengerChat
                pageId="103119845696101"
                language='en_US'
              />
              <Footer_En />
            </Route>
            <Route path="/privacy">
              <Navbar_En s0={""} s1={""} s2={""} s3={""} s4={""}/>
              <Privacy_En />
              <Footer_En />
            </Route>
            <Route path="/privacidad">
              <Navbar_Es s0={""} s1={""} s2={""} s3={""} s4={""}/>
              <Privacy_Es />
              <Footer_Es />
            </Route>
          </Switch>

        
        
      </header>
      </Router>
    </>
  );
}

export default App;
