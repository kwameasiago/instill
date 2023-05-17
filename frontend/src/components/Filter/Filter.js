import { Fragment } from "react";
import './Filter.css';

const Filter = ({
    handleSubmit,
    handleOnChange,
    onSync,
    resetFilter,
    loader,
    params:{price, type, participants, activity}
}) => {
    return (
        <Fragment>
            <form className="form-control" onSubmit={handleSubmit}>


                <input name="Price" type="number" value={price || ''} placeholder="Max price" onChange={handleOnChange('price')} />

                <input name="Type" type="text" value={type || ''} placeholder="Type" onChange={handleOnChange('type')} />
                <input name="activity" type="text" value={activity || ''} placeholder="Activity contains" onChange={handleOnChange('activity')} />


                <input name="Participants" type="number"  value={participants || ''}placeholder="Participants" onChange={handleOnChange('participants')} />
                <div className="btn">
                  
                    <button  onClick={(e) => {e.preventDefault(); resetFilter();}}>Reset filter</button>
                    <button onClick={(e) => {e.preventDefault(); onSync();}} disabled={loader}>{loader?'Loading ...':'Sync'}</button>

                </div>
            </form>
        </Fragment>
    )
}

export default Filter;