import React from 'react';

const Portfolio = props => {
    return(
        <div>
			<div>
					<h3 className="alignleft">3. Portfolio</h3>
					<hr className="myline" />
			</div>
			
			<div>
					<h5 className="alignleft">Prove you're IBM's great designer by shwoing us who you are. What you have done. How you think. tell us your story.</h5>
	
			</div>

			<div>
					<input className={props.fportfolioLinkClass} id="fportfolioLink" type="text" placeholder="Portfolio link*"
						   onChange={props.handleFormChange}
						   value={props.fportfolioLink}
					/>

					<textarea id="fsubject" name="fsubject" rows="3" cols="50"  className={props.fsubjectClass}
							  placeholder="Anything else(another link, availablity, etc..)?"
							  onChange={props.handleFormChange}
							  value={props.fsubject}   
					 >
					
					</textarea>
					<button><a href="/SkillsAndLocation">BACK</a></button>
					<input  id="mySubmit" type="submit" value="Submit"
							onClick={props.handleSubmit} 
					/>
					 
			</div>
		</div>
    );
}
export default Portfolio;