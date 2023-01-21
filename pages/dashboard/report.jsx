import DashboardLayout from "@/layouts/DashboardLayout";
import { Fragment } from "react";

const Report = () => {
    return (
        <Fragment>
            <DashboardLayout>
                <section className="dashboard-preview">
                    <h1>Report</h1>
                    <div className="content px-4 py-5">
                        <form>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Happy"
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Happy"
                            />

                            <textarea
                                className="form-control mb-3"
                                placeholder="Write your report here..."
                                rows="8"
                            />
                            <button className="btn btn-primary w-100">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </DashboardLayout>
        </Fragment>
    );
};

export default Report;
