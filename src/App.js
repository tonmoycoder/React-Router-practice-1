import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    { path : '/home' , element : <div>This is Home page</div>},
    { path : 'about' , element : <div>This is About page</div>},
    { path : '/' , element : <div>This is unknownn page</div>}
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
