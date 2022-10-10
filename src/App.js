import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import About from './components/About/About';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'products', element: <Products></Products> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
