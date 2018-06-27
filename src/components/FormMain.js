import React, {Compnent} from 'react';

import FormSectionOne from './PersonalInformation';
import FormSectionTwo from './SkillsAndLocation';
import FormSectionThree from './Portfolio';

const FormMain = props => {
    return(
        <div className='header-container'>
			<h1>Main Form</h1>
            <FormSectionOne />
            <FormSectionTwo />
            <FormSectionThree />            
		</div>
    );
}
export default FormMain;