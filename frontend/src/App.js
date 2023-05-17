import { Fragment } from 'react';
import Lists from './components/Lists/List';
import Filter from './components/Filter/Filter';
import Empty from './components/Empty/Empty';
import Loader from './components/Loader/Loader';
import './App.css';

function App() {


  return (
    <Fragment>
      <div className='container'>
        <div className='left-pane'>
          {
            false
              ?
              <Empty />
              :

              false
                ?
                <Loader />
                :
                <Lists
                  data={[1, 2, 3, 4, 5]}
                />
          }
        </div>
        <div className='right-pane'>
          <Filter
            handleSubmit={null}
            handleOnChange={(name) => (e) => null}
            resetFilter={null}
            onSync={null}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
