import './App.css';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import RootLayout from './Leyouts/RootLayout/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      {/* page2 and page3 for design only, to be changed in the future*/}
      <Route path='page2' />
      <Route path='page3' />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
