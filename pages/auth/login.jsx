import { Fragment, useState } from "react";
import Link from "next/link";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Fragment>
            <secton className="auth-container">
                <div className="">
                    <h1 className="text-center">Login</h1>
                    <div className="content p-5 mx-4">
                        <form>
                            <input
                                type="email"
                                className="form-control  mb-3"
                                placeholder="Email"
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control mb-3"
                                placeholder="password"
                            />

                            <span
                                className="show-password"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <MdVisibilityOff />
                                ) : (
                                    <MdVisibility />
                                )}
                            </span>

                            <button className="btn btn-primary w-100 mb-2">
                                Login
                            </button>
                        </form>
                        <small>
                            I already have an account?{" "}
                            <span>
                                <Link href="/auth/register">Login</Link>
                            </span>
                        </small>
                    </div>
                </div>
            </secton>
        </Fragment>
    );
};

export default Login;
