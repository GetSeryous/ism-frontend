import { Fragment, useState } from "react";
import Link from 'next/link'
import Login from './auth/login'

export default function Home() {
    const [token, setToken] = useState();


    if (!token) {
        return <Login setToken={setToken} token={token} />;
    }

    return (
        <Fragment>
            <main className="container">
                <div>
                    <h1>Hello World</h1>
                    <Link href="/auth/login">
                        <button className="btn btn-primary">Okoli</button>
                    </Link>
                </div>
            </main>
        </Fragment>
    );
}
