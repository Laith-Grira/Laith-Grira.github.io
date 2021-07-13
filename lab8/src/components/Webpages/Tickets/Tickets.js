import './Tickets.css';
import { useState } from "react";
import swal from 'sweetalert';


// Import icons
import mastercard from '../../../assets/icons/mastercard.png';
import cvv from '../../../assets/icons/cvv.png';
import visa from '../../../assets/icons/visa.png';
import info from '../../../assets/icons/info.png';

const Tickets = () => {

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
            <h1>Buy a Game Ticket</h1>
            <form action="#" method="post">
                <div className="ticket-info pt-5">
                    <div className="match-day">
                        <h3>1 - Match Day</h3>
                        <div className="match-info">
                            <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => { setMatchTicketValid('true')}}>
                                <option value="" disabled selected hidden>Select Match Day</option>
                                <option value="OUFC-HAL"> Ottawa United --- Halifax FC</option>
                                <option value="YUFC-OUFC"> York United --- Ottawa United</option>
                                <option value="FCE-OUFC"> FC Edmonton --- Ottawa United</option>
                                <option value="OUFC-FCF"> Ottawa United --- FC Forge</option>
                            </select>
                            <div title="Choose the game that you want to watch">
                                <img src={info} alt="info" className="info-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="match-seat mt-5">
                        <h3>2 - Seat</h3>
                        <div className="match-info">
                            <select id="dietSelect" name="dietSelect" className="input-style" onChange={ e => { setSeatValid('true') }}>
                                <option value="" disabled selected hidden>Select Your Seat</option>
                                <option value="cat1"> $30 - CAT 1</option>
                                <option value="cat2"> $55 - CAT 2</option>
                                <option value="cat3"> $105 - CAT 3 </option>
                                <option value="pre"> $450 - Premium</option>
                            </select>
                            <div title="Choose where you want to sit in the stadium">
                                <img src={info} alt="info" className="info-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="personal-info mt-5">
                        <h3>3 - Personal Info</h3>
                        <input type="text" 
                                placeholder="Full Name" 
                                className="input-style mb-2" 
                                onChange={ e => setName('true') }/>
                        <br />
                        <input type="text" 
                                placeholder="Email Address" 
                                className="input-style mb-2" 
                                onChange={  e => setEmail('true') }/>
                        <br />
                    </div>
                    <div className="payment mt-5">
                        <h3>4 - Payment</h3>
                        
                        <div className="credit-info">
                            <p><b>Credit Card:</b> <br />
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
                            <div><b>Expiry Date</b>: <br />
                                <input type="text" 
                                        id="dateInputCredit" 
                                        placeholder="MM/YYYY" 
                                        onChange= {
                                            e => {
                                                const reg = /^[0-9\b]+$/;
                                                const date = e.target.value;
                                                if (date.length === 7) {
                                                    const month = date.substring(0,2);
                                                    const year = date.substring(3,8);

                                                    if (!reg.test(month) || !reg.test(year) || (date[2] !== '/')) {
                                                        swal("Wrong date format", "Wrong Expiry Date Format in your credit card expiry date! Please follow the MM/YYYY format.", "warning");
                                                    } else {
                                                        setExpiryDateValid('false');
                                                        if (parseInt(month) < 0 ) {
                                                            swal("Invalid Month", "Month can not be les than 0 in your credit card expiry date.", "warning");
                                                        } else if(parseInt(month)>12) {
                                                            swal("Invalid Month", "Month can not be bigger than 12 in your credit card expiry date.", "warning");
                                                        } else if (parseInt(year) < 2021) {
                                                            swal("Invalid Year", "Year can not be less than 2021 in your credit card expiry date.", "warning");
                                                        } else if(parseInt(year)>2050) {
                                                            swal("Invalid Year", "Year can not exceed 2050 in your credit card expiry date.", "warning");
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
                            <div><b>CVV:</b> <br />
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
                                            swal("No ticket was selected", "Please make sure to choose your match day ticket in Section 1.", "error");
                                        } else if (seatValid !== 'true') {
                                            swal("No seat was selected", "Please make sure to choose your seat in Section 2.", "error");
                                        } else if (name !== 'true') {
                                            swal("Invalid name", "Please make sure to enter your name in Section 3.", "error");
                                        } else if (email !== 'true') {
                                            swal("Invalid email", "Please make sure to enter your email in Section 3.", "error");
                                        } else if (creditNumberValid !== 'true') {
                                            swal("Invalid credit card number", "Please check your credit card number in Section 4.", "error");
                                        } else if (expiryDateValid !== 'true') {
                                            swal("Invalid expiry date for credit card", "Please check your credit card expiry date in Section 4.", "error");
                                        } else if (codeValid !== 'true') {
                                            swal("Invalid CVV for credit card", "Please check your CVV code in Section 4.", "error");
                                        } else {
                                            swal("Success!!", "You hav successfully bought your ticket.", "success");
                                        }
                                    }
                                }
                                ><b>BUY</b></button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Tickets;