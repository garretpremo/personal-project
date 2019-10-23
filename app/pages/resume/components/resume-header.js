import React, {Component} from "react";

export default class ResumeHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personalEmail:  'garretpremo@gmail.com',
            phoneNumber:    '(518) 598-2818',
            addressLineOne: '4313 New York Highway 150',
            addressLineTwo: 'West Sand Lake, NY 12196'
        };
    }

    render() {
        return (
            <header>
                <div className="name-and-title">
                    <h1>Garret Premo</h1>
                    <h3>Full Stack Developer</h3>
                </div>
                <div className="contact-details">
                    
                    {/* Email address */}
                    <i className="fa fa-address-card"></i>
                    <span>{this.state.personalEmail}</span>

                    {/* Phone number */}
                    <i className="fa fa-phone"></i>
                    <span>{this.state.phoneNumber}</span>

                    {/* Address */}
                    <i className="fa fa-map-pin"></i>
                    <div className="address">
                        <span>{this.state.addressLineOne}</span>
                        <span>{this.state.addressLineTwo}</span>
                    </div>
                </div>
            </header>
        );
    }
}