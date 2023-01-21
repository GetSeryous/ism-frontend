import { Fragment } from "react";
import Link from 'next/link'

export default function Home() {
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
