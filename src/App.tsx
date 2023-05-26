import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './router/routes.jsx'

const router = createBrowserRouter(routes)

function App() {
  return <RouterProvider router={router} />;
}

export default App;