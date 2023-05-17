import empty from './no-data.avif';
import './Empty.css';

const Empty = () => {
    return (
        <div className='empty'>
            <img src={empty} alt="horse" />
        </div>
    )
}

export default Empty;