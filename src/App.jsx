import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './styles.scss';
import BookView from './pages/BookView';
import Footer from './components/Footer';
import EditView from './pages/EditView';

const views = {
  bookView: <BookView />,
  editorView: <EditView />,
};

function App() {
  const [currentView, setCurrentView] = useState('bookView');
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">{views[currentView]}</Container>
      <Footer />
    </>
  );
}

export default App;
