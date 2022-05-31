import { useState } from 'react';
import { Dashboard } from './Pages/Home/components/Dashboard';
import { Header } from './Pages/Home/components/Header/index';
import { GlobalStyle } from './styles/global';
import { SelectClientModal } from './Pages/Home/components/SelectClientModal';
import { PostsProvider } from './postsContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Modal from 'react-modal';
import { PrintDashboard } from './Pages/PrintPage/components/PrintDashboard';
import { PrintHeader } from './Pages/PrintPage/components/PrintHeader';
// import { PrintTable } from './Pages/PrintPage/components/PrintTable';

Modal.setAppElement('#root');

export function App() {
  const [isSelectClientModalOpen, setIsSelectClientModalOpen] = useState(false);

  function handleOpenSelectClientModal() {
    setIsSelectClientModalOpen(true);
  }

  function handleCloseSelectClientModal() {
    setIsSelectClientModalOpen(false);
  }

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <PostsProvider>
              <Header onOpenSelectClientModal={handleOpenSelectClientModal} />
              <Dashboard />
              <SelectClientModal
                isOpen={isSelectClientModalOpen}
                onRequestClose={handleCloseSelectClientModal}
              />
              <GlobalStyle />
            </PostsProvider>
          }
        />
        <Route
          path='/imprimir'
          element={
            <>
              <PrintHeader />
              <PrintDashboard />
              <GlobalStyle />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
