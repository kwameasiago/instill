import { Fragment, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Lists from './components/Lists/List';
import Filter from './components/Filter/Filter';
import Empty from './components/Empty/Empty';
import Loader from './components/Loader/Loader';
import Pagination from './components/Pagination/Pagination';
import { listActivity, runSync } from './api/activity';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [params, setParams] = useState({
    offset: 0
  });
  const [activityCount, setActivityCount] = useState(0);
  const [getActivityLoader, setGetActivityLoader] = useState(false);
  const [syncLoader, setSyncLoader] = useState(false);
  const [activity, setActivity] = useState([]);

  const notify = (type, message) => {
    toast[`${type}`](
      message,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    )
  };

  const getAcivity = () => {
    setGetActivityLoader(true);
    listActivity(params)
      .then(({ data }) => {
        const { activity, count } = data;
        setActivity(activity);
        setActivityCount(count)
        setGetActivityLoader(false);
      })
      .catch(error => {
        setGetActivityLoader(false);
        notify('error', 'An error occured')
      })
    return
  }

  const sync = async () => {
    setSyncLoader(true);
    runSync()
      .then(({ data }) => {
        notify('success', 'Sync was successful')
        setSyncLoader(false);
        getAcivity()
      })
      .catch((error) => {
        setSyncLoader(false);
        notify('error', 'An error occured')
      })
  }

  useEffect(() => {
    getAcivity(params)
  }, [params]);
  const onPageChange = ({ selected }) => {
    if (selected === 1) {
      setParams({
        ...params,
        offset: 0
      })
    } else {
      setParams({
        ...params,
        offset: selected * 10
      })
    }
  }

  const handleFilter = (name) => (e) => {
    let paramObj = params;
    let value = e.target.value;

    if(paramObj[`${name}`]){
      if(value === ''){
        delete paramObj[`${name}`];
        setParams({
          ...paramObj,
          offset: 0
        })
        getAcivity(params)
      }else{
        setParams({
          ...params,
          [`${name}`]: value,
          offset: 0
        })
        console.log(`updating  ${name} with value ${value}`)
      }
    }else{
      if(value !== ''){
        console.log(`new add ${name} with value ${value}`)
        setParams({
          ...params,
          [`${name}`]: value,
          offset: 0
        })
      }
      
    }
  }

  const handleReset = () => {
    setParams({
      offset: 0
    })
  }

  return (
    <Fragment>
      <div className='container'>
        <div className='left-pane'>
          {
            activity.length > 0
            &&
            <Pagination
              pageCount={activityCount}
              onChange={onPageChange}
            />
          }
          {
            getActivityLoader
              ?
              <Loader />
              :

              activity.length === 0
                ?
                <Empty />
                :
                <Fragment>
                  <Lists
                    list={activity}
                  />
                </Fragment>
          }
        </div>
        <div className='right-pane'>
          <Filter
            handleSubmit={null}
            handleOnChange={handleFilter}
            resetFilter={handleReset}
            onSync={sync}
            loader={syncLoader}
            params = {params}
          />
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
  );
}

export default App;
