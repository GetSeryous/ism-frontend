import { Fragment, useState } from "react";
import Link from 'next/link'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Register = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => { 
        setShowPassword(!showPassword);
    }

  return (
      <Fragment>
          <secton className="auth-container">
              <div className="">
                  <h1 className="text-center">Register</h1>
                  <div className="content p-5 mx-4">
                      <form>
                          <input
                              type="text"
                              className="form-control mb-3"
                              placeholder="Name"
                          />
                          <input
                              type="text"
                              className="form-control  mb-3"
                              placeholder="Email"
                          />
                          <input
                              type={showPassword ? "text" : "password"}
                              className="form-control mb-3"
                              placeholder="Password"
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
                              Register
                          </button>
                      </form>

                      <small>
                          I already have an account ?{" "}
                          <span>
                              <Link href="/auth/login">Login</Link>
                          </span>
                      </small>
                  </div>
              </div>
          </secton>
      </Fragment>
  );
}
 
export default Register;