import React from "react";
import Avatar from "./avatar";
import Info from "./info";
function Card(props) {
    return (
        <div>
            <div className="card">
                <div className="top">
                    <p> {props.id}</p>
                    <h2 className="name">{props.name}</h2>
                    <Avatar imgURL={props.imgURL} />
                </div>
                <div className="bottom">
                    <Info
                        detail={props.phone}
                    />
                    <Info
                        detail={props.email}
                    />
                </div>
            </div>
        </div>
    );
}

export default Card;


