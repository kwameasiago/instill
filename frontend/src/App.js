import { Fragment } from 'react';
import Lists from './components/Lists/List';
import './App.css';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <div className='left-pane'>
        <Lists 
          data={[1,2,3,4, 5]}
          />
        </div>
        <div className='right-pane'>
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
