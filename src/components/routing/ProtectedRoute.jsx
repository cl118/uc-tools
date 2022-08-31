import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Navbar from '../layout/Navbar';

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading)
    return (
      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <PacmanLoader />
      </div>
    );

  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar /> <Outlet />
        </>
      ) : (
        <Navigate to='/login' />
      )}
    </>
  );
};

export default ProtectedRoute;