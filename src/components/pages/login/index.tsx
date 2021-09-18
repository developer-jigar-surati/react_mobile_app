import React, { Fragment } from 'react';
import InputCrossIcon from '../common/InputCrossIcon';
import { emailRegx } from '../common/Regx'; //contactNoRegx
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';

const Login = () => {

  const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const handleFormCross = (value: any) => {
    reset({ ...getValues(), [value]: ''}, { keepErrors: true });
  };

  return (
    <Fragment>
      <div id="appCapsule">
        <div className="section mt-2 text-center">
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
                        maxLength: { value: 255, message: "Maximum 255 character allow." }
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
                      })} />
                    {(typeof watch("password") !== 'undefined' && watch("password") !== '') && <InputCrossIcon onClick={() => handleFormCross('password')} />}
                  </div>
                  {errors?.password?.type === 'required' && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="/register">Register Now</a>
              </div>
              <div><a href="/forgotpassword" className="text-muted">Forgot Password?</a></div>
            </div>
            <div className="form-button-group transparent">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;