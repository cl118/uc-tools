import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import FadeLoader from 'react-spinners/FadeLoader';

const Auth = ({ authRoute }) => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  let body;

  if (authLoading)
    body = (
      <div className='flex justify-center mt-2'>
        <FadeLoader />
      </div>
    );
  else if (isAuthenticated) return <Navigate to='/log' />;
  else
    body = (
      <>
        {authRoute === 'login' && <LoginForm />}
        {authRoute === 'register' && <RegisterForm />}
      </>
    );
  return (
    <div className='relative h-screen w-full'>
      <div className='h-full bg-gray-100 '>
        <div className='h-full m-auto flex flex-col justify-center items-center text-center'>
          <h1 className='text-4xl font-bold text-[#011F5B]'>LGH Unit Clerk Tools</h1>
          <h4 className='text-md'>Please sign in or register to continue.</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;