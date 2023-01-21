import DashboardLayout from "@/layouts/DashboardLayout";
import { Fragment } from "react";

const Account = () => {
    return (
        <Fragment>
            <DashboardLayout>
                <section className="dashboard-preview">
                    <h1>Account Setting</h1>
                    <div className="content px-4 py-5">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Name"
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="text"
                                        className="form-control  mb-3"
                                        placeholder="Email"
                                        autoComplete="off"
                                    />
                                </div>
                            </div>

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                autoComplete="off"
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Current Password"
                                autoComplete="off"
                            />

                            <button className="btn btn-primary w-100 mb-2">
                                Update Account
                            </button>
                        </form>
                    </div>
                </section>
            </DashboardLayout>
        </Fragment>
    );
};

export default Account;
