import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
