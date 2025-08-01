// src/App.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // Cambiamos BrowserRouter por HashRouter
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Cursos from "./pages/Cursos";
import Informes from "./pages/Informes";
import InformeDetalle from "./pages/InformeDetalle";
import NotFound from "./pages/NotFound";
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HashRouter> {/* Cambiado a HashRouter */}
      <AuthProvider>
        <Toaster />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Landing />} />
          
          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/informes/:cursoId" element={<Informes />} />
            <Route path="/informe/:cursoId/:informeId" element={<InformeDetalle />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </HashRouter>
  </QueryClientProvider>
);

export default App;