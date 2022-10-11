import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import About from './components/About/About';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import UserDetails from './components/UserDetails/UserDetails';
import Post from './components/Post/Post';

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
        {
          path: '/user/:userId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
          },
          element: <UserDetails></UserDetails>,
        },
        { path: '/post',
        loader : async () =>{
          return fetch('https://jsonplaceholder.typicode.com/posts');
        }
        , element: <Post></Post> },
      ],
    },
    { path: '*', element: <div>page out of this world</div> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
