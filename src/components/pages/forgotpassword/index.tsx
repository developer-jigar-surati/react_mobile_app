import React, { Fragment } from 'react';
import InputCrossIcon from '../common/InputCrossIcon';
import { emailRegx } from '../common/Regx'; //contactNoRegx
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';
import { postRequest } from '../../../services/axiosService';
import { notify, toastComponent } from '../common/notification';

const Forgotpassword = () => {

  const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const reqData = {
      email_id: data.emailId,
    };
    const response: any = await postRequest('forgotpassword', reqData);
    if (response.status === "success") {
      notify('success', response.message);
      reset({});
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
      <div id="appCapsule">
        <div className="section mt-2 text-center">
          {/* {response} */}
          <h1>Forgot password</h1>
          <h4>Type your e-mail to reset your password</h4>
        </div>
        <div className="section mb-5 p-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card">
              <div className="card-body">
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
              </div>
            </div>
            <div className="form-links mt-2">
              <div>
                <a href="/">Go back to login</a>
              </div>
            </div>
            <div className="form-links mt-2">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Forgotpassword;