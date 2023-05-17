import { Fragment } from "react";
import './Filter.css';

const Filter = ({
    handleSubmit,
    handleOnChange,
    onSync,
    resetFilter
}) => {
    return (
        <Fragment>
            <form className="form-control" onSubmit={handleSubmit}>


                <input name="price" type="number" placeholder="Max price" onChange={handleOnChange('price')} />

                <input name="price" type="text" placeholder="Type" onChange={handleOnChange('price')} />


                <input name="price" type="number" placeholder="Participants" onChange={handleOnChange('price')} />
                <div className="btn">
                    <button type="submit" onSubmit={handleSubmit}>Filter</button>
                    <button type="submit" onSubmit={resetFilter}>Reset filter</button>
                    <button type="submit" onSubmit={onSync}>Sync</button>

                </div>
            </form>
        </Fragment>
    )
}

export default Filter;