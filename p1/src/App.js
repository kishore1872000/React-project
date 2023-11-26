import './App.css';
import Sidebar from './Components/Sidebar/Siderbar';
import Logo from './Components/Logo/Logo';
import Search from './Components/Search/Search';
import Seller from './Components/Seller/Seller';
import Post from './Components/Post/Post';
import Rightbar from './Components/Rightbar/Rightbar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <Logo />
        <Search />
        <Seller />
      </header>
      <main>
        <Sidebar />
        <Post />
        <Rightbar />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
