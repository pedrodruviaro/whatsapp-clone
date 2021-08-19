import React from "react";
import "../styles/chatlist-item.css";

export default function ChatlistItem({ onClick, active, data }) {
    return (
        <div className={`chatlistItem ${active ? 'active' : ''}`} onClick={onClick}>
            <img src={data.avatar} alt="" className="chatlistItem--avatar" />
            <div className="chatlistItem--lines">
                <div className="chatlistItem--line">
                    <div className="chatlistItem--name">{data.title}</div>
                    <div className="chatlistItem--date">19:00</div>
                </div>

                <div className="chatlistItem--line">
                    <div className="chatlistItem--lastMsg">
                        <p>Opa, tudo bem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et unde facere adipisci animi aut accusamus blanditiis ad aperiam. Quod quia officiis nulla fugiat tempore sint doloribus officia voluptatibus sed.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
