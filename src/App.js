import { Greeting } from './components/greeting';

// Styles
import './styles/App.scss';

function App() {

  return (
    <div className="App bg-main">
      <div className="card p-3">
        <h1 className='heading-style'>Hello Sir : <Greeting /></h1>
      </div>
    </div>
  );
}

export default App;

