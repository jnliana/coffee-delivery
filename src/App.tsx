import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

function App() {
  return (
    <div className="bg-hero-pattern min-h-screen bg-no-repeat bg-cover max-w-full">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
