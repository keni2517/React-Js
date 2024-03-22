
import './App.css';
import Head from './Componets/Heading';
import Para1,{Para2,Para3,Para4,Para5} from './Componets/Para';
import Imga from './Componets/Img';
import Order from './Componets/Orderlist';

function App() {
  return (
    <div className="App">
     <Head/>
     <Para1/>
     <Para2/>
     <Para3/>
     <Para4/>
     <Para5/>
     <Imga/>
     <Order/>
    </div>
  );          
}

export default App;
