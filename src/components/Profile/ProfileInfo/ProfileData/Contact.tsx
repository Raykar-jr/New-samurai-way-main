import React from "react";

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}
export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {

    return (
            <li><a href={contactValue !== null ? `https://${contactValue}` : 'https://ru.reactjs.org/'}>{contactTitle}</a></li>
    )
}