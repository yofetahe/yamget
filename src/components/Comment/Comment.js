import React, { useState } from 'react'

import './comment.css';

function CommentForm() {

    const [yourName, setYourName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [messageType, setMessageType] = useState("");

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case "yourName":
                setYourName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "comment":
                setComment(e.target.value);
                break;
            default:

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(yourName, email, comment);
        if (yourName === "" || email === "" || comment === "") {
            setFormMessage("Please fill approprait input. Thank you.");
            setMessageType("error");
        }
        if (yourName !== "" && email !== "" && comment !== "") {
            setFormMessage("Thank you. We will keep in touch.");
            setMessageType("success");
            setYourName("");
            setEmail("");
            setComment("");
        }
    }

    return (
        <div className="CommentForm">
            <div className="Title">What do you think?</div>
            <div className="Content">
                <div className={messageType === "success" ? "SuccessMessage" : "ErrorMessage"}>{formMessage}</div>
                <form onSubmit={handleSubmit}>                
                    <input type="text" name="yourName" placeholder="Your Name" value={yourName} onChange={handleInputChange} />
                    <input type="text" name="email" placeholder="Email" value={email} onChange={handleInputChange} />
                    <textarea placeholder="Comment" rows="10" name="comment" value={comment} onChange={handleInputChange}></textarea>
                    <br />
                    <input type="submit" value="Submit" />                
                </form>
            </div>
        </div>
    )
}

export default CommentForm;