import { Fragment } from 'react';
import InputCrossIcon from '../common/InputCrossIcon';
import { emailRegx, contactNoRegx, onlyAllowRegx } from '../common/Regx';
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './type';

const Register = () => {

  const { register, reset, handleSubmit, watch, getValues, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  
  const handleFormCross = (value: any) => {
    reset({ ...getValues(), [value]: ''}, { keepErrors: true });
  };

  return (
    <Fragment>
      {/* <Loader /> */}
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
                    <label className="label" htmlFor="name">Name</label>
                    <input maxLength={50} type="text" className="form-control" id="name" autoComplete="off" placeholder="Your Name"
                      {...register("name", {
                        required: true,
                        pattern: { value: onlyAllowRegx, message: "Alphanumeric, space, hyphen (-) and underscore (_) only allow." },
                        maxLength: { value: 50, message: "Maximum 50 character allow." }
                      })}
                    />
                    {(typeof watch("name") !== 'undefined' && watch("name") !== '') && <InputCrossIcon onClick={() => handleFormCross('name')} />}
                  </div>
                  {errors?.name?.type === 'required' && <span className="text-danger">This field is required</span>}
                  {errors?.name?.type === 'pattern' && <span className="text-danger">{errors.name.message}</span>}
                  {errors?.name?.type === 'maxLength' && <span className="text-danger">{errors.name.message}</span>}
                </div>
                <div className="form-group basic">
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
                    <input maxLength={25} minLength={8} type="password" className="form-control" id="password" autoComplete="off" placeholder="Your password"
                      {...register("password", {
                        required: true,
                        minLength: { value: 8, message: "Minimum 8 character allow." },
                        maxLength: { value: 25, message: "Maximum 25 character allow." }
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
                      I agree <a href="/#" data-bs-toggle="modal" data-bs-target="#termsModal">terms and
                        conditions</a>
                    </label>
                  </div>
                  {errors?.termandcondition?.type === 'required' && <span className="text-danger">This field is required</span>}
                </div>
              </div>
            </div>
            <div className="form-button-group transparent">
              <button type="submit" className="btn btn-primary btn-block btn-lg">Register</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;