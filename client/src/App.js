import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import { Create } from './components/AddPage/create';
import { Read } from './components/ReadPage/read';
import { Update } from './components/UpdatePage/update';

function App() {
  return (
    <>
      {/* <Create/> */}
      {/* <Read/> */}
      <Router>
        <Routes>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/' element={<Read/>}></Route>
          <Route path='/update/:id' element={<Update/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
