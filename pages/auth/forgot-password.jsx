import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function ForgotPassword() {
    const router = useRouter();
    const [userName, setUserName] = useState();

    async function loginUser(credentials) {
        return fetch("http://localhost:8080/forgotten", {
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
                        <h3 className="text-center py-2">
                            Reset your password
                        </h3>
                        <div className="content p-5 mx-4">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    className="form-control  mb-2"
                                    placeholder="Enter your email address..."
                                    onChange={(e) =>
                                        setUserName(e.target.value)
                                    }
                                    autoComplete="off"
                                    required
                                />
                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                    disabled={userName === ""}
                                >
                                    Send password reset link
                                </button>
                            </form>
                            {/* <div style={{ fontSize: "10px" }} className="pt-2">
                                **Enter your email address to get a link to
                                reset your password
                            </div> */}
                        </div>
                        <div className="text-center py-4">
                            <small>
                                Remembered your password?{" "}
                                <span>
                                    <Link href="/auth/login">Login</Link>
                                </span>
                            </small>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
