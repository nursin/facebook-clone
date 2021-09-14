import './App.css';
import Feed from './Components/FeedComponent';
import Header from './Components/HeaderComponent'
import Login from './Components/LoginComponent';
import SideBar from './Components/SideBarComponent';
import Widgets from './Components/WidgetsComponent';
import { useStateValue } from './Redux/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}

    </div>
  );
}

export default App;
