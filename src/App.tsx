import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { InsightsPage } from './pages/InsightsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  ),
});

// Routes
const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage });
const productsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/products', component: ProductsPage });
const solutionsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/solutions', component: SolutionsPage });
const insightsRoute = createRoute({ getParentRoute: () => rootRoute, path: '/insights', component: InsightsPage });
const aboutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage });
const contactRoute = createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: ContactPage });

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  solutionsRoute,
  insightsRoute,
  aboutRoute,
  contactRoute,
]);

// Router
const router = createRouter({ routeTree });

// App Component
export default function App() {
  return <RouterProvider router={router} />;
}
