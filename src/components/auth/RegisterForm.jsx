import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import AlertMessage from '../layout/AlertMessage';

const RegisterForm = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [alert, setAlert] = useState(null);

  const { username, password, confirmPassword } = registerForm;

  const onChangeRegisterForm = (e) =>
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });

  const register = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({ type: 'danger', message: 'Passwords do not match' });
      setTimeout(() => setAlert(null), 5000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: 'danger', message: registerData.message });
        setTimeout(() => setAlert(null), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className='w-[300px]'>
        <form className="bg-white shadow-md rounded-lg px-8 mt-4 pt-6 pb-6 mb-4 text-left" onSubmit={register}>
          <AlertMessage info={alert} />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" name='username' placeholder="username"
              required
              value={username}
              onChange={onChangeRegisterForm} />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" name='password' required
              value={password}
              onChange={onChangeRegisterForm} />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input className="shadow appearance-none rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="******************" name='confirmPassword' required
              value={confirmPassword}
              onChange={onChangeRegisterForm} />
          </div>
          <div className="flex items-center justify-between">
            <button className="w-full font-semibold px-4 py-2 bg-gradient-to-tr from-[#011F5B] to-blue-700 hover:bg-gradient-to-bl text-gray-50 rounded-lg border-gray-400 cursor-pointer active:scale-95" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
      <p>
        Already have an account?
        <Link to='/login'>
          <button className='ml-2 text-blue-600 hover:text-blue-400'>
            Login
          </button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;