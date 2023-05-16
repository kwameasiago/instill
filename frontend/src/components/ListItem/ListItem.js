import { type } from "@testing-library/user-event/dist/type";
import { Fragment } from "react"
import './ListItem.css'

const ListItem = () => {
    const data = {
        _id: "6463f6b74b35eeeaba54e9c8",
        activity: "Resolve a problem you've been putting off",
        type: "busywork",
        participants: 1,
        price: 0,
        link: "",
        key: "9999999",
        accessibility: 0,
        __v: 0
    };

    return (
        <Fragment>
            <div className="list-item-container">
                <div className="inner-container">
                    <div className="icon">
                        <h1>{data.type[0]}</h1>
                    </div>
                    <div className="content">
                        <div>
                        <h1>{data.type}</h1>
                        <p>{data.activity}</p>
                        </div>
                        <div className="chip">
                        <div className="chip-container">
                            <div className="chip-left">
                            participants
                            </div>
                            <div className="chip-right">
                                {data.participants}
                            </div>
                            
                        </div>

                        <div className="chip-container">
                            <div className="chip-left">
                                price
                            </div>
                            <div className="chip-right">
                                {data.price}
                            </div>
                            
                        </div>
                        <div className="chip-container">
                            <div className="chip-left">
                                Link
                            </div>
                            <div className="chip-right">
                                {data.link === ''? 'Na': (
                                    <a href={data.link}>More</a>
                                )}
                            </div>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default ListItem