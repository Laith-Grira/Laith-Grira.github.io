import './Contact.css';
import { useState } from "react";
import swal from 'sweetalert';
import { Trans, useTranslation } from 'react-i18next';



const Contact = () => {

    // Email variables
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [emailMsg, setEmailMsg] = useState([]);

    // Tweet variables
    const [twitterID, setTwitterID] = useState([]);
    const [twitterMsg, setTwitterMsg] = useState([]);

    const { t, i18n } = useTranslation();

    return ( 
        <div className="main-contact mt-4">
            <h1>{t("contact.title")}</h1>
            <div className="quick-contact mt-5">
                <h4>{t("contact.email-section.title")}</h4>
                <p>{t("contact.email-section.description")}</p>
                <form action="#" method="post">
                    <input type="text" 
                            placeholder={t("contact.email-section.name")}
                            className="mb-2"
                            onChange={ e => setName(e.target.value)}/>
                    <br />
                    <input type="text" 
                            placeholder={t("contact.email-section.email")}
                            className="mb-2"
                            onChange={ e => setEmail(e.target.value)}/>
                    <br />
                    <textarea name="msg" 
                                id="msg" 
                                cols="30" 
                                rows="10" 
                                placeholder={t("contact.email-section.message")}
                                onChange={ e => setEmailMsg(e.target.value)}></textarea>
                                <br/>
                    <button type="button" 
                            className="btn btn-secondary send-email"
                            onClick={ () => {
                                if (name == '') {
                                    swal(
                                        t("contact.alerts.email-alerts.invalid-name.title"),
                                        t("contact.alerts.email-alerts.invalid-name.desc"),
                                        "error");
                                } else if (email == ''){
                                    swal(
                                        t("contact.alerts.email-alerts.invalid-email.title"),
                                        t("contact.alerts.email-alerts.invalid-email.desc"),
                                        "error");
                                } else if (emailMsg == '') {
                                    swal(
                                        t("contact.alerts.email-alerts.invalid-message.title"),
                                        t("contact.alerts.email-alerts.invalid-message.desc"),
                                        "error");
                                } else {
                                    swal(
                                        t("contact.alerts.email-alerts.success.title"),
                                        t("contact.alerts.email-alerts.success.desc"),
                                        "success");
                                }
                            }}
                            ><b>{t("contact.email-section.send")}</b></button>
                </form>
            </div>
            <div className="quick-contact">
            <h4>{t("contact.tweet-section.title")}</h4>
                <p>{t("contact.tweet-section.description")}</p>
                <form action="#" method="post">
                    <input type="text" 
                            placeholder={t("contact.tweet-section.example")}
                            title="Insert your twitter id here." 
                            className="mb-2"
                            onChange={ e => setTwitterID(e.target.value)}/>
                            <br />
                    <textarea name="msg" 
                                id="msg" 
                                cols="30" 
                                rows="5" 
                                placeholder={t("contact.tweet-section.message")}
                                onChange={ e => setTwitterMsg(e.target.value)}
                                ></textarea><br/>
                    <button type="button" 
                            className="btn btn-secondary send-email"
                            onClick={() => {
                                if (twitterID == '') {
                                    swal(
                                        t("contact.alerts.twitter-alerts.empty-id.title"),
                                        t("contact.alerts.twitter-alerts.empty-id.desc"),
                                        "error");
                                } else if (twitterID[0] !="@"){
                                    swal(
                                        t("contact.alerts.twitter-alerts.invalid-id.title"),
                                        t("contact.alerts.twitter-alerts.invalid-id.desc"),
                                        "error");
                                } else if (twitterMsg == '') {
                                    swal(
                                        t("contact.alerts.twitter-alerts.invalid-message.title"),
                                        t("contact.alerts.twitter-alerts.invalid-message.desc"),
                                        "error");
                                } else {
                                    swal(
                                        t("contact.alerts.twitter-alerts.success.title"),
                                        t("contact.alerts.twitter-alerts.success.desc"),
                                        "success");
                                }
                            }}><b>{t("contact.tweet-section.tweet")}</b></button>
                </form>
            </div>
        </div>
     );
}
 
export default Contact;