(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{b6SQ:function(e,t,i){"use strict";i.r(t),i.d(t,"registerProcess",(function(){return a}));var s=i("mUSF");window.userReg="",window.clrReg="",window.classReg="",window.titleReg="",window.emailReg="",window.siteReg="",window.passReg="",window.keyReg="";const a=e=>{var t=e;"quit"==(e=e.toLowerCase().trim())?(Object(s.f)(),Object(s.c)("Registration process exited"),registerState=0,userReg="",clrReg="",titleReg="",emailReg="",passReg="",classReg="",siteReg="",keyReg=""):e.includes("|-|")||e.includes("/")?Object(s.b)('INPUT CONTAINS ILLEGAL STRING "|-|" or "/", PLEASE AVOID INCLUDING THIS STRING IN YOUR INPUT AND TRY AGAIN'):1==registerState?"y"==e?(Object(s.c)('<span style="color:#98FB98">[✓] </span>Registration confirmed<br>Please enter your username as your identity in the Foundation\'s database'),registerState=2):"n"==e?(Object(s.c)("Registration aborted, request for registration has been discarded"),Object(s.f)(),registerState=0):Object(s.b)('UNRECOGNISED INPUT, PLEASE ENTER "Y", "N" OR "Quit"'):2==registerState?t.length<101?(userReg=t,Object(s.c)("Please enter your email address you wish to register with"),registerState=2.5):(Object(s.b)("USERNAME TOO LONG, PLEASE CHOOSE ANOTHER ONE."),registerState=2):2.5==registerState?(Object(s.g)(),firebase.auth().fetchSignInMethodsForEmail(t).then(t=>{t.length?(Object(s.h)(),registerState=2.5,Object(s.b)('WE ALREADY HAVE AN USER WITH A CORRESPONDING EMAIL ADDRESS IN OUR DATABASE. PLEASE USE ANOTHER EMAIL OR TRY LOGGING IN<br><hr><small style="opacity:0.7">If you wish to login, enter "Quit" to exit the registration process. After that, enter "Login" to login yourself.</small>')):(emailReg=e,registerState=3,a("clearance"))}).catch(e=>{Object(s.h)(),Object(s.b)(String(e).toUpperCase()+"<br><hr> <small style='opacity:0.7'>PLEASE TRY AGAIN.</small>"),registerState=2.5})):3==registerState?(Object(s.c)("Please click and select your Foundation security clearance (Available Security Clearance Level is 0 - 5)<br><ul id='clearanceList' class='listClass'><li>Level 0 (For Official Use Only)</li><li>Level 1 (Confidential)</li><li>Level 2 (Restricted)</li><li>Level 3 (Secret)</li><li>Level 4 (Top Secret)</li><li style='color:red'>Level 5 (Thaumiel)</li></ul><hr><small style='opacity:0.7'>Foundation security clearances granted to personnel represent the highest level or type of information to which they can be granted access. </small>"),$d.find("#clearanceList li").unbind("click").bind("click",(function(){$(this).parent("#clearanceList").find("li").unbind("click"),$(this).parent("#clearanceList").attr("id",""),$(this).parent("ul").attr("class",""),$(this).addClass("disabledList"),$(this).index()>5||$(this).index()<0?(Object(s.b)("ERROR OCCURED, PLEASE TRY AGAIN"),registerState=3,a("error")):(clrReg=$(this).index(),$d.append($(this).text()),Object(s.c)(`Foundation security clearance selected: <span class="highlight">Level ${$(this).index()}</span><br><br><hr>Please click and select your personnel classification<br><ul id='personnelList' class='listClass'><li>Class A (Deemed essential to Foundation strategic operations)</li><li>Class B (Deemed essential to local Foundation operations)</li><li>Class C (Personnel with direct access to most anomalies not deemed strictly hostile or dangerous)</li><li>Class D (expendable personnel used to handle extremely hazardous anomalies)</li><li>Class E (Provisional classification applied to field agents and containment personnel)</li></ul><hr><small style='opacity:0.7'>Classifications are assigned to personnel based on their proximity to potentially dangerous anomalous objects, entities, or phenomena. </small>`),function e(){$d.find("#personnelList li").unbind("click").bind("click",(function(){$(this).parent("#personnelList").find("li").unbind("click"),$(this).parent("#personnelList").attr("id",""),$(this).parent("ul").attr("class",""),$(this).addClass("disabledList"),/^[A-E]$/i.test($(this).text().charAt(6))?(classReg=$(this).text().charAt(6),$d.append($(this).text()),Object(s.c)(`Personnel classification selected: <span class="highlight">${$(this).text()}</span><br><br><hr>Please now enter your staff title</span><hr><small style='opacity:0.7'>General occupational titles that are typically used in the Foundation. (e.g. Containment Specialist, Researcher)</small>`),Object(s.h)(),registerState=4):(Object(s.b)("ERROR OCCURED, PLEASE TRY AGAIN"),Object(s.c)("Please click and select your personnel classifications<br><ul id='personnelList' class='listClass'><li>Class A (Deemed essential to Foundation strategic operations)</li><li>Class B (Deemed essential to local Foundation operations)</li><li>Class C (Personnel with direct access to most anomalies not deemed strictly hostile or dangerous)</li><li>Class D (expendable personnel used to handle extremely hazardous anomalies)</li><li>Class E (Provisional classification applied to field agents and containment personnel)</li></ul><hr><small style='opacity:0.7'>Classifications are assigned to personnel based on their proximity to potentially dangerous anomalous objects, entities, or phenomena. </small>"),e())}))}())}))):4==registerState?t.length<101?(titleReg=t,Object(s.c)("Please enter your working site<br><hr><small style='opacity:0.7'>The location where you work. (e.g. Site-103, Site-56)</small>"),registerState=5):(Object(s.b)("INPUTTED STAFF TITLE TOO LONG, PLEASE CHOOSE ANOTHER ONE."),registerState=4):5==registerState?t.length<101?(siteReg=t,Object(s.c)("Please now enter a password for your new account"),registerState=6):(Object(s.b)("INPUTTED WORKING SITE TOO LONG, PLEASE CHOOSE ANOTHER ONE."),registerState=5):6==registerState?t.length<6?Object(s.b)("ERROR: PASSWORD SHOULD BE AT LEAST 6 CHARACTERS"):(Object(s.g)(),passReg=t,$d.append('<blockquote id="waitingToAdd">Registering and encrypting user\'s information...</blockquote>'),Object(s.a)(),5==clrReg?(errorEffect(),registerState=7):r()):7==registerState?(keyReg=t,keyReg.length>500?(Object(s.b)("KEYPHRASE MUST NOT EXCEED 500 CHARACTERS, PLEASE CHOOSE ANOTHER ONE."),registerState=7):(Object(s.g)(),$d.append('<blockquote id="waitingToAdd">Keyphrase received, now registering and encrypting user\'s information...</blockquote>'),Object(s.a)(),r())):8==registerState&&(emailReg=t,r())};function r(){Object(s.g)(),firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(()=>firebase.auth().createUserWithEmailAndPassword(emailReg,passReg).then((function(){firebase.auth().currentUser.updateProfile({displayName:userReg,photoURL:`${clrReg}|-|${titleReg}|-|${classReg}|-|${siteReg}|-|${keyReg}`}).then((function(){UserTag=`${userReg}#${Math.ceil(1e4*Math.random())}`,checkUsernameAva("normal",(function(){}))}),(function(e){Object(s.b)(String(e).toUpperCase()+'<br><hr> <small style="opacity:0.7">Please enter your password again or you can enter "Quit" to exit the registration process.</small>'),Object(s.h)(),""==keyReg?registerState=6:registerState=7}))})).catch((function(e){Object(s.h)(),"auth/invalid-email"==e.code?(Object(s.b)(`PLEASE ENTER A VALID EMAIL (The email you have entered: <span class="highlight">${emailReg}</span>)<br><hr> <small style="opacity:0.7">Please enter your email again or you can enter "Quit" to exit the registration process.</small>`),registerState=8):"auth/email-already-in-use"==e.code?(Object(s.b)(`THE PROVIDED EMAIL IS ALREADY IN USE BY AN EXISTING USER (The email you have entered: <span class="highlight">${emailReg}</span>)<br><hr> <small style="opacity:0.7">Please enter your email again or you can enter "Quit" to exit the registration process.</small>`),registerState=8):(Object(s.b)(String(e).toUpperCase()+'<br><hr> <small style="opacity:0.7">Please enter your password again or you can enter "Quit" to exit the registration process.</small>'),registerState=6)})))}}}]);