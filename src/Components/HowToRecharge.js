import React from "react";
import "./Howrecharge.css";
import MyAkashApp from "./MyAkashApp";
const HowToRecharge = () => {
    return (
        <div className="container">
            <div className="how-to-recharge-container">
            <h1>How To Recharge</h1>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">My AKash App</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Nexus Play</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">bKash App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">bKash USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-iPay" type="button" role="tab" aria-controls="v-pills-iPay" aria-selected="false">iPay</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Rocket-App" type="button" role="tab" aria-controls="v-pills-Rocket-App" aria-selected="false">Rocket App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Rocket-USSD" type="button" role="tab" aria-controls="v-pills-Rocket-USSD" aria-selected="false">Rocket USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-EBL-SKY" type="button" role="tab" aria-controls="v-pills-EBL-SKY" aria-selected="false">EBL SKY</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Recharge" type="button" role="tab" aria-controls="v-pills-Recharge" aria-selected="false">Recharge</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gpay-App" type="button" role="tab" aria-controls="v-pills-gpay-App" aria-selected="false">gpay App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gpay-USSD" type="button" role="tab" aria-controls="v-pills-gpay-USSD" aria-selected="false">gpay USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-SureCash-App" type="button" role="tab" aria-controls="v-pills-SureCash-App" aria-selected="false">SureCash App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-SureCash-USSD" type="button" role="tab" aria-controls="v-pills-SureCash-USSD" aria-selected="false">SureCash USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-NAGAD-App" type="button" role="tab" aria-controls="v-pills-NAGAD-App" aria-selected="false">NAGAD App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-NAGAD-USSD" type="button" role="tab" aria-controls="v-pills-NAGAD-USSD" aria-selected="false">NAGAD USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-NRBC-Planet-App" type="button" role="tab" aria-controls="v-pills-NRBC-Planet-App" aria-selected="false">NRBC Planet App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-CashBaba" type="button" role="tab" aria-controls="v-pills-CashBaba" aria-selected="false">CashBaba</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Standard-Chartered-Bank " type="button" role="tab" aria-controls="v-pills-Standard-Chartered-Bank " aria-selected="false">Standard Chartered Bank </button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TAP-App " type="button" role="tab" aria-controls="v-pills-TAP-App " aria-selected="false">TAP App </button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-TAP-USSD" type="button" role="tab" aria-controls="v-pills-TAP-USSD" aria-selected="false">TAP USSD</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Upay-App" type="button" role="tab" aria-controls="v-pills-Upay-App" aria-selected="false">Upay App</button>
                        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-City-Touch" type="button" role="tab" aria-controls="v-pills-City-Touch" aria-selected="false">City Touch</button>
                    </div>
                    <div>
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                           <MyAkashApp/>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-iPay" role="tabpanel" aria-labelledby="v-pills-iPay-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-Rocket-App" role="tabpanel" aria-labelledby="v-pills-Rocket-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-Rocket-USSD" role="tabpanel" aria-labelledby="v-pills-Rocket-USSD-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-EBL-SKY" role="tabpanel" aria-labelledby="v-pills-EBL-SKY-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-Recharge" role="tabpanel" aria-labelledby="v-pills-Recharge-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-gpay-App" role="tabpanel" aria-labelledby="v-pills-gpay-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                        <div className="tab-pane fade" id="v-pills-gpay-USSD" role="tabpanel" aria-labelledby="v-pills-gpay-USSD-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-SureCash-App" role="tabpanel" aria-labelledby="v-pills-SureCash-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-SureCash-USSD" role="tabpanel" aria-labelledby="v-pills-SureCash-USSD-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-NAGAD-App" role="tabpanel" aria-labelledby="v-pills-NAGAD-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                         <div className="tab-pane fade" id="v-pills-NAGAD-USSD" role="tabpanel" aria-labelledby="v-pills-NAGAD-USSD-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-NRBC-Planet-App" role="tabpanel" aria-labelledby="v-pills-NRBC-Planet-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-CashBaba" role="tabpanel" aria-labelledby="v-pills-CashBaba-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-Standard-Chartered-Bank" role="tabpanel" aria-labelledby="v-pills-Standard-Chartered-Bank-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-TAP-App" role="tabpanel" aria-labelledby="v-pills-TAP-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-TAP-USSD" role="tabpanel" aria-labelledby="v-pills-TAP-USSD-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-Upay-App" role="tabpanel" aria-labelledby="v-pills-Upay-App-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>

                        <div className="tab-pane fade" id="v-pills-City-Touch" role="tabpanel" aria-labelledby="v-pills-City-Touch-tab" tabindex="0">
                            This is some placeholder content the Messages tab's associated content. Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classNamees to control the 
                            content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToRecharge;
