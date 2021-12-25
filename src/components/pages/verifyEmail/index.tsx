import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../../global';
import { postRequest } from '../../../services/axiosService';
// import { notify, toastComponent } from '../common/notification';

const VerifyEmail = () => {
    const location: any = useParams();
    const token = location.token ? location.token : '';

    const [verifyMsg, setVerifyMsg] = useState('Please wait... we are checking your verification status.');
    useEffect(() => {
        const verifyToken = async (token: string) => {
            if (typeof token !== 'undefined' && token !== '' && token !== null) {
                const response: any = await postRequest('verify-email', { token: token });
                console.log('response', response);
                setVerifyMsg(response.message);
            }
        }
        verifyToken(token);
    }, [token]);

    return (
        <Fragment>
            {/* App Capsule */}
            <div id="appCapsule">
                <div className="section">
                    <div className="splash-page mt-5 mb-5">
                        <div className="mb-3">
                            <img src={`${BASE_URL}assets/img/sample/photo/vector2.png`} alt="verfiy email img" className="imaged w-50 square" />
                        </div>
                        <h2 className="mb-2">Email Verification</h2>
                        <p dangerouslySetInnerHTML={{ __html: verifyMsg }} />
                    </div>
                    <div className="splash-page mt-5 mb-5">
                        <a href="/" className="btn btn-lg btn-primary">Login</a>
                    </div>
                </div>
            </div>
            {/* * App Capsule */}
        </Fragment>
    );
};

export default VerifyEmail;