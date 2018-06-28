import React from 'react';

const SkillsAndLocation = props => {
    return(
        <div>
			<div>            
				<h3 className="alignleft">2. Skills and location</h3>
				<hr className="myline" />
			</div>
			
			<div>
				<h5 className="alignleft">Which is you primary design desipline?</h5>
			</div>
			
			<div className="contentJustifier divToleft">				
				<input type="radio" id='r1' value="r1" name="desipline" checked={props.radioBtnValue === 'r1'} onChange={props.handleRadioBtns}  />
				<label className="customlabel" htmlFor="r1" >Design Research</label>

				<input type="radio" id='r2' value="r2" name="desipline" checked={props.radioBtnValue ==='r2'} onChange={props.handleRadioBtns}  />
				<label className="customlabel" htmlFor="r2" >Visual Design</label>
						
				<input type="radio" id='r3' value="r3" name="desipline" checked={props.radioBtnValue === 'r3'} onChange={props.handleRadioBtns}  />
				<label className="customlabel" htmlFor="r3">UX Design</label>
							
				<input type="radio" id='r4' value="r4" name="desipline" checked={props.radioBtnValue === 'r4'} onChange={props.handleRadioBtns}  />
				<label className="customlabel" htmlFor="r4">Front-end Dev</label>
			</div>

			<div className="contentJustifier">
				
				
				<div className="checkContainer">

					<div>
						<h5 className="alignleft2">Which is you primary design desipline?</h5>	
				    </div>

					<div className="wrapperchek">
						<input type="checkbox" id='check1' name="checkObj1" checked={props.checkObj1.check1 === 'check1'} onChange={props.handleCheck} />
						<label className="customlabel1"  htmlFor="check1">Visual Design</label>
					</div>	

					<div className="wrapperchek">	
						<input type="checkbox" id='check2' name="checkObj1" checked={props.checkObj1.check2 === 'check2'} onChange={props.handleCheck} />
						<label className="customlabel1" htmlFor="check2">UX Design</label>
					</div>
													
					<div className="wrapperchek">
						<input type="checkbox" id='check3' name="checkObj1" checked={props.checkObj1.check3 === 'check3'} onChange={props.handleCheck} />
						<label className="customlabel1" htmlFor="check3">Front-end Dev</label>
					</div>
				
						
				</div>
				
				<div className="checkContainer">
						<div>
							<h5 className="alignleft">Which is you primary design desipline?</h5>	
						</div>
			
						<div>
							<h6 className="alignleft">Which is you primary design desipline?</h6>	
						</div>
			

						<div className="wrapperchek">
							<input type="checkbox" id='checkCity1' name="checkObj2" 
								   checked={props.checkObj2.checkCity1 === 'checkCity1'} onChange={props.handleCheck}/>
							<label className="customlabel1"  htmlFor="checkCity1">New York</label>
						</div>	

						<div className="wrapperchek">	
							<input type="checkbox" id='checkCity2' name="checkObj2"
							       checked={props.checkObj2.checkCity2 === 'checkCity2'} onChange={props.handleCheck} />
							<label className="customlabel1" htmlFor="checkCity2">Toronto</label>
						</div>
							
						
						<div className="wrapperchek">
							<input type="checkbox" id='checkCity3' name="checkObj2" 
							       checked={props.checkObj2.checkCity3 === 'checkCity3'} onChange={props.handleCheck}  />
							<label className="customlabel1" htmlFor="checkCity3">Helsinki</label>
						</div>
				
						<div className="wrapperchek">
								<input type="checkbox" id='checkCity4' name="checkObj2" 
								       checked={props.checkObj2.checkCity4 === 'checkCity4'} onChange={props.handleCheck} />
								<label className="customlabel1" htmlFor="checkCity4">Marrakech</label>
						</div>

						<div className="wrapperchek">
									<input type="checkbox" id='checkCity5' name="checkObj2" 
										   checked={props.checkObj2.checkCity5 === 'checkCity5'} onChange={props.handleCheck} />
									<label className="customlabel1" htmlFor="checkCity5">Cairo</label>
						</div>

						<div className="wrapperchek">
									<input type="checkbox" id='checkCity6' name="checkObj2" 
									       checked={props.checkObj2.checkCity6 === 'checkCity6'} onChange={props.handleCheck} />
									<label className="customlabel1" htmlFor="checkCity6">Tunnis</label>
						</div>		
				</div>

			</div>
		</div>
    );
}
export default SkillsAndLocation;