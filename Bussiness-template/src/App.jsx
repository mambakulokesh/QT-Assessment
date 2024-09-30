import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Features from './components/features/Features';
import Blog from './components/blogs/Blog';
import Footer from './components/footer/Footer';

function App() {

  return (
   <div>
    <Navbar />
    <Home />
    <Features />
    <Blog />
    <Footer />

   </div>
  )
}

export default App
