import React, { Fragment, useState } from 'react';
import InputCrossIcon from '../common/InputCrossIcon';
import { emailRegx, contactNoRegx, onlyAllowRegx } from '../common/Regx';
import { onlyAllowMessage, minCharAllowMessage, maxCharAllowMessage, inValidMessage } from '../common/errorMessage';
import { notify, toastComponent } from '../common/notification';

import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';
import { postRequest } from '../../../services/axiosService';

const Register = () => {
  const [loading, setLoading] = useState(false);

  const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    const reqData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email_id: data.emailId,
      mobile_no: data.mobileNo,
      password: data.password,
    };
    const response: any = await postRequest('do-register', reqData);
    if (response.status === "success") {
      setLoading(false);
      notify('success', response.message);
      setTimeout(() => {
        reset({});
      }, 1000);
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

  // const handleMobileNoChange = (e: any) => {
  //   if (!contactNoRegx.test(e.target.value)) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

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
          <h1>Register now</h1>
          <h4>Create an account</h4>
        </div>
        <div className="section mb-5 p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
              <div className="card-body">
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="firstName">First Name</label>
                    <input maxLength={50} type="text" className="form-control" id="firstName" autoComplete="off" placeholder="Your First Name"
                      {...register("firstName", {
                        required: true,
                        pattern: { value: onlyAllowRegx, message: onlyAllowMessage },
                        maxLength: { value: 50, message: maxCharAllowMessage(50) }
                      })}
                    />
                    {(typeof watch("firstName") !== 'undefined' && watch("firstName") !== '') && <InputCrossIcon onClick={() => handleFormCross('firstName')} />}
                  </div>
                  {errors?.firstName?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.firstName?.type === 'pattern' && <span className="text-danger">{errors.firstName.message}</span>}
                  {errors?.firstName?.type === 'maxLength' && <span className="text-danger">{errors.firstName.message}</span>}
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="lastName">Last Name</label>
                    <input maxLength={50} type="text" className="form-control" id="lastName" autoComplete="off" placeholder="Your Last Name"
                      {...register("lastName", {
                        required: true,
                        pattern: { value: onlyAllowRegx, message: onlyAllowMessage },
                        maxLength: { value: 50, message: maxCharAllowMessage(50) }
                      })}
                    />
                    {(typeof watch("lastName") !== 'undefined' && watch("lastName") !== '') && <InputCrossIcon onClick={() => handleFormCross('lastName')} />}
                  </div>
                  {errors?.lastName?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.lastName?.type === 'pattern' && <span className="text-danger">{errors.lastName.message}</span>}
                  {errors?.lastName?.type === 'maxLength' && <span className="text-danger">{errors.lastName.message}</span>}
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="mobileNo">Mobile No</label>
                    <input maxLength={15} type="text" className="form-control" id="mobileNo" autoComplete="off" placeholder="Your Mobile No"
                      {...register("mobileNo", {
                        required: true,
                        pattern: { value: contactNoRegx, message: inValidMessage('Mobile No') },
                        maxLength: { value: 15, message: maxCharAllowMessage(15) }
                      })}
                    // onChange={(e) => handleMobileNoChange(e)}
                    />
                    {(typeof watch("mobileNo") !== 'undefined' && watch("mobileNo") !== '') && <InputCrossIcon onClick={() => handleFormCross('mobileNo')} />}
                  </div>
                  {errors?.mobileNo?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.mobileNo?.type === 'pattern' && <span className="text-danger">{errors.mobileNo.message}</span>}
                  {errors?.mobileNo?.type === 'maxLength' && <span className="text-danger">{errors.mobileNo.message}</span>}
                </div>
                <div className="form-group basic">
                  <div className="input-wrapper">
                    <label className="label" htmlFor="emailId">E-mail</label>
                    <input maxLength={255} type="text" className="form-control" id="emailId" autoComplete="off" placeholder="Your e-mail"
                      {...register("emailId", {
                        required: true,
                        pattern: { value: emailRegx, message: inValidMessage('Email Id') },
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
                    <input maxLength={25} minLength={8} type="password" className="form-control" id="password" autoComplete="off" placeholder="Your password"
                      {...register("password", {
                        required: true,
                        minLength: { value: 8, message: minCharAllowMessage(8) },
                        maxLength: { value: 25, message: maxCharAllowMessage(25) }
                      })} />
                    {(typeof watch("password") !== 'undefined' && watch("password") !== '') && <InputCrossIcon onClick={() => handleFormCross('password')} />}
                  </div>
                  {errors?.password?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.password?.type === 'minLength' && <span className="text-danger">{errors.password.message}</span>}
                  {errors?.password?.type === 'maxLength' && <span className="text-danger">{errors.password.message}</span>}
                </div>
                <div className="custom-control custom-checkbox mt-2 mb-1">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="termandcondition"
                      {...register("termandcondition", {
                        required: true,
                      })} />
                    <label className="form-check-label" htmlFor="termandcondition">
                      I agree <a href="/register/#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and
                        conditions</a>
                    </label>
                  </div>
                  {errors?.termandcondition?.type === 'required' && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="form-links mt-2">
              <button
                type="submit"
                className={loading ? "btn btn-primary btn-block btn-lg disabled" : "btn btn-primary btn-block btn-lg"}
              >
                {loading ? <>Please Wait...</> : <>Register</>}
              </button>
            </div>
            {/* <div className="form-button-group transparent">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button>
            </div> */}
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;