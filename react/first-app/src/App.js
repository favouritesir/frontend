import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Manage from './components/Manage/Manage';
import Home from './components/Home/Home';
import P404 from './components/404/P404';
import Pdetails from './components/Shop/Product/Pdetails';
function App(){
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/review' element={<Review/>}/>
          <Route path='/manage' element={<Manage/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:productKey' element={<Pdetails/>}/>
          <Route path='*' element={<P404/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App

