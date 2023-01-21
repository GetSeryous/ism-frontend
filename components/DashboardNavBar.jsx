import { Fragment, useState } from "react";
import Avatar from "react-avatar";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

const DasboardNavBar = ({nav, handleNavToggle}) => {
   
    return (
        <Fragment>
            <nav className="py-4">
                <div className="container">
                    <div className="d-flex justify-content-between align-center">
                        <div style={{ fontSize: "25px" }}>
                            <span className="text-primary">.</span>ISM
                        </div>
                        <ul className="d-flex nav justify-content-center align-center">
                            <li className="ps-4 pe-3">
                                <Avatar
                                    name="Okoli Praise"
                                    size={40}
                                    round={true}
                                    alt="Any name"
                                    maxInitials={2}
                                    className="header-profile-user"
                                />
                            </li>
                            <li className="pe-4 pt-2">Praise</li>
                            <li className="px-4 pt-2">Log out</li>
                        </ul>
                        <div className="toggleIcon" style={{cursor: "pointer"}} onClick={handleNavToggle}>
                            {!nav ? (
                                <HiBars3BottomRight size={25} />
                            ) : (
                                <HiOutlineXMark size={25} />
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}
 
export default DasboardNavBar;