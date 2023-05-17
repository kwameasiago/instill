import { Fragment } from "react"
import './ListItem.css'

const ListItem = ({data}) => {
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
                                    {data.link === '' ? <i>&#128196;</i> : (
                                        <a href={data.link}>&#128279;</a>
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