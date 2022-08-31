import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Log from './views/Log';
import ProtectedRoute from './components/routing/ProtectedRoute';
import Account from './views/Account';
import PostContextProvider from './contexts/PostContext';

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<Landing />} />
            <Route exact path='/login' element={<Auth authRoute='login' />} />
            <Route
              exact
              path='/register'
              element={<Auth authRoute='register' />}
            />
            <Route exact path='/log' element={<ProtectedRoute />}>
              <Route exact path='/log' element={<Log />} />
            </Route>
            <Route exact path='/account' element={<ProtectedRoute />}>
              <Route exact path='/account' element={<Account />} />
            </Route>
          </Routes>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;