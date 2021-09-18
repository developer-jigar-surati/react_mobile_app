import { Fragment } from 'react';

const NotFound = () => {
    return (
        <Fragment>
            {/* App Capsule */}
            <div id="appCapsule">
                <div className="section">
                    <div className="splash-page mt-5 mb-5">
                        <div className="mb-3">
                            <img src="assets/img/sample/photo/vector1.png" alt="not found" className="imaged w-50 square" />
                        </div>
                        <h1>404</h1>
                        <h2 className="mb-2">Page not found!</h2>
                        <p>
                            We're sorry, the page you requested could not be found. Please go back to the homepage or contact us at <a href="mailto:support@jigscoding.com" rel="noreferrer" target="_blank">support@jigscoding.com</a>
                        </p>
                    </div>
                </div>
                <div className="fixed-bar">
                    <div className="row">
                        {/* <div className="col-6">
                            <a href="#" className="btn btn-lg btn-outline-secondary btn-block goBack">Go Back</a>
                        </div> */}
                        <div className="col-12">
                            <a href="/" className="btn btn-lg btn-primary btn-block">Home</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* * App Capsule */}

        </Fragment>
    );
}

export default NotFound;