import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AlertMessage from '../layout/AlertMessage';

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  // Local state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const [alert, setAlert] = useState(null);

  const { username, password } = loginForm;

  const onChangeLoginForm = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const login = async (e) => {

    e.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      if (loginData.success) {
        console.log(loginData)
      } else {
        setAlert({ type: 'danger', message: loginData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-[300px]'>
        <form className="bg-white shadow-md rounded-lg px-8 mt-4 pt-6 pb-6 mb-4 text-left" onSubmit={login}>
          <AlertMessage info={alert} />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name='username' placeholder="Username"
              required
              value={username}
              onChange={onChangeLoginForm} />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' required
              value={password}
              onChange={onChangeLoginForm} />
          </div>
          <div className="flex items-center justify-between">
            <button className="font-semibold px-4 py-2 bg-gradient-to-tr from-[#011F5B] to-blue-700 hover:bg-gradient-to-bl text-gray-50 rounded-lg border-gray-400 cursor-pointer active:scale-95" type="submit">
              Sign In
            </button>
            <a className="ml-2 inline-block align-baseline font-semibold text-sm text-[#011F5B] hover:text-blue-500" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <p>
        Don't have an account?
        <Link to='/register' className='ml-2 text-blue-600 hover:text-blue-400'>
          Register
        </Link>
      </p>
    </>
  );
};

export default LoginForm;