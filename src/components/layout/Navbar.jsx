import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
  const {
    authState: {
      user: { username, firstName },
      isAuthenticated,
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();
  return (
    <div className='w-full h-12 px-4 bg-white shadow-md'>
      <div className='max-w-[1440px] mx-auto flex h-full justify-between items-center'>
        <div className='flex items-center'>
          <a href='/'>
            <h1 className='text-[#011F5B] text-2xl font-bold'>LGH UC TOOLS</h1>
          </a>
        </div>
        <div className='flex items-center gap-4'>
          {username !== null ? (
            <>
              <p>Welcome, {firstName}</p>
              <p>|</p>
            </>
          ) : null}
          {/* <a
            href='/account'
            className='font-semibold border-gray-400 hover:text-gray-400 hover:border-b-2'
          >
            Account
          </a> */}
          {isAuthenticated ? (
            <button
              onClick={logout}
              className='font-semibold px-4 py-2 bg-gradient-to-tr from-[#990000] to-red-600 hover:bg-gradient-to-bl text-gray-50 rounded-lg border-gray-400 cursor-pointer'
            >
              Logout
            </button>
          ) : (
            <a
              href='/login'
              className='font-semibold px-4 py-2 bg-gradient-to-tr from-[#990000] to-red-600 hover:bg-gradient-to-bl text-gray-50 rounded-lg border-gray-400 cursor-pointer'
            >
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
