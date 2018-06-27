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
const reg_fname = /^[a-zA-Z][ a-z|A-Z]{1,49}$/;
const reg_fphone = /^[0][-][0-9]{3}[-][0-9]{3}[-][0-9]{3}$/;
const reg_femail1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg_femail2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const reg_faddress1 = /^[a-zA-Z0-9][ a-z|A-Z|0-9-]{1,99}$/;
const reg_faddress2 = /^[a-zA-Z0-9][ a-z|A-Z|0-9-]{1,99}$/;
const reg_fcity = /^[a-zA-Z][ a-z|A-Z]{1,49}$/;
const reg_fstate = /^[a-zA-Z][ a-z|A-Z]{1,49}$/;
const reg_fcountryRegion = /^[a-zA-Z][ a-z|A-Z]{1,49}$/;
const reg_fzipPostalCode = /^[0-9]{5}$/;
const reg_fhearAboutUs = /^[a-zA-Z][ a-z|A-Z|0-9]{1,99}$/;
const reg_fportfolioLink = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
const reg_fsubject = /^[ a-zA-Z|A-Z|0-9]{0,150}$/;

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

  handleCheck1 = e =>{
    const myObj=this.state.checkObj1;
    const myfield=e.target.id;
    myObj[myfield]= this.state.checkObj1[myfield] === myfield? '':myfield;
    this.setState({checkObj1:myObj});
  }

  handleCheck2 = e =>{
    const myObj=this.state.checkObj2;
    const myfield=e.target.id;
    myObj[myfield]= this.state.checkObj2[myfield] === myfield? '':myfield;
    this.setState({checkObj2:myObj});
  }

  handleFormChange = e =>{
      let myRegex = null;
      const value=e.target.value;
      switch (e.target.id){
        case 'fname':
          if(!value || value==='' || value===' '){
            this.setState({fname :value, fnameClass:'inputTxt_2'});
          }else{
            myRegex=reg_fname;
            this.setState({fname : value,fnameClass: myRegex.test(value)?'inputTxt_2 valid':'inputTxt_2 invalid invalid2'});   
          }         
        break;          
        case 'fphone':
          if(!value || value==='' || value===' '){
            this.setState({fphone :value, fphoneClass:'inputTxt_3'});
          }else{
            myRegex=reg_fphone;
            this.setState({fphone : value,fphoneClass: myRegex.test(value)?'inputTxt_3 valid':'inputTxt_3 invalid invalid2'});   
          }                                 
        break;
        case 'femail1':
          if(!value || value==='' || value===' '){
            this.setState({femail1 :value, femail1Class:'inputTxt_2'});
          }else{
            myRegex=reg_femail1;
            this.setState({femail1 : value,femail1Class: myRegex.test(value)?'inputTxt_2 valid':'inputTxt_2 invalid invalid2'});   
          }                                 
        break;
        case 'femail2': 
          if(!value || value==='' || value===' '){
            this.setState({femail2 :value, femail2Class:'inputTxt_2'});
          }else{
            myRegex=reg_femail2;
            this.setState({femail2 : value, femail2Class: myRegex.test(value)?'inputTxt_2 valid':'inputTxt_2 invalid invalid2'});   
          }            
        break;
        case 'faddress1':
          if(!value || value==='' || value===' '){
            this.setState({faddress1 :value, faddress1Class:'inputTxt_1'});
          }else{
            myRegex=reg_faddress1;
            this.setState({faddress1 : value, faddress1Class: myRegex.test(value)?'inputTxt_1 valid':'inputTxt_1 invalid invalid2'});   
          }            
        break;
        case 'faddress2':
          if(!value || value==='' || value===' '){
            this.setState({faddress2 :value, faddress2Class:'inputTxt_1'});
          }else{
            myRegex=reg_faddress2;
            this.setState({faddress2 : value, faddress2Class: myRegex.test(value)?'inputTxt_1 valid':'inputTxt_1 invalid invalid2'});   
          }            
        break;    
        case 'fcity':
          if(!value || value==='' || value===' '){
            this.setState({fcity :value, fcityClass:'inputTxt_3'});
          }else{
            myRegex=reg_fcity;
            this.setState({fcity : value, fcityClass: myRegex.test(value)?'inputTxt_3 valid':'inputTxt_3 invalid invalid2'});   
          }            
        break;
        case 'fstate':
          if(!value || value==='' || value===' '){
            this.setState({fstate :value, fstateClass:'inputTxt_3'});
          }else{
            myRegex=reg_fstate;
            this.setState({fstate : value, fstateClass: myRegex.test(value)?'inputTxt_3 valid':'inputTxt_3 invalid invalid2'});   
          }            
        break;
        case 'fcountryRegion':
          if(!value || value==='' || value===' '){
            this.setState({fcountryRegion :value, fcountryRegionClass:'inputTxt_3'});
          }else{
            myRegex=reg_fcountryRegion;
            this.setState({fcountryRegion : value, fcountryRegionClass: myRegex.test(value)?'inputTxt_3 valid':'inputTxt_3 invalid invalid2'});   
          }            
        break;
        case 'fzipPostalCode':
          if(!value || value==='' || value===' '){
            this.setState({fzipPostalCode :value, fzipPostalCodeClass:'inputTxt_3'});
          }else{
            myRegex=reg_fzipPostalCode;
            this.setState({fzipPostalCode : value, fzipPostalCodeClass: myRegex.test(value)?'inputTxt_3 valid':'inputTxt_3 invalid invalid2'});   
          }            
        break;    
        case 'fhearAboutUs':
          if(!value || value==='' || value===' '){
            this.setState({fhearAboutUs :value, fhearAboutUsClass:'inputTxt_1'});
          }else{
            myRegex=reg_fhearAboutUs;
            this.setState({fhearAboutUs : value, fhearAboutUsClass: myRegex.test(value)?'inputTxt_1 valid':'inputTxt_1 invalid invalid2'});   
          }            
        break;    
        case 'fportfolioLink':
          if(!value || value==='' || value===' '){
            this.setState({fportfolioLink :value, fportfolioLinkClass:'inputTxt_1'});
          }else{
            myRegex=reg_fportfolioLink;
            this.setState({fportfolioLink : value, fportfolioLinkClass: myRegex.test(value)?'inputTxt_1 valid':'inputTxt_1 invalid invalid2'});   
          }            
      break;    
        case 'fsubject':
        if(!value || value==='' || value===' '){
          this.setState({fsubject :value, fsubjectClass:''});
        }else{
          myRegex=reg_fportfolioLink;
          this.setState({fsubject : value, fsubjectClass: myRegex.test(value)?'valid':'invalid'});   
        }            
      break;
      default:
      break;    
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
    if (!fname || fname==='' || fname===' ' || !reg_fname.test(fname)){
      errorMessage.push("Name: check the name input!");                
    }

    if (!fphone || fphone==='' || fphone===' ' || !reg_fphone.test(fphone)){
      errorMessage.push("Phone: Check the Phone input!");       
    }

    if (!femail1 || femail1==='' || femail1===' ' || !reg_femail1.test(femail1)){
      errorMessage.push("Email-1: Check the Email-1 input!");       
    }

    if (!femail2 || femail2==='' || femail2===' ' || !reg_femail2.test(femail2) || femail1!==femail2){
      errorMessage.push("Email-2: Check the Email-2 input!");        
    }

    if (!faddress1 || faddress1==='' || faddress1===' ' || !reg_faddress1.test(faddress1)){
      errorMessage.push("Address-1: Check the Address-1 input!");       
    }

    if (!faddress2 || faddress2==='' || faddress2===' ' || !reg_faddress2.test(faddress2)){
      errorMessage.push("faddress-2: Check the Address-2 input!");          
    }

    if (!fcity || this.state.fcity==='' || fcity===' ' || !reg_fcity.test(fcity)){
      errorMessage.push("City: Check the City input!");       
    }

    if (!fstate || fstate==='' || fstate===' ' || !reg_fstate.test(fstate)){
      errorMessage.push("State:: Check the State input!");       
    }
    if (!fcountryRegion ||fcountryRegion==='' || fcountryRegion===' ' || !reg_fcountryRegion.test(fcountryRegion)){
      errorMessage.push("Country-Region: Check the Country-Region input!");       
    }
    if (!fzipPostalCode || fzipPostalCode==='' || fzipPostalCode===' ' || !reg_fzipPostalCode.test(fzipPostalCode)){
      errorMessage.push("Zip-Postal-Code: Check the Zip-Postal-Code input!");       
    }
    if (!fhearAboutUs || fhearAboutUs==='' || fhearAboutUs===' ' || !reg_fhearAboutUs.test(fhearAboutUs)){
      errorMessage.push("Hear-Abou-Us: Check the Hear-Abou-Us input!");         
    }
    if(!checkObj1.check1 && !checkObj1.check2 && !checkObj1.check3 ) {
      errorMessage.push("ChckBoxes-1: check at least one!");
    }
    if(!checkObj2.checkCity1 && !checkObj2.checkCity2 && !checkObj2.checkCity3 && !checkObj2.checkCity4 && !checkObj2.checkCity5 && !checkObj2.checkCity6) {
        errorMessage.push("ChckBoxes-2: check at least one!");
    }
    if (!fportfolioLink || fportfolioLink==='' || fportfolioLink===' ' || !reg_fportfolioLink.test(fportfolioLink)){
      errorMessage.push("Portfolio-Link: Check the Portfolio-Link input!");  
    }   

    if (!fsubject || fsubject==='' || fsubject===' ' || !reg_fsubject.test(fsubject)){
      errorMessage.push("Subject: Check the Subject input!");
    }
    
    if(errorMessage.length){
      alert(errorMessage.join("\n"))
    } 
    else{alert('Form Submited')};
  }
}

render(){
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
                          <PersonalInformation 
                            handleFormChange={this.handleFormChange.bind(this)}
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
                         );}}/>
                      <Route exact path='/SkillsAndLocation' /* component={SkillsAndLocation} */ render={()=>{
                        return(
                            <SkillsAndLocation 
                              handleFormChange={this.handleFormChange.bind(this)}
                              handleRadioBtns={this.handleRadioBtns.bind(this)}
                              handleCheck1={this.handleCheck1.bind(this)}
                              handleCheck2={this.handleCheck2.bind(this)}
                                                  
                              radioBtnValue={this.state.radioBtnValue}
                              checkObj1={this.state.checkObj1}
                              checkObj2={this.state.checkObj2}
                            />
                        );}}/>
                      <Route exact path='/Portfolio' /* component={Portfolio} */ render={()=>{
                        return(
                          <Portfolio 
                            handleFormChange={this.handleFormChange.bind(this)}
                            handleSubmit={this.handleSubmit.bind(this)}
                            fportfolioLink={this.state.fportfolioLink} fportfolioLinkClass={this.state.fportfolioLinkClass}
                            fsubject={this.state.fsubject} fsubjectClass={this.state.fsubjectClass}                                                 
                          />                     
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
