import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import About from './components/About/About';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout></Layout>,
      children: [
        { path: 'home', element: <Home></Home> },
        { path: 'about', element: <About></About> },
        {
          path: 'products',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Products></Products>,
        },
      ],
    },
    { path: '*', element: <div>page out this world</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
