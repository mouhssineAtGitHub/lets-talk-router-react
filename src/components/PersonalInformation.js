import React from 'react';

const PersonalInformation = props => {
    return(
        <div>
			<div>
				<h3 className="alignleft">1. Personal information</h3>
				<hr className="myline" />
			</div>
	
			<div className="contentJustifier">
				<input  className={props.fnameClass} id="fname" name="fname" type="text" placeholder="Fullname*" minLength="2" maxLength="60"
						onChange={props.handleFormChange1}
						value={props.fname}
				/>
				<input  className={props.fphoneClass} id="fphone" name="fphone" type="text" placeholder="Phone* (0-XXX-XXX-XXX)"
						onChange={props.handleFormChange1}
						value={props.fphone}								
				/>
			</div>

			<div className="">
					<input  className={props.femail1Class} id="femail1" type="text" placeholder="Email*"
							onChange={props.handleFormChange1}
							value={props.femail1}
					/>

					<input className={props.femail2Class} id="femail2" type="text" placeholder="Re-enter email*"
							onChange={props.handleFormChange1}
							value={props.femail2}
					/>

					<input className={props.faddress1Class} id="faddress1" type="text" placeholder="Address*" maxLength="100"
							onChange={props.handleFormChange1}
							value={props.faddress1}
					/>

					<input  className={props.faddress2Class} id="faddress2" type="text" placeholder="" minLength="1" maxLength="100"
							onChange={props.handleFormChange1}
							value={props.faddress2}
					/>
			</div>
			
			<div className="contentJustifier">
					<input  className={props.fcityClass} id="fcity" type="text" placeholder="City*" 
							minLength="1" maxLength="50" 
							onChange={props.handleFormChange1}
							value={props.fcity}
					/>

					<input  className={props.fstateClass} id="fstate" type="text" placeholder="State" minLength="0" maxLength="50"
							onChange={props.handleFormChange1}
							value={props.fstate}					
					/>

					<input  className={props.fcountryRegionClass} id="fcountryRegion" type="text" placeholder="Country/Region*" minLength="1" maxLength="50"
							onChange={props.handleFormChange1}
							value={props.fcountryRegion}
					/>

					<input  className={props.fzipPostalCodeClass} id="fzipPostalCode" type="text" placeholder="Zip/Postal Code"
							minLength="0" maxLength="10"
							onChange={props.handleFormChange1}
							value={props.fzipPostalCode}
					/>
			</div>

			<div>
					<input className={props.fhearAboutUsClass} id="fhearAboutUs" type="text" placeholder="How did you here about us"
						   minLength="0" maxLength="100"
						   onChange={props.handleFormChange1}
						   value={props.fhearAboutUs}
					/>
			</div>
		</div>
    );
}
export default PersonalInformation;