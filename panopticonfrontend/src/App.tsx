import NavBar from './components/NavBar';
import About from './components/About';
import SignInForm from './components/SignInForm';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ContactForm from './components/ContactForm';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MpesaStatement from './components/Statements/MpesaStatement';
import UploadComponent from './components/Statements/UploadPage';
import MtibaTable from './components/Statements/MtibaStatement';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/signin' element={<SignInForm />} />
          <Route path='/contact' element={<ContactForm />} />
          <Route path='/mpesastatement' element={<MpesaStatement />} />
          <Route path='/upload' element={<UploadComponent />} />
          <Route path='/mtibastatement' element={<MtibaTable />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App;
