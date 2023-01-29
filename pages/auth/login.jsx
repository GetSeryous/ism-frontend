import { Fragment, useState } from "react";
import Link from "next/link";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRouter } from "next/router";
// import AuthContext from "@/context/AuthProvider";

export default function Login() {
    const router = useRouter()
    // const {setAuth} = useContext(AuthContext)

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    async function loginUser(credentials) {
     return fetch("http://localhost:8080/login", {
         method: "POST",
         headers: {
             "Content-Type": "application/json",
         },
         body: JSON.stringify(credentials),
     }).then((data) => data.json());
 }

    const handleSubmit = async (e) => {
         e.preventDefault();
         const accessToken = await loginUser({
             userName,
             password,
         });
         if (accessToken) {
             router.push("/dashboard");
         }
         console.log(accessToken);
     };

    return (
        <Fragment>
            <section>
                <div className="auth-container">
                    <div>
                        <h1 className="text-center">Login</h1>
                        <div className="content p-5 mx-4">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control  mb-3"
                                    placeholder="Email"
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    // value={userName}
                                    autoComplete="off"
                                    required
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control mb-3"
                                    placeholder="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    // value={password}
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

                                <button
                                    className="btn btn-primary w-100 mb-2"
                                    type="submit"
                                    disabled={
                                        userName === "" || password === ""
                                    }
                                >
                                    Login
                                </button>
                            </form>
                            <small>
                            
                                <span>
                                    <Link href="/auth/forgot-password">
                                        Forgotten password?
                                    </Link>
                                </span>
                            </small>
                        </div>
                        <div className="p-4  text-center">
                            <small>
                                I do not have an account?{" "}
                                <span>
                                    <Link href="/auth/register">Register</Link>
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
