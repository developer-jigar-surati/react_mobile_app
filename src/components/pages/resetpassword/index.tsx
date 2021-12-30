import React, { Fragment } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import InputCrossIcon from '../common/InputCrossIcon';
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';
import { postRequest } from '../../../services/axiosService';
import { notify, toastComponent } from '../common/notification';
import { minCharAllowMessage, maxCharAllowMessage } from '../common/errorMessage';

const Resetpassword = () => {

    const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();

    const location: any = useParams();
    const history: any = useHistory();
    const token = location.token ? location.token : '';

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const reqData = {
            token: token,
            new_password: data.newPassword,
            confirm_password: data.confirmPassword,
        };
        const response: any = await postRequest('resetpassword', reqData);
        if (response.status === "success") {
            notify('success', response.message);
            setTimeout(() => {
                history.push('/');
            }, 5000);
        } else if ((response.status === "validationfailed") && (typeof response.data !== 'undefined' && response.data.length > 0)) {
            response.data.forEach((values: string) => {
                notify('error', values);
            });
        } else {
            notify('error', response.message);
        }
    };

    const handleFormCross = (value: any) => {
        reset({ ...getValues(), [value]: '' }, { keepErrors: true });
    };

    return (
        <Fragment>
            {toastComponent()}
            <div className="appHeader no-border transparent position-absolute">
                <div className="pageTitle" />
                <div className="right">
                    <a href="/" className="headerButton">
                        Login
                    </a>
                </div>
            </div>
            <div id="appCapsule">
                <div className="section mt-2 text-center">
                    <h1>Reset Password</h1>
                    <h4>Fill the form to reset password</h4>
                </div>
                <div className="section mb-5 p-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" htmlFor="password1">New Password</label>
                                        <input maxLength={25} minLength={8} type="password" className="form-control" id="newPassword" autoComplete="off" placeholder="New password"
                                            {...register("newPassword", {
                                                required: true,
                                                minLength: { value: 8, message: minCharAllowMessage(8) },
                                                maxLength: { value: 25, message: maxCharAllowMessage(25) }
                                                // validate: (value) => (getValues('confirmPassword') !== '' && getValues('confirmPassword') !== value) ? 'Password missmatched!' : true,
                                            })} />
                                        {(typeof watch("newPassword") !== 'undefined' && watch("newPassword") !== '') && <InputCrossIcon onClick={() => handleFormCross('newPassword')} />}
                                    </div>
                                    {errors?.newPassword?.type === 'required' && <span className="text-danger">This field is required</span>}
                                    {errors?.newPassword?.type === 'minLength' && <span className="text-danger">{errors.newPassword.message}</span>}
                                    {errors?.newPassword?.type === 'maxLength' && <span className="text-danger">{errors.newPassword.message}</span>}
                                    {/* {errors?.newPassword?.type === 'validate' && <span className="text-danger">{errors?.newPassword?.message}</span>} */}
                                </div>
                                <div className="form-group basic">
                                    <div className="input-wrapper">
                                        <label className="label" htmlFor="password1">Confirm Password</label>
                                        <input maxLength={25} minLength={8} type="password" className="form-control" id="confirmPassword" autoComplete="off" placeholder="Confirm password"
                                            {...register("confirmPassword", {
                                                required: true,
                                                minLength: { value: 8, message: minCharAllowMessage(8) },
                                                maxLength: { value: 25, message: maxCharAllowMessage(25) },
                                                validate: (value) => (getValues('newPassword') !== '' && getValues('newPassword') !== value) ? 'Password missmatched!' : true,
                                            })} />
                                        {(typeof watch("confirmPassword") !== 'undefined' && watch("confirmPassword") !== '') && <InputCrossIcon onClick={() => handleFormCross('confirmPassword')} />}
                                    </div>
                                    {errors?.confirmPassword?.type === 'required' && <span className="text-danger">This field is required</span>}
                                    {errors?.confirmPassword?.type === 'minLength' && <span className="text-danger">{errors.confirmPassword.message}</span>}
                                    {errors?.confirmPassword?.type === 'maxLength' && <span className="text-danger">{errors.confirmPassword.message}</span>}
                                    {errors?.confirmPassword?.type === 'validate' && <span className="text-danger">{errors?.confirmPassword?.message}</span>}
                                </div>
                            </div>
                        </div>
                        {/* <div className="form-links mt-2">
                            <div>
                                <a href="/">Go back to login</a>
                            </div>
                        </div> */}
                        <div className="form-links mt-2">
                            <button type="submit" className="btn btn-primary btn-block btn-lg">Reset Password</button>
                        </div>
                        {/* <div className="form-button-group transparent">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
            </div> */}
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Resetpassword;