import { Fragment, useState, createContext, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import { RiStockFill, RiAccountPinCircleFill } from "react-icons/ri";
import { MdBugReport, MdAddToPhotos } from "react-icons/md";
import { useRouter } from "next/router";
import Link from "next/link";
import DashboardNavBar from "@/components/DashboardNavBar";

export const ThemeContext = createContext(null);

const DashboardLayout = ({ children }) => {
    // state
    const { route } = useRouter();
    const [nav, setNav] = useState(false);
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        const getTheme = () => {
            return (
                window.localStorage.getItem("theme") ??
                window.localStorage.setItem("theme", "light") ??
                "light"
            );
        };
        setTheme(getTheme());
    }, [theme]);

    // All toggle state
    const handleNavToggle = () => {
        setNav(!nav);
    };

    const toggleTheme = () => {
        let newTheme =
            localStorage.getItem("theme") === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Fragment>
                <DashboardNavBar nav={nav} handleNavToggle={handleNavToggle} />
                <section className={theme}>
                    <div className="dashboard-container container">
                        <aside className="side-bar">
                            <div className="container">
                                <ul className="py-4 ">
                                    <li
                                        className={
                                            route === "/dashboard"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <Link href="/dashboard">
                                            <span className="me-3">
                                                <AiFillHome
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Home
                                        </Link>
                                    </li>

                                    <li
                                        className={
                                            route === "/dashboard/product"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <Link href="/dashboard/product">
                                            <span className="me-3">
                                                <MdAddToPhotos
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Add Product
                                        </Link>
                                    </li>

                                    <li
                                        className={
                                            route === "/dashboard/stock"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        {" "}
                                        <Link href="/dashboard/stock">
                                            <span className="me-3">
                                                <RiStockFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Stock
                                        </Link>
                                    </li>

                                    <li
                                        className={
                                            route === "/dashboard/account"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <Link href="/dashboard/account">
                                            <span className="me-3">
                                                <RiAccountPinCircleFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Account
                                        </Link>
                                    </li>

                                    <li
                                        className={
                                            route === "/dashboard/report"
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <Link href="/dashboard/report">
                                            <span className="me-3">
                                                <MdBugReport
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Report
                                        </Link>
                                    </li>

                                    <li
                                        onClick={toggleTheme}
                                        className="toggleTheme"
                                    >
                                        <span className="me-3">
                                            {theme === "light" ? (
                                                <BsFillMoonFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            ) : (
                                                <BsSunFill
                                                    className="mb-1 icon text-warning"
                                                    size={21}
                                                />
                                            )}
                                        </span>
                                        {theme === "light"
                                            ? "Dark mode"
                                            : "Light mode"}
                                    </li>
                                </ul>
                            </div>
                        </aside>

                        <aside
                            className={
                                nav ? "side-bar-mobile" : "hide-side-bar"
                            }
                        >
                            <div className="container">
                                <ul>
                                    <Link href="/dashboard">
                                        <li
                                            className={
                                                route === "/dashboard"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <span className="me-3">
                                                <AiFillHome
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Home
                                        </li>
                                    </Link>

                                    <Link href="/dashboard/product">
                                        <li
                                            className={
                                                route === "/dashboard/product"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <span className="me-3">
                                                <MdAddToPhotos
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Add product
                                        </li>
                                    </Link>

                                    <Link href="/dashboard/stock">
                                        <li
                                            className={
                                                route === "/dashboard/stock"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <span className="me-3">
                                                <RiStockFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Stock
                                        </li>
                                    </Link>

                                    <Link href="/dashboard/account">
                                        <li
                                            className={
                                                route === "/dashboard/account"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <span className="me-3">
                                                <RiAccountPinCircleFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            Account
                                        </li>
                                    </Link>

                                    <Link href="/dashboard/report">
                                        <li
                                            className={
                                                route === "/dashboard/report"
                                                    ? "active"
                                                    : ""
                                            }
                                        >
                                            <span className="me-3">
                                                <MdBugReport
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            </span>
                                            report
                                        </li>
                                    </Link>

                                    <li onClick={toggleTheme}>
                                        <span className="me-3">
                                            {theme === "light" ? (
                                                <BsFillMoonFill
                                                    className="mb-1 icon"
                                                    size={21}
                                                />
                                            ) : (
                                                <BsSunFill
                                                    className="mb-1 icon text-warning"
                                                    size={21}
                                                />
                                            )}
                                        </span>
                                        {theme === "light"
                                            ? "Dark mode"
                                            : "Light mode"}
                                    </li>
                                </ul>
                                <div className="dropdown pb-4">
                                    <button
                                        className="btn btn-secondary dropdown-toggle w-100"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown button
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                        {children}
                    </div>
                </section>
            </Fragment>
        </ThemeContext.Provider>
    );
};

export default DashboardLayout;
