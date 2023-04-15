import {Link} from "react-router-dom";
import React from "react";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {

    return (
        <li><Link to={contactValue !== null ? contactValue : ''}>{contactTitle}</Link></li>
    )
}