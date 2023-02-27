import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/StorePage/Home';
import Cart from './components/cart/Cart';
import Navbar from './components/Navbar/Navbar';
import SingleProduct from './components/singleProduct/SingleProduct';
import AppContext from './u/context';



function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <AppContext>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/product/:id' element={<SingleProduct></SingleProduct>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </AppContext>
      </BrowserRouter>

    </div>
  );
}

export default App;
