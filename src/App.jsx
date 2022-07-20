import Nav from './components/Nav';
import Carousel from './components/Carousel';
import Form from './components/Form';
import {Route, Routes} from 'react-router-dom';

export default function App(){
  return(
    <>
      <Nav />
      <Routes>
          <Route path="/" exact element={<Carousel />} />
          <Route path="/Form"  element={<Form />} />
      </Routes>
    </>
  );
}

