import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import DefaultLayout from './route/DefaultLayout';

function App() {

  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
             { admin && (<Route path='/*' element={ <DefaultLayout /> } />)}
              <Route path='/login' element={ <Login /> } />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
