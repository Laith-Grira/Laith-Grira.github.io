import './Tickets.css';
import { useState } from "react";
import swal from 'sweetalert';
import { useTranslation } from 'react-i18next';


// Import icons
import mastercard from '../../../assets/icons/mastercard.png';
import cvv from '../../../assets/icons/cvv.png';
import visa from '../../../assets/icons/visa.png';
import info from '../../../assets/icons/info.png';

const Tickets = () => {

    const { t, i18n } = useTranslation();

    // personal info variables
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    // variables for validation
    const [matchTicketValid, setMatchTicketValid] = useState([]);
    const [seatValid, setSeatValid] = useState([]);
    const [expiryDateValid, setExpiryDateValid] = useState([]);
    const [creditNumberValid, setCreditNumberValid] = useState([]);
    const [codeValid, setCodeValid]  = useState([]);

    return ( 
        <div className="main-tickets mt-4 mb-5">
            <h1>{t("tickets.title")}</h1>
            <form action="#" method="post">
                <div className="ticket-info pt-5">
                    <div className="match-day">
                        <h3>1 - {t("tickets.matchday.title")}</h3>
                        <div className="match-info">
                            <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => { setMatchTicketValid('true')}}>
                                <option value="" disabled selected hidden>{t("tickets.matchday.select")}</option>
                                <option value="OUFC-HAL"> Ottawa United --- Halifax FC</option>
                                <option value="YUFC-OUFC"> York United --- Ottawa United</option>
                                <option value="FCE-OUFC"> FC Edmonton --- Ottawa United</option>
                                <option value="OUFC-FCF"> Ottawa United --- FC Forge</option>
                            </select>
                            <div title={t("tickets.infos.match-info")}>
                                <img src={info} alt="info" className="info-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="match-seat mt-5">
                        <h3>2 - {t("tickets.seat.seat")}</h3>
                        <div className="match-info">
                            <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => { setSeatValid('true') }}>
                                <option value="" disabled selected hidden>{t("tickets.seat.select")}</option>
                                <option value="cat1"> $30 - CAT 1</option>
                                <option value="cat2"> $55 - CAT 2</option>
                                <option value="cat3"> $105 - CAT 3 </option>
                                <option value="pre"> $450 - {t("tickets.seat.premium")}</option>
                            </select>
                            <div title={t("tickets.infos.seat-info")}>
                                <img src={info} alt="info" className="info-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="personal-info mt-5">
                        <h3>3 - {t("tickets.info.title")}</h3>
                        <input type="text" 
                                placeholder={t("tickets.info.name")}
                                className="input-style mb-2" 
                                onChange={ e => setName('true') }/>
                        <br />
                        <input type="text" 
                                placeholder={t("tickets.info.email")}
                                className="input-style mb-2" 
                                onChange={  e => setEmail('true') }/>
                        <br />
                    </div>
                    <div className="payment mt-5">
                        <h3>4 - {t("tickets.payment.title")}</h3>
                        
                        <div className="credit-info">
                            <p><b>{t("tickets.payment.card")}:</b> <br />
                                <input placeholder="XXXX XXXX XXXX XXXX" 
                                                    type="text" id="debit" 
                                                    onChange={ e => {
                                                        const reg = /^[0-9\b]+$/;

                                                        let credit = e.target.value;

                                                        if ((!(credit === '') && !reg.test(e.target.value)) || (credit.length > 16)) {
                                                            const valid = credit;
                                                            e.target.value = valid.slice(0, -1);
                                                            credit = e.target.value;
                                                        }

                                                        if (credit.length === 16) {
                                                            setCreditNumberValid('true');
                                                        } else {
                                                            setCreditNumberValid('false');
                                                        }

                                                    } }/>
                                                    <img src={mastercard} alt="logo"/>
                                                    <img src={visa} alt="logo" />
                                                </p>
                            <div className="card-info">
                            <div><b>{t("tickets.payment.date")}:</b> <br />
                                <input type="text" 
                                        id="dateInputCredit" 
                                        placeholder={t("tickets.payment.date-format")} 
                                        onChange= {
                                            e => {
                                                const reg = /^[0-9\b]+$/;
                                                const date = e.target.value;
                                                if (date.length === 7) {
                                                    const month = date.substring(0,2);
                                                    const year = date.substring(3,8);

                                                    if (!reg.test(month) || !reg.test(year) || (date[2] !== '/')) {
                                                        swal(
                                                            t("tickets.alerts.expiry-date.wrong-format.title"),
                                                            t("tickets.alerts.expiry-date.wrong-format.desc"),
                                                            "warning");
                                                    } else {
                                                        setExpiryDateValid('false');
                                                        if (parseInt(month) <= 0 ) {
                                                            swal(
                                                                t("tickets.alerts.expiry-date.month-smaller.title"),
                                                                t("tickets.alerts.expiry-date.month-smaller.desc"),
                                                                "warning");
                                                        } else if(parseInt(month)>12) {
                                                            swal(
                                                                t("tickets.alerts.expiry-date.month-bigger.title"),
                                                                t("tickets.alerts.expiry-date.month-bigger.desc"),
                                                                "warning");
                                                        } else if (parseInt(year) < 2021) {
                                                            swal(
                                                                t("tickets.alerts.expiry-date.year-smaller.title"),
                                                                t("tickets.alerts.expiry-date.year-smaller.desc"),
                                                                "warning");
                                                        } else if(parseInt(year)>2050) {
                                                            swal(
                                                                t("tickets.alerts.expiry-date.year-bigger.title"),
                                                                t("tickets.alerts.expiry-date.year-bigger.desc"),
                                                                "warning");
                                                        } else {
                                                            setExpiryDateValid('true');
                                                        }
                                                    }
                                                }
                                                if (date.length > 7) {
                                                    const valid = date;
                                                    e.target.value = valid.slice(0, -1);
                                                }
                                            }
                                        }
                                        /></div>
                            <div><b>{t("tickets.payment.cvv")}:</b> <br />
                                <input placeholder="XXX" 
                                        type="text" 
                                        id="code" 
                                        onChange={ e => {
                                            const reg = /^[0-9\b]+$/;
                                            let cvv = e.target.value;
                                            if ((!(cvv === '') && !reg.test(e.target.value)) || (cvv.length > 3)) {
                                                const valid = cvv;
                                                e.target.value = valid.slice(0, -1);
                                                cvv = e.target.value;
                                            }

                                            if (cvv.length === 3) {
                                                setCodeValid('true');
                                            } else {
                                                setCodeValid('false');
                                            }
                                        } }
                                        /> <img src={cvv} alt="logo"/></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <button type="button" 
                                className="btn btn-secondary submit-info mb-5"
                                onClick = {
                                    () => {
                                        if (matchTicketValid !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.no-ticket.title"),
                                                t("tickets.alerts.submit-ticket.no-ticket.desc"),
                                                "error");
                                        } else if (seatValid !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.no-seat.title"),
                                                t("tickets.alerts.submit-ticket.no-seat.desc"),
                                                "error");
                                        } else if (name !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.invalid-name.title"),
                                                t("tickets.alerts.submit-ticket.invalid-name.desc"),
                                                "error");
                                        } else if (email !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.invalid-email.title"),
                                                t("tickets.alerts.submit-ticket.invalid-email.desc"),
                                                "error");
                                        } else if (creditNumberValid !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.invalid-credit.title"),
                                                t("tickets.alerts.submit-ticket.invalid-credit.desc"),
                                                "error");
                                        } else if (expiryDateValid !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.invalid-date.title"),
                                                t("tickets.alerts.submit-ticket.invalid-date.desc"),
                                                "error");
                                        } else if (codeValid !== 'true') {
                                            swal(
                                                t("tickets.alerts.submit-ticket.invalid-cvv.title"),
                                                t("tickets.alerts.submit-ticket.invalid-cvv.desc"),
                                                "error");
                                        } else {
                                            swal(
                                                t("tickets.alerts.submit-ticket.success.title"),
                                                t("tickets.alerts.submit-ticket.success.desc"),
                                                "success");
                                        }
                                    }
                                }
                                ><b>{t("tickets.buy")}</b></button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Tickets;