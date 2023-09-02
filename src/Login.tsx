import React from "react";
import "./login.css";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

type UserSubmitForm ={
 "username" : string;
 "Password" : number;
}
const Login = ()=>{ 
    const validationSchema = Yup.object().shape({
        "username":Yup.string().required("username can't left blank").min(3,"minimum 3 characters are required").max(6,"maximum 6 characters are allowed"),
        "Password" : Yup.number().required("password can't left blank"),
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
        <div className="Login-form">
            <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                    <label>username</label>
                    <input type="text"
                           {...register("username")}
                           className={`form-control ${errors.username?'is-invalid':""}`}></input>
                    <div className="invalid-feedback">{errors.username?.message}</div>
                </div>

                    <div className="form-group">
                        <label>Passwod</label>
                        <input type="Password"
                               {...register("Password")}
                               className={`form-control ${errors.Password?'is-invalid':""}`}></input>
                        <div className="invalid-feedback">{errors.Password?.message}</div>
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
export default Login;