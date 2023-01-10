import Login from '../pages/Login';
import useGetUser from '../hooks/user';
import Dashboard from './Dashboard';

const Home = () => {
  const { isAuth } = useGetUser();
  return { isAuth } ? (
    <>
      <Dashboard />
    </>
  ) : (
    <>
      <Login />
    </>
  );
};

export default Home;
