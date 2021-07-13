import './Contact.css';
import { useState } from "react";
import swal from 'sweetalert';



const Contact = () => {

    // Email variables
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [emailMsg, setEmailMsg] = useState([]);

    // Tweet variables
    const [twitterID, setTwitterID] = useState([]);
    const [twitterMsg, setTwitterMsg] = useState([]);

    return ( 
        <div className="main-contact mt-4">
            <h1>Contact page</h1>
            <div className="quick-contact mt-5">
                <h4>Contact The Team managment</h4>
                <p>If you have any questions about our trials for the youth team, or want to be a member 
                    in our fanbase to become the ultimate fan, with many more, please fill out your
                    information and send us an email defining your enquiry. (We respond within 3 business days)
                </p>
                <form action="#" method="post">
                    <input type="text" 
                            placeholder="Full Name" 
                            className="mb-2"
                            onChange={ e => setName(e.target.value)}/>
                    <br />
                    <input type="text" 
                            placeholder="Email Address" 
                            className="mb-2"
                            onChange={ e => setEmail(e.target.value)}/>
                    <br />
                    <textarea name="msg" 
                                id="msg" 
                                cols="30" 
                                rows="10" 
                                placeholder="Email message..."
                                onChange={ e => setEmailMsg(e.target.value)}></textarea>
                                <br/>
                    <button type="button" 
                            className="btn btn-secondary send-email"
                            onClick={ () => {
                                if (name == '') {
                                    swal("Invalid Name", "Please insert your Full Name in the requested field.", "error");
                                } else if (email == ''){
                                    swal("Invalid Email", "Please insert your Full Email in the requested field.", "error");
                                } else if (emailMsg == '') {
                                    swal("Invalid message in the email", "Please insert your message in the requested field.", "error");
                                } else {
                                    swal("Success!!", "Email is successfully sent to our team managment.", "success");
                                }
                            }}
                            ><b>Send Email</b></button>
                </form>
            </div>
            <div className="quick-contact">
            <h4>Poste In Our Twitter Profile</h4>
                <p>Post a tweet in our official twitter account to share your opinions or send a feedback
                    to our team. (Please note that every tweet is being monitred by our admin).
                </p>
                <form action="#" method="post">
                    <input type="text" 
                            placeholder="@example" 
                            title="Insert your twitter id here." 
                            className="mb-2"
                            onChange={ e => setTwitterID(e.target.value)}/>
                            <br />
                    <textarea name="msg" 
                                id="msg" 
                                cols="30" 
                                rows="5" 
                                placeholder="Message..."
                                onChange={ e => setTwitterMsg(e.target.value)}
                                ></textarea><br/>
                    <button type="button" 
                            className="btn btn-secondary send-email"
                            onClick={() => {
                                if (twitterID == '') {
                                    swal("Empty Twitter ID", "Please insert your twitter ID in the requested field.", "error");
                                } else if (twitterID[0] !="@"){
                                    swal("Invalid Twitter ID", "Please make sure you add the '@' at the begining of your twitter ID.", "error");
                                } else if (twitterMsg == '') {
                                    swal("Invalid message", "Please enter a message in the text area.", "error");
                                } else {
                                    swal("Success!!", "Tweet is successfully sent to our twitter page.", "success");
                                }
                            }}><b>Tweet</b></button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;