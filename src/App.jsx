import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <ToastContainer></ToastContainer>
      <QuestionAnswer></QuestionAnswer>
    </div>
  )
}

export default App
