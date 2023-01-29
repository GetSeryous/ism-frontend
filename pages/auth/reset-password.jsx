import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";

export default function ResetPassword() {
    const router = useRouter();
    const [resetPassword, setResetPassword] = useState();


    return (
        <Fragment>
            <section>
                <div className="auth-container">
                    <div>
                        <h3 className="text-center py-2">
                            New password
                        </h3>
                        <div className="content p-5 mx-4">
                            <form>
                                <input
                                    type="email"
                                    className="form-control  mb-2"
                                    placeholder="Enter your new password..."
                                    onChange={(e) =>
                                        setResetPassword(e.target.value)
                                    }
                                    autoComplete="off"
                                    required
                                />
                                <button
                                    className="btn btn-primary w-100"
                                    type="submit"
                                    disabled={resetPassword === ""}
                                >
                                     Reset password
                                </button>
                            </form>
                           
                        </div>
                        {/* <div className="text-center py-4">
                            <small>
                                Remembered your password?{" "}
                                <span>
                                    <Link href="/auth/login">Login</Link>
                                </span>
                            </small>
                        </div> */}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
