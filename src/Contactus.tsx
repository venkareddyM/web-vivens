import React from "react";
import "./Contactus.css";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm ={
 "firstname" : string;
 "midelname" : string;
 "lastname" : string;
 "email" : string;
 "Password" : number;
  "age":number;
  "Date Of Birth" : number;

}
const Contactus = ()=>{ 
    const validationSchema = Yup.object().shape({
        "firstname" : Yup.string().required("firstname can't left blank"),
        "midelname" : Yup.string().required("midelname can't left blank").min(3,"minimum 3 characters are required").max(6,"maximum 6 characters are allowed"),
        "lastname" : Yup.string().required("lastname can't left blank").min(3,"minimum 3 characters are required").max(6,"maximum 6 characters are allowed"),
        "Password" : Yup.number().required("password can't left blank"),
        "email":Yup.string().required("can't left email").email("invalid email"),
        "age" : Yup.number().required("age can't left blank"),
        "Date Of Birth" : Yup.number().required("Date Of Birth can't left blank"),
    });
    const {register,
        reset,
        handleSubmit,
        formState : {errors}} = useForm<UserSubmitForm>({
     resolver : yupResolver(validationSchema)
 });
 const onSubmit = (data:UserSubmitForm)=>{
     console.log(data);
 }
 return(
    <>
        <div className="register-form">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text"
                           {...register("firstname")}
                           className={`form-control ${errors.firstname?'is-invalid':""}`}></input>
                    <div className="invalid-feedback">{errors.firstname?.message}</div>
                </div>

                <div className="form-group">
                    <label>Midle Name</label>
                    <input type="text"
                           {...register("firstname")}
                           className={`form-control ${errors.firstname?'is-invalid':""}`}></input>
                    <div className="invalid-feedback">{errors.firstname?.message}</div>
                </div>

                <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                               {...register("lastname")}
                               className={`form-control ${errors.lastname?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.lastname?.message}</div>
                    </div>

                    <div className="form-group">
                        <label>Passwod</label>
                        <input type="Password"
                               {...register("Password")}
                               className={`form-control ${errors.Password?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.Password?.message}</div>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email"
                               {...register("email")}
                               className={`form-control ${errors.email?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>

                    <div className="form-group">
                        <label>age</label>
                        <input type="number"
                               {...register("age")}
                               className={`form-control ${errors.age?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.age?.message}</div>
                    </div>

                    <div className="form-group">
                        <label>Date Of Birth</label>
                        <input type="date"
                               {...register("age")}
                               className={`form-control ${errors.age?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.age?.message}</div>
                    </div>


                
                <div className="form-group">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="reset" onClick={()=>reset()} className="btn btn-danger">Reset</button>
               </div>
                
          </form>
       </div>
        </>
    )
}
export default Contactus;