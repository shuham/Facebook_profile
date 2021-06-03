import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Content } from './components/Content';

function App(args) {
  console.log('props is ',args);

  return(<div class="flexbox-contain">
    <div class="hh">
    <Header/>
    </div>
   <div class="hii"> 
   <Content/>
   
    <Footer/>
    </div>
  </div>);

 
}

export default App;
