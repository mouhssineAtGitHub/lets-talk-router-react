import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link, NavLink,Redirect,Prompt,Switch} from 'react-router-dom';

/* Importation of the components */
import FormHeader from './components/FormHeader';
import FormFooter from './components/FormFooter';
import PersonalInformation from './components/PersonalInformation';
import SkillsAndLocation from './components/SkillsAndLocation';
import Portfolio from './components/Portfolio';

/* Importation of the stylesheet */
import './App.css';

/* Create the Regex for inputs */
const regex={
  'fname':/^[a-zA-Z][ a-z|A-Z]{1,49}$/,
  'fphone' : /^[0][-][0-9]{3}[-][0-9]{3}[-][0-9]{3}$/,
  'femail1' : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'femail2' : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  'faddress1' : /^[a-zA-Z0-9][ a-z|A-Z|0-9-]{1,99}$/,
  'faddress2' : /^[a-zA-Z0-9][ a-z|A-Z|0-9-]{1,99}$/,
  'fcity' : /^[a-zA-Z][ a-z|A-Z]{1,49}$/,
  'fstate' : /^[a-zA-Z][ a-z|A-Z]{1,49}$/,
  'fcountryRegion' : /^[a-zA-Z][ a-z|A-Z]{1,49}$/,
  'fzipPostalCode' : /^[0-9]{5}$/,
  'fhearAboutUs' : /^[a-zA-Z][ a-z|A-Z|0-9]{1,99}$/,
  'fportfolioLink' : /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
  'fsubject' : /^[ a-zA-Z|A-Z|0-9]{0,150}$/
};


/* Parent component starts here */
class App extends Component {

  state = {
      fname : '', fnameClass:'inputTxt_2',
      fphone : '', fphoneClass:'inputTxt_3',
      femail1:'', femail1Class:'inputTxt_2',
      femail2:'', femail2Class:'inputTxt_2',
      faddress1:'', faddress1Class:'inputTxt_1',
      faddress2:'', faddress2Class:'inputTxt_1',
      fcity:'', fcityClass:'inputTxt_3',
      fstate:'', fstateClass:'inputTxt_3',
      fcountryRegion:'', fcountryRegionClass:'inputTxt_3', 
      fzipPostalCode:'', fzipPostalCodeClass:'inputTxt_3',
      fhearAboutUs:'', fhearAboutUsClass:'inputTxt_1',
      fportfolioLink:'', fportfolioLinkClass:'inputTxt_3',
      fsubject:'', fsubjectClass:'inputTxt_1',
      radioBtnValue: 'r1',
      checkObj1: {check1:'check1', check2:'', check3:''},
      checkObj2: {checkCity1:'checkCity1', checkCity2:'', checkCity3:'',checkCity4:'', checkCity5:'', checkCity6:''}
   }
  
  handleRadioBtns = e =>{
    this.setState({radioBtnValue: e.target.value})
  }

  handleCheck = e =>{
    const myObj= this.state[e.target.name];
    const myfield=e.target.id;
    myObj[myfield]= this.state[e.target.name][myfield] === myfield? '':myfield;
    this.setState({[e.target.name]:myObj});
  }

  handleFormChange1 = e =>{
    let myRegex = null;
    const value=e.target.value;
    const item=e.target.id;
    const itemClass=e.target.id + 'Class';
    let itemClassValue='';
    const regexName='reg_'+item;
    if(['faddress1','faddress2','fhearAboutUs', 'fportfolioLink'].includes(item) ) itemClassValue='inputTxt_1'; 
    if(['fname', 'femail1','femail2'].includes(item)) itemClassValue='inputTxt_2'; 
    if(['fphone','fcity','fstate','fcountryRegion','fzipPostalCode'].includes(item)){itemClassValue='inputTxt_3';
  }
    if(!value || value==='' || value===' '){
      this.setState({[item] :value, [itemClass]:'inputTxt_2'});
    }else{
      myRegex=[regexName];
      this.setState({[item] : value, [itemClass]: regex[item].test(value)? itemClassValue + ' valid': itemClassValue+' invalid invalid2'});   
    }       
  }


handleSubmit = e =>{
  {
    e.preventDefault();
    const { 
            fname,fphone,femail1,femail2,faddress1,faddress2, fcity,fstate,fcountryRegion, 
            fzipPostalCode,fhearAboutUs,fportfolioLink, fsubject,checkObj1, checkObj2
          } = this.state;
    let errorMessage = [];
    if (!fname || fname==='' || fname===' ' || !regex.fname.test(fname)){
      errorMessage.push("Name: check the name input!");                
    }

    if (!fphone || fphone==='' || fphone===' ' || !regex.fphone.test(fphone)){
      errorMessage.push("Phone: Check the Phone input!");       
    }

    if (!femail1 || femail1==='' || femail1===' ' || !regex.femail1.test(femail1)){
      errorMessage.push("Email-1: Check the Email-1 input!");       
    }

    if (!femail2 || femail2==='' || femail2===' ' || !regex.femail2.test(femail2) || femail1!==femail2){
      errorMessage.push("Email-2: Check the Email-2 input!");        
    }

    if (!faddress1 || faddress1==='' || faddress1===' ' || !regex.faddress1.test(faddress1)){
      errorMessage.push("Address-1: Check the Address-1 input!");       
    }

    if (!faddress2 || faddress2==='' || faddress2===' ' || !regex.faddress2.test(faddress2)){
      errorMessage.push("faddress-2: Check the Address-2 input!");          
    }

    if (!fcity || this.state.fcity==='' || fcity===' ' || !regex.fcity.test(fcity)){
      errorMessage.push("City: Check the City input!");       
    }

    if (!fstate || fstate==='' || fstate===' ' || !regex.fstate.test(fstate)){
      errorMessage.push("State:: Check the State input!");       
    }
    if (!fcountryRegion ||fcountryRegion==='' || fcountryRegion===' ' || !regex.fcountryRegion.test(fcountryRegion)){
      errorMessage.push("Country-Region: Check the Country-Region input!");       
    }
    if (!fzipPostalCode || fzipPostalCode==='' || fzipPostalCode===' ' || !regex.fzipPostalCode.test(fzipPostalCode)){
      errorMessage.push("Zip-Postal-Code: Check the Zip-Postal-Code input!");       
    }
    if (!fhearAboutUs || fhearAboutUs==='' || fhearAboutUs===' ' || !regex.fhearAboutUs.test(fhearAboutUs)){
      errorMessage.push("Hear-Abou-Us: Check the Hear-Abou-Us input!");         
    }
    if(!checkObj1.check1 && !checkObj1.check2 && !checkObj1.check3 ) {
      errorMessage.push("ChckBoxes-1: check at least one!");
    }
    if(!checkObj2.checkCity1 && !checkObj2.checkCity2 && !checkObj2.checkCity3 && !checkObj2.checkCity4 && !checkObj2.checkCity5 && !checkObj2.checkCity6) {
        errorMessage.push("ChckBoxes-2: check at least one!");
    }
    if (!fportfolioLink || fportfolioLink==='' || fportfolioLink===' ' || !regex.fportfolioLink.test(fportfolioLink)){
      errorMessage.push("Portfolio-Link: Check the Portfolio-Link input!");  
    }   

    if (!fsubject || fsubject==='' || fsubject===' ' || !regex.fsubject.test(fsubject)){
      errorMessage.push("Subject: Check the Subject input!");
    }
    
    if(errorMessage.length){
      alert(errorMessage.join("\n"))
    } 
    else{alert('Form Submited')};
  }
}

render(){
  // console.log(this.state.checkObj1);
  console.log(this.state.checkObj2);
    return (
            <div className="main-container">           
              <FormHeader />
              <Router>              
              <div>
                  <ul>
                    <li><NavLink exact to="/">Personal Information</NavLink></li>
                    <li><NavLink exact to="SkillsAndLocation">Skills And Location</NavLink></li>
                    <li><NavLink exact to="Portfolio">Portfolio</NavLink></li>
                  </ul>
                  {/* <form> */}
                  <Switch>
                      <Route exact path='/' /* component={PersonalInformation} */ render={()=>{
                        return(
                          <div>
                            <PersonalInformation 
                              handleFormChange1={this.handleFormChange1.bind(this)}
                              fname={this.state.fname} fnameClass={this.state.fnameClass}
                              fphone={this.state.fphone} fphoneClass={this.state.fphoneClass}
                              femail1={this.state.femail1} femail1Class={this.state.femail1Class}
                              femail2={this.state.femail2} femail2Class={this.state.femail2Class}
                              faddress1={this.state.faddress1} faddress1Class={this.state.faddress1Class}
                              faddress2={this.state.faddress2} faddress2Class={this.state.faddress2Class}
                              fcity={this.state.fcity} fcityClass={this.state.fcityClass}
                              fstate={this.state.fstate} fstateClass={this.state.fstateClass}
                              fcountryRegion={this.state.fcountryRegion} fcountryRegionClass={this.state.fcountryRegionClass}
                              fzipPostalCode={this.state.fzipPostalCode} fzipPostalCodeClass={this.state.fzipPostalCodeClass}
                              fhearAboutUs={this.state.fhearAboutUs} fhearAboutUsClass={this.state.fhearAboutUsClass}
                            />
                            <button><NavLink exact to="SkillsAndLocation">Next</NavLink></button>
                          </div>
                         );}}/>
                      <Route exact path='/SkillsAndLocation' /* component={SkillsAndLocation} */ render={()=>{
                        return(
                          <div>
                            <SkillsAndLocation 
                              handleRadioBtns={this.handleRadioBtns}
                              handleCheck={this.handleCheck}
                                                  
                              radioBtnValue={this.state.radioBtnValue}
                              checkObj1={this.state.checkObj1}
                              checkObj2={this.state.checkObj2}
                            />
                            <button><NavLink exact to="">Back</NavLink></button>
                            <button><NavLink exact to="Portfolio">Next</NavLink></button>
                          </div>
                        );}}/>
                      <Route exact path='/Portfolio' /* component={Portfolio} */ render={()=>{
                        return(
                          <div>
                          <Portfolio 
                            handleFormChange1={this.handleFormChange1.bind(this)}
                            handleSubmit={this.handleSubmit.bind(this)}
                            fportfolioLink={this.state.fportfolioLink} fportfolioLinkClass={this.state.fportfolioLinkClass}
                            fsubject={this.state.fsubject} fsubjectClass={this.state.fsubjectClass}                                                 
                          />
                          <button><NavLink exact to="SkillsAndLocation">Back</NavLink></button>
                          </div>                     
                        );}}/> 
                  </Switch>
                  {/* </form>   */}
                </div>
              </Router>
              <FormFooter />
            </div>
    );
  }
}

export default App;