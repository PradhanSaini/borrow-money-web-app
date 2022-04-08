import React, { useContext } from 'react'
import style from './loginPage.module.scss'
import { Link } from 'react-router-dom';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../helper/authContext";
import axios from "axios";
import swal from 'sweetalert2';


const LoginPage = () => {

    const { setAuthState } = useContext(AuthContext);
    const [mobile, setMobile] = useState();

    function handleChange(e) {
        if (e.target.name === "mobile") setMobile(e.target.value);
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email, password);
        const obj = {
          mobile:mobile
        }
        axios.post("http://localhost:3001/loginPage", obj)
          .then(res => {
            if (res.data.message) {
              swal.fire({
                title: res.data.message,
                icon: "info",
                button: "OK!",
              });
            }
            else {
              setAuthState(true);
              sessionStorage.setItem("accessToken", res.data);
              swal.fire({
                icon: 'success',
                title: 'Logged In',
                showConfirmButton: false,
                timer: 1000,
              });
            //   history("/");
            }
          })
          .catch(err => {
            swal.fire({
              icon: 'warning',
              title: err,
              // showConfirmButton: false,
              // timer: 1000,
            });
          });
      }



  return (
    <div>
        <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input className={style.forinput} type="number" name="mobile" id="mobile" placeholder="Mobile No." onChange={handleChange} />

            <div className={style.btn_block}>
              <button className="btn btn-primary" type="submit">Login</button>
            </div>
             <div className={style.or}>
              Or
            </div>
            <div className={style.btn_block}>
              <Link to="/signupPage">
                <button type="button" className="btn btn-secondary">Register
                </button>
              </Link>
            </div> 
          </form>
    </div>
  )
}

export default LoginPage