import './App.css';
import Feed from './Components/FeedComponent';
import Header from './Components/HeaderComponent'
import SideBar from './Components/SideBarComponent';

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
