import React, { Fragment, useState } from 'react';
import InputCrossIcon from '../common/InputCrossIcon';
import { emailRegx, passwordRegx } from '../common/Regx'; //contactNoRegx
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';
import { postRequest } from '../../../services/axiosService';
import { notify, toastComponent } from '../common/notification';
import { minCharAllowMessage, maxCharAllowMessage } from '../common/errorMessage';

const Login = () => {

  const [loading, setLoading] = useState(false);

  const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const reqData = {
      email_id: data.emailId,
      password: data.password,
    };
    const response: any = await postRequest('do-login', reqData);
    if (response.status === "success") {
      setLoading(false);
      notify('success', response.message);
    } else if ((response.status === "validationfailed") && (typeof response.data !== 'undefined' && response.data.length > 0)) {
      setLoading(false);
      response.data.forEach((values: string) => {
        notify('error', values);
      });
    } else {
      setLoading(false);
      notify('error', response.message);
    }
  };

  const handleFormCross = (value: any) => {
    reset({ ...getValues(), [value]: '' }, { keepErrors: true });
  };

  return (
    <Fragment>
      {toastComponent()}
      <div id="appCapsule">
        <div className="section mt-2 text-center">
          {/* {response} */}
          <h1>Log in</h1>
          <h4>Fill the form to log in</h4>
        </div>
        <div className="section mb-5 p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
              <div className="card-body">
                {/* <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="mobileNo">Mobile No</label>
                    <input maxLength={15} type="text" className="form-control" id="mobileNo" autoComplete="off" placeholder="Your Mobile No"
                      {...register("mobileNo", {
                        required: true,
                        pattern: { value: contactNoRegx, message: "Invalid Mobile No." },
                        maxLength: { value: 15, message: "Maximum 15 character allow." }
                      })} />
                    {(typeof watch("mobileNo") !== 'undefined' && watch("mobileNo") !== '') && <InputCrossIcon onClick={() => handleFormCross('mobileNo')} />}
                  </div>
                  {errors?.mobileNo?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.mobileNo?.type === 'pattern' && <span className="text-danger">{errors.mobileNo.message}</span>}
                  {errors?.mobileNo?.type === 'maxLength' && <span className="text-danger">{errors.mobileNo.message}</span>}
                </div>
                <div className='hr-or'></div> */}
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="emailId">E-mail</label>
                    <input maxLength={255} type="text" className="form-control" id="emailId" autoComplete="off" placeholder="Your e-mail"
                      {...register("emailId", {
                        required: true,
                        pattern: { value: emailRegx, message: "Invalid Email Id" },
                        maxLength: { value: 255, message: maxCharAllowMessage(255) }
                      })} />
                    {(typeof watch("emailId") !== 'undefined' && watch("emailId") !== '') && <InputCrossIcon onClick={() => handleFormCross('emailId')} />}
                  </div>
                  {errors?.emailId?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.emailId?.type === 'pattern' && <span className="text-danger">{errors.emailId.message}</span>}
                  {errors?.emailId?.type === 'maxLength' && <span className="text-danger">{errors.emailId.message}</span>}
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="password1">Password</label>
                    <input type="password" className="form-control" id="password" autoComplete="off" placeholder="Your password"
                      {...register("password", {
                        required: true,
                        pattern: { value: passwordRegx, message: "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character." },
                        minLength: { value: 8, message: minCharAllowMessage(8) },
                        maxLength: { value: 25, message: maxCharAllowMessage(25) }
                      })} />
                    {(typeof watch("password") !== 'undefined' && watch("password") !== '') && <InputCrossIcon onClick={() => handleFormCross('password')} />}
                  </div>
                  {errors?.password?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.password?.type === 'pattern' && <span className="text-danger">{errors.password.message}</span>}
                  {errors?.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                  {errors?.password?.type === 'maxLength' && <span className="text-danger">{errors.password.message}</span>}
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="/register">Register Now</a>
              </div>
              <div><a href="/forgotpassword" className="text-muted">Forgot Password?</a></div>
            </div>
            <div className="form-links mt-2">
              <button
                type="submit"
                className={loading ? "btn btn-primary btn-block btn-lg disabled" : "btn btn-primary btn-block btn-lg"}
              >
                {loading ? <>Please Wait...</> : <>Log in</>}
              </button>
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

export default Login;