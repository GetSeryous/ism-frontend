import { Fragment, useState } from "react";
import Link from 'next/link'
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRouter } from "next/router";

const Register = () => {
    const router = useRouter()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [showPassword, setShowPassword] = useState(false);

     async function loginUser(credentials) {
         return fetch("http://localhost:8080/login", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(credentials),
         })
             .then((data) => data.json());
     }

     const handleSubmit = async (e) => {
         e.preventDefault();
         const token = await loginUser({
             userName,
             password,
             email
         });
         if (token) {
             router.push("/auth/login");
         }
         console.log(token)
     };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Fragment>
            <section className="auth-container">
                <div>
                    <h1 className="text-center">Register</h1>
                    <div className="content p-5 mx-4">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                onChange={(e) => setUserName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                className="form-control  mb-3"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control mb-3"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
            </section>
        </Fragment>
    );
}
 
export default Register;