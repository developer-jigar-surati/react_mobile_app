import { Fragment } from 'react';
import { BASE_URL } from '../../../global/global';

const Loader = () => {
    return (
        <Fragment>
            <div id="loader">
                <img src={`${BASE_URL}/assets/img/logo-icon.png`} alt="icon" className="loading-icon" />
            </div>
        </Fragment>
    );
}

export default Loader;