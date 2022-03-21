

let secQ1_optionsTag = document.getElementById('secQuestion1').options;
let secQ2_optionsTag = document.getElementById('secQuestion2').options;

let securityQueOptions = [
  {
    text: 'Select',
    value: '',
    selected:"selected"
  },

  {
    text: 'Sum of 2+3 =',
    value: 'Sum of 2+3 ='
  },
  {
    text: 'Sum of 100+200 =',
    value: 'Sum of 100+200 ='
  },
  {
    text: '23 x 100 =',
    value: '23 x 100 ='
  },
  {
    text: 'Capital of India?',
    value: 'Capital of India?'
  },
  {
    text: 'Capital of USA?',
    value: 'Capital of USA?'
  }
];

securityQueOptions.forEach(option =>
    secQ1_optionsTag.add(
        new Option(option.text, option.value, option.selected)
  )
);

const fillSQ2 = () => {

  for (i = secQ2_optionsTag.length-1; i >= 0; i--) {
    secQ2_optionsTag[i] = null;
  }

  let options = [...securityQueOptions];
  secQ1Selected = document.getElementById("secQuestion1");
  
  var index = securityQueOptions.findIndex((item => item.text === secQ1Selected.value));
  if (index !== -1) {
    options.splice(index, 1);
  }
  
  options.forEach(option =>
    secQ2_optionsTag.add(
        new Option(option.text, option.value, option.selected)
  )
);
}

let passRulesTag = document.getElementById("passwordRules");
let passStrengthTag = document.getElementById("passwordStrengthModal");
let pITag = document.getElementById("invalidPassword");
passwordTag = document.getElementById('password');
passNoMatchTag = document.getElementById('passNoMatch');
progressBar = document.getElementsByTagName('progress')[0];
let email = document.getElementById("email");
let invalidEmailTag = document.getElementById("emailValidation");

emailNoMatch = document.getElementById("emailNoMatch");

// password Modal
let upperSatisfied=document.getElementById("upperSatisfied");
let lowerSatisfied=document.getElementById("lowerSatisfied");
let numberSatisfied=document.getElementById("numberSatisfied");
let lengthSatisfied=document.getElementById("lengthSatisfied");
let charNotSatisfied=document.getElementById("charNotSatisfied");
let notUserNotSatisfied=document.getElementById("notUserNotSatisfied");



const onPassword = () => {
  passRulesTag.style.display="block";
  pITag.style.display="none";
  passNoMatchTag.style.display="none";
};

const offPassword = () => {
  passRulesTag.style.display="none";

  if(!checkPassword()){
		passwordTag.style.background="#ffb5b5";
		pITag.style.display='block';
	}
	else{
		passwordTag.style.background="white";
	}

  passStrengthTag.style.display="none";

  lowerSatisfied.style.display = "none";
  upperSatisfied.style.display = "none";
  numberSatisfied.style.display = "none";
  lengthSatisfied.style.display = "none";
  charNotSatisfied.style.display = "none";
  notUserNotSatisfied.style.display = "none";
  
};

const checkPassword = () => {

  passwordValue = passwordTag.value
  
  passStrengthTag.style.display="block";
  passRulesTag.style.display="none";

  let upper=false,
      lower=false,
      number=false,
      len=false,

      sameAsUserID=false; // must be false to be valid
      wrongSpeChar=false; // must be false to be valid

  for(var i=0;i<passwordValue.length;i++){
    let userId = document.getElementById('userID').value;
    let ch = passwordValue.charCodeAt(i);

    if(userId.localeCompare(passwordValue) == 0){ 
      sameAsUserID=true;
    }

    else{
      if(ch>=48 && ch<=57) {number=true;}
      else if((ch>=97 && ch<=122)) {lower=true;}
      else if((ch>=65 && ch<=90 )) {upper=true;}
      else if((ch == 33 || ch == 35 || ch == 36 || ch == 37)){
      }
      else wrongSpeChar=true;
    }
    if(passwordValue.length >= 8 && passwordValue.length<=20) len=true;
  }

  if(sameAsUserID || wrongSpeChar){
      if(sameAsUserID){
        notUserNotSatisfied.style.display = "block"  
        progressBar.setAttribute("value", 0);
      }	
      if(wrongSpeChar){		
        charNotSatisfied.style.display = "block"
        progressBar.setAttribute("value", 0);
      }
      return false;
  }
  else{
    let passwordStrength=0;
    if(upper){
      upperSatisfied.style.display = "block"
      passwordStrength+=25;		
    }
    if(lower){
      lowerSatisfied.style.display = "block"
      passwordStrength+=25;		
    }
    if(number){
      numberSatisfied.style.display = "block"
      passwordStrength+=25;		
    }		
    if(len){
      lengthSatisfied.style.display = "block"
      passwordStrength+=25;		
    }
    
    progressBar.setAttribute("value", passwordStrength);
    progressBar.style.background = "green";
    progressBar.innerHTML = "Strong"

    if(passwordStrength==100){
      document.getElementById('password').style.background="white";	
      return true;
    }
  }
}

const checkEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  { 
    invalidEmailTag.style.display = "none";
  }
  else{
    invalidEmailTag.style.display = "block";}

}

const verifyPassword = () => {
  let vPasswordValue = document.getElementById('vPassword').value;

  if (passwordTag.value.localeCompare(vPasswordValue) == 0 && passwordTag.value!=""){
    passNoMatchTag.style.color="green";		
    passNoMatchTag.innerHTML="Password Matched.";
		passNoMatchTag.style.display="block";
		return true;
	}
	else{
		passNoMatchTag.style.color="red";		
		passNoMatchTag.innerHTML="Password Doesn't Match.";
		passNoMatchTag.style.display="block";
		return false;
	}
}

const verifyEmail = () => {
  let vEmailValue = document.getElementById('vEmail').value;

  if (email.value.localeCompare(vEmailValue) == 0 && email.value!=""){
		emailNoMatch.style.display="none";
    return true;
	}
	else{
	
		emailNoMatch.style.display="block";
    return false;
	}
}

function register(){

  if ((document.getElementById('userID').value=="" || document.getElementById('password').value=="" || 
      document.getElementById('vPassword').value=="" || document.getElementById('email').value=="" ||
      document.getElementById('vEmail').value=="" || document.getElementById('secQuestion1').value=="" ||
      document.getElementById('secAnswer1').value=="" || document.getElementById('mobile').value== ""||
      document.getElementById('address').value=="" || document.getElementById('interestAreas').value=="" ||
      document.getElementById('secQuestion2').value=="" || document.getElementById('secAnswer2').value==""
  )){
    alert("Please fill all fields")
  }
  else if(!verifyEmail()){
    alert("Please enter valid Email")
  }
  else if(!verifyPassword()){
    alert("Please enter Valid Password")
  }
  else{
    console.log(document.getElementById("userID").value)
    sessionStorage.setItem("userID", document.getElementById("userID").value);
    sessionStorage.setItem("password", document.getElementById("password").value);
    sessionStorage.setItem("email", document.getElementById("email").value);
    sessionStorage.setItem("secQuestion1", document.getElementById("secQuestion1").value);
    sessionStorage.setItem("secAnswer1", document.getElementById("secAnswer1").value);
    sessionStorage.setItem("secQuestion1", document.getElementById("secQuestion2").value);
    sessionStorage.setItem("secAnswer1", document.getElementById("secAnswer2").value);
    sessionStorage.setItem("mobile", document.getElementById("mobile").value);
    sessionStorage.setItem("address", document.getElementById("address").value);
    sessionStorage.setItem("interestAreas", document.getElementById("pasinterestAreassword").value);
    resetForm();
  }
}


function resetForm(){ // on pressing cancel button
  document.getElementById('password').style.background="white";
  pITag.style.display='none';
  invalidEmailTag.style.display='none';
  passNoMatchTag.style.display='none';
  emailNoMatch.style.display='none';
}
