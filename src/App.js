import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login/Login';
import Home from './components/home/Home';


function App() {
  const router = createBrowserRouter([
    { path: '/login', element: <Login /> },
    { path: '/', element: <Home /> }
  ])
  return <RouterProvider router={router} />
    ;
}

export default App;
