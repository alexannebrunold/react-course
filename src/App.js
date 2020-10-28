import logo from './logo.svg';
import './App.css';
import CardItem from './components/CardItem';

function App() {
  const product = {
    item: 'Coucou',
    price: 1,
    quantity: 2,
  };
  return (
    <div className='App'>
      <CardItem product={product} />
    </div>
  );
}

export default App;
