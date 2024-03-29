import React, { useEffect, useContext } from 'react';
import { Extenders } from '../Extenders';
import { Link, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../contexts/AuthContext";
Extenders.init();



function Login(props) {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    // function doSubmit() {
    //     let user_captcha_value = document.getElementById('user_captcha_input').value;
    //     let errorMesg = document.getElementById('errorMesg');
    //     if (validateCaptcha(user_captcha_value, false) === true) {
    //         errorMesg.innerText = "Captcha Matched";
    //     }
    //     else {
    //         errorMesg.innerText = "Captcha does not Match";
    //     }
    // };

    function handleSubmit(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        const value = JSON.stringify(Object.fromEntries(formData));
        const json = JSON.tryParse(value);
        fetch("http://localhost:5000/auth/login", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify(json)
        })
            .then(resp => resp.text())
            .then(text => {
                const json = JSON.tryParse(text);
                if (json.status) {
                    document.cookie = `auth=${json.token};max-age=${60 * 60 * 24}`;
                    setAuth({ role: json.role });
                    console.log(json);
                    navigate("/account");
                } else {
                    console.log(json);
                    document.cookie = `auth=null;max-age=0`;
                    setAuth({ role: 0 });
                }

            });
    }

    return (
        <>
            <div className='myBigForm'>
                <div className='imageForm'><img className="imageLogin" src={process.env.PUBLIC_URL + '/images/pictures/pexels-julia-filirovska-7138780.jpg'} alt="" /></div>
                <div className='myForm loginForm'>
                    <form id='ContactData' onSubmit={handleSubmit}>
                        <h3 className='titleForms lettre-space-2'>Member login</h3>
                        <div className="mb-3">
                            {/* <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label> */}
                            <input type="email" className="form-control myInputs" id="exampleInputEmail1" placeholder="Email Adress" name="email" aria-describedby="emailHelp" required />

                        </div>

                        <div className="mb-3">
                            {/* <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label> */}
                            <input type="password" className="form-control myInputs" name="password" placeholder="Password" id="exampleInputPassword1" />
                            <Link to="/account/newPass" className="nav-link text-light myLinks"> Mot de passe oublié ? </Link>
                        </div>


                        <div className='submitForm'>
                            <input type="submit" className="btn btn-primary mySubmit" name="submit" value="Login"></input>
                            <Link to="/register" className="nav-link text-light myLinks">créer un compte </Link>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );

};
export default Login;
