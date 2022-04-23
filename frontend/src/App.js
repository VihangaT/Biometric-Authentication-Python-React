import { Route,Routes,BrowserRouter } from 'react-router-dom';
import { Profile  } from './components/Profile';
import { Login } from './components/Login';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/" exact></Route>
        <Route element={<Profile/>} path="/profile" exact></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
     <p>{process.env.REACT_APP_PASSAGE_APP_ID}</p>
    </div>
  );
}

export default App;
