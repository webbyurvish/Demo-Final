import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import { form } from "react-validation/build/form";
import { input } from "react-validation/build/input";
import { CheckButton } from "react-validation/build/button"

// import AuthService from "../services/authservice";

const required = (value) => {
    if (!value) {
        return (
            <div className="invalid-feedback d-block">
                This field is required!
            </div>
        );
    }
};

const Login = () => {
    const form = useRef();
    const checkBtn = useRef();
    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();

        // if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(username, password).then(
            () => {
                router.push("/");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                // setMessage(resMessage);
            }
        );
        // } else {
        // setLoading(false);
        // }
    };

    return (
        // <div className="col-md-12">
        //     <div className="card card-container">
        //         <img
        //             src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        //             alt="profile-img"
        //             className="profile-img-card"
        //         />

        //         <Form onSubmit={handleLogin} ref={form}>
        //             <div className="form-group">
        //                 <label htmlFor="username">Username</label>
        //                 <Input
        //                     type="text"
        //                     className="form-control"
        //                     name="username"
        //                     value={username}
        //                     onChange={onChangeUsername}
        //                     validations={[required]}
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <label htmlFor="password">Password</label>
        //                 <Input
        //                     type="password"
        //                     className="form-control"
        //                     name="password"
        //                     value={password}
        //                     onChange={onChangePassword}
        //                     validations={[required]}
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <button className="btn btn-primary btn-block" disabled={loading}>
        //                     {loading && (
        //                         <span className="spinner-border spinner-border-sm"></span>
        //                     )}
        //                     <span>Login</span>
        //                 </button>
        //             </div>

        //             {message && (
        //                 <div className="form-group">
        //                     <div className="alert alert-danger" role="alert">
        //                         {message}
        //                     </div>
        //                 </div>
        //             )}
        //             <CheckButton style={{ display: "none" }} ref={checkBtn} />
        //         </Form>
        //     </div>
        // </div>
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Login Form</span></div>
                <form action="#">
                    <div class="row">
                        <i class="fas fa-user"></i>
                        <input type="text" placeholder="Email or Phone" onChange={onChangeUsername} required />
                    </div>
                    <div class="row">
                        <i class="fas fa-lock"></i>
                        <input type="password" placeholder="Password" onChange={onChangePassword} required />
                    </div>
                    <div class="pass"><a href="#">Forgot password?</a></div>
                    <div class="row button">
                        <input type="submit" value="Login" />
                    </div>
                    <div class="signup-link">Not a member? <a href="#">Signup now</a></div>
                </form>
            </div>
        </div>
    );
};

export default Login;
