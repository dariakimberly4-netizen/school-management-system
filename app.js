const modules=[
["Students","🎓","Enrollment, profiles and student records"],["Teachers","👩‍🏫","Faculty profiles and assignments"],["Enrollment","📝","Admissions and registration"],["Classes & Sections","🏫","Grade levels, sections and advisers"],["Attendance","✓","Daily student attendance"],["Schedules","📅","Classes, rooms and timetables"],["Grades","📊","Grades and report cards"],["Assignments","📚","Learning tasks and submissions"],["Accounting","₱","Tuition, payments and receipts"],["Parents","👪","Parent accounts and communication"],["Announcements","📣","School-wide notices"],["Documents","📄","Certificates and school documents"],["Inventory","📦","School assets and supplies"],["Reports","📈","Academic and operational reports"],["Audit History","🕘","System activity and changes"],["Settings","⚙️","School year, users and permissions"]];
const seed={Students:[["2026-0001 · Mia Santos","Grade 7 – Rizal","Active"],["2026-0002 · Lucas Reyes","Grade 8 – Bonifacio","Active"]],Teachers:[["Ana Cruz","Mathematics · Grade 7","Active"],["Marco Lim","Science · Grade 8","Active"]],Enrollment:[["ENR-26001 · Sofia Garcia","Grade 7 application","Pending"]],Accounting:[["OR-10021 · Mia Santos","Tuition · ₱4,500","Completed"]],Announcements:[["First Quarter Examination","October 12–16, 2026","Active"]]};
let current="",data=JSON.parse(localStorage.getItem("schoolData")||"{}");Object.keys(seed).forEach(k=>data[k]??=seed[k]);function save(){localStorage.setItem("schoolData",JSON.stringify(data))}
const $=id=>document.getElementById(id);
$("loginBtn").onclick=()=>{if($("username").value==="admin"&&$("password").value==="school123"){ $("login").classList.add("hidden");$("app").classList.remove("hidden");$("roleTag").textContent=$("role").value.toUpperCase();renderHome()}else alert("Use demo login: admin / school123")};
document.querySelectorAll(".roleDemo").forEach(b=>b.onclick=()=>{$("role").value=b.dataset.role;$("username").value="admin";$("password").value="school123";$("loginBtn").click()});
$("logout").onclick=()=>location.reload();
const studentModules=[
["My Profile","👤","Profile • Student ID / QR • Adviser • Guardian • Security"],
["Academics","📚","Subjects • Schedule • Materials • Exams • Consultation"],
["Assignments","📝","To Do • Upload • Submitted • Feedback • Resubmit"],
["Grades & Attendance","📊","Grades • Breakdown • Report Card • Attendance • Absences"],
["My Account","💳","Assessment • Balance • Due Dates • Payments • Receipts"],
["School Hub","📢","Announcements • Inbox • Notifications • Calendar • Events"],
["Documents","📁","Requirements • Requests • Tracking • Certificates • Downloads"],
["Student Services","🆘","Registrar • Accounting • Guidance • Library • Clinic • Support"]
];
function renderHome(){const isStudent=$("role").value==="Student";const activeModules=isStudent?studentModules:modules;$("orbitShell").classList.toggle("studentOrbit",isStudent);$("orbitRole").textContent=isStudent?"STUDENT":"SCHOOL";$("orbitTitle").textContent="COMMAND CENTER";$("stats").innerHTML=[["1,248","Students"],["68","Teachers"],["42","Classes"],["96%","Attendance"]].map(x=>'<div class="stat"><b>'+x[0]+'</b><span>'+x[1]+'</span></div>').join("");$("modules").innerHTML=activeModules.map((m,i)=>'<div class="module" data-i="'+i+'"><i>'+m[1]+'</i><h3>'+m[0]+'</h3><p>'+m[2]+'</p></div>').join("");document.querySelectorAll(".module").forEach(x=>x.onclick=()=>openModule(activeModules[x.dataset.i][0]))}
const studentDemo={
"Personal Information":["Mia Santos","Student No. 2026-0001 • Grade 7 – Rizal • Active"],
"Student ID / QR":["2026-0001","Grade 7 – Rizal • Valid AY 2026–2027"],
"Grade & Section":["Grade 7 – Rizal","Room 204 • Junior High School"],
"Adviser":["Ms. Ana Cruz","Class Adviser • Mathematics"],
"Guardian & Emergency Contacts":["Maria Santos","Mother / Guardian • 0917-555-0123"],
"Security / Change Password":["Account protected","Last sign-in: Today • Student access only"],
"My Subjects":["7 enrolled subjects","Mathematics • Science • English • Filipino • AP • MAPEH • TLE"],
"My Schedule":["Next: Mathematics","8:00–9:00 AM • Room 204 • Ms. Ana Cruz"],
"Assignments & Submission":["Science Project","Due Sep 25, 2026 • Pending submission"],
"Learning Materials":["Mathematics – Quarter 1","Module 4: Fractions & Decimals • Available"],
"Exam Schedule & Results":["First Quarter Exams","Oct 12–16, 2026 • Schedule posted"],
"Current Grades":["General Average: 91.4","Math 92 • Science 94 • English 90 • Filipino 91"],
"Quarterly Grades":["1st Quarter","General Average 91.4 • Complete"],
"Final Grades":["Not yet available","Final grades will appear after year-end posting"],
"Report Card":["Quarter 1 Report Card","Ready to view / print"],
"Academic History":["AY 2025–2026","Grade 6 • General Average 90.8 • Promoted"],
"Daily Attendance":["Today: Present","Time in 7:42 AM"],
"Late Records":["1 late record","Sep 3, 2026 • 8:07 AM"],
"Absences":["1 absence","Aug 18, 2026 • Excused"],
"Submit Absence Explanation":["Aug 18 absence","Medical appointment • Approved"],
"Attendance Summary":["96% attendance","Present 43 • Absent 1 • Late 1"],
"Tuition Balance":["₱3,500 remaining","Total ₱18,000 • Paid ₱14,500"],
"Payment History":["OR-10021 • ₱4,500","Sep 5, 2026 • Tuition • Paid"],
"Official Receipts":["OR-10021","₱4,500 • Sep 5, 2026 • Available to print"],
"Other Fees":["Activity Fee • ₱500","Paid • OR-09984"],
"School Calendar":["Next event: Foundation Day","Sep 30, 2026"],
"Events":["Foundation Day","Sep 30 • School Gym • 8:00 AM"],
"Activities":["Science Club Meeting","Sep 23 • Science Lab • 3:30 PM"],
"Holidays":["No Classes","Oct 31, 2026 • School break"],
"Examination Schedule":["First Quarter Exams","Oct 12–16, 2026"],
"Announcements":["Quarterly Examination","Exam schedule has been posted."],
"Notifications":["3 new notifications","New grade • Assignment due • School announcement"],
"Teacher Messages":["Ms. Ana Cruz","Please review Chapter 4 before Monday."],
"School Messages":["Registrar","Student ID is ready for claiming."],
"Enrollment Requirements":["Complete","Birth Certificate ✓ • Form 138 ✓ • ID Photo ✓"],
"Request Document":["Good Moral Certificate","Request form ready"],
"Request Tracking":["REQ-2026-0142","Good Moral Certificate • Processing"],
"Certificates":["Certificate of Recognition","Quarter 1 • Available"],
"School Forms":["Student Information Form","Available to view"],
"Downloads":["School Handbook 2026–2027","PDF • Available"],
"Honors":["With Honors","Quarter 1 • General Average 91.4"],
"Awards":["Perfect Project Award","Science • September 2026"],
"Certificates":["Certificate of Recognition","Quarter 1 • Available"],
"Recognitions":["Science Excellence","Recognized Sep 15, 2026"],
"Registrar Help":["Registrar Office","Enrollment, records and document requests"],
"Accounting Help":["Accounting Office","Tuition, payments and receipts"],
"Guidance Request":["Guidance Office","No active request • Request an appointment"],
"Technical Help":["ICT Help Desk","Account and portal support"],
"Emergency Contacts":["School Clinic","Local 105 • Guardian: Maria Santos"],"Upload Assignment":["Science Project","Due Sep 25, 2026 • PDF/JPG/DOCX • Not submitted"],"Submission Status":["Science Project • Pending","Due Sep 25, 2026 • Submit before 11:59 PM"],"Teacher Feedback":["Mathematics Activity 3","Great work • Score 18/20 • Ms. Ana Cruz"],"Resubmit":["English Essay","Revision allowed • Due Sep 22, 2026"],"Quiz Scores":["Mathematics","Quiz 1: 18/20 • Quiz 2: 19/20"],"Performance Tasks":["Science","Project: 47/50 • Laboratory: 28/30"],"Exam Scores":["Quarter 1","Mathematics 91 • Science 94 • English 90"],"Teacher Remarks":["Ms. Ana Cruz","Very good progress. Continue practicing problem solving."],"Monthly Attendance":["September 2026","Present 14 • Late 1 • Absent 0"],"Present / Late / Absent":["96% attendance","Present 43 • Late 1 • Absent 1"],"Excused Records":["Aug 18, 2026","Excused • Medical appointment"],"Ready for Download":["Certificate of Enrollment","Ready • PDF available"],"Digital Student ID":["Mia Santos • 2026-0001","Grade 7 – Rizal • AY 2026–2027"],"QR Verification":["Student QR","Active • Verified school record"],"ID Status":["Physical ID","Ready for claiming at Registrar"]
,"To Do":["2 assignments due","Science Project • English Essay"],"Upcoming":["Science Project","Due Sep 25, 2026"],"Submitted":["Mathematics Activity 3","Submitted Sep 18 • 9:42 PM"],"Late / Missing":["No missing work","All required submissions accounted for"],"Scores":["Latest assignment: 18/20","Mathematics Activity 3"],"Submission History":["3 submissions this quarter","Latest: Mathematics Activity 3"],"Grade Breakdown":["General Average 91.4","Written 92 • Performance 93 • Exam 89"],"Attendance Calendar":["September 2026","Present 14 • Late 1 • Absent 0"],"Assessment":["AY 2026–2027","Total ₱18,000 • Paid ₱14,500"],"Upcoming Due Date":["₱3,500","Due Oct 5, 2026"],"Statement of Account":["Current balance ₱3,500","Updated Sep 19, 2026 • Ready to view"],"Inbox / Messages":["2 unread messages","Ms. Ana Cruz • Registrar"],"Urgent Notices":["No urgent notices","You are all caught up"],"Notification History":["3 this week","Grade posted • Assignment due • ID ready"],"Exam Results":["Quarter 1 preliminary","Mathematics 91 • Science 94"],"Teacher Consultation":["Ms. Ana Cruz","Tue & Thu • 3:30–4:00 PM"],"Login History":["Today • Android","Successful login"],"Library Loans":["1 borrowed book","Science Explorer • Due Sep 28"],"Clinic / Emergency":["School Clinic","Local 105 • Emergency contact on file"],"Support Ticket":["No open tickets","Create a support request anytime"],"Report a Problem":["Student Portal Help","Report account, class or document issues"]};
const studentSubmenus={
"My Profile":["Personal Information","Student ID / QR","Grade & Section","Adviser","Guardian & Emergency Contacts","Security / Change Password","Login History"],
"Academics":["My Subjects","My Schedule","Learning Materials","Exam Schedule & Results","Exam Results","Teacher Consultation"],
"Assignments":["To Do","Upcoming","Upload Assignment","Submission Status","Submitted","Late / Missing","Teacher Feedback","Scores","Resubmit","Submission History"],
"Grades & Attendance":["Current Grades","Grade Breakdown","Quarterly Grades","Final Grades","Report Card","Academic History","Attendance Calendar","Late Records","Absences","Submit Absence Explanation"],
"My Account":["Assessment","Tuition Balance","Upcoming Due Date","Payment History","Official Receipts","Statement of Account","Other Fees"],
"School Hub":["Announcements","Notifications","Inbox / Messages","Urgent Notices","Notification History","School Calendar","Events","Activities","Holidays"],
"Documents":["Enrollment Requirements","Request Document","Request Tracking","Certificates","School Forms","Downloads","Ready for Download"],
"Student Services":["Registrar Help","Accounting Help","Guidance Request","Library Loans","Clinic / Emergency","Technical Help","Support Ticket","Report a Problem"]
};
function openModule(name){current=name;const banner=document.getElementById("studentDemoBanner");if(banner)banner.classList.toggle("hidden",document.getElementById("role").value!=="Student");$("home").classList.add("hidden");$("workspace").classList.remove("hidden");$("wsTitle").textContent=name;$("search").value="";const isStudent=$("role").value==="Student";if(isStudent&&studentSubmenus[name]){ $("addBtn").style.display="none";$("search").style.display="none";$("content").innerHTML='<p class="demoLabel">DEMO STUDENT • MIA SANTOS</p><div class="studentSubmenu">'+studentSubmenus[name].map(x=>{const d=studentDemo[x]||["Demo record","Sample student information"];return '<button type="button" class="subMenuBtn"><div><b>'+x+'</b><small>'+d[0]+'</small><em>'+d[1]+'</em></div><span>Open →</span></button>'}).join("")+'</div>';document.querySelectorAll(".subMenuBtn").forEach(b=>b.onclick=()=>{const key=b.querySelector("b").textContent,d=studentDemo[key]||["Demo record","Sample student information"]; $("content").innerHTML='<div class="studentDetail"><button type="button" class="subBack">← Back to '+name+'</button><p class="demoLabel">DEMO STUDENT • MIA SANTOS</p><h2>'+key+'</h2><div class="demoRecord"><strong>'+d[0]+'</strong><span>'+d[1]+'</span></div><p>Official grades, attendance, payments and profile records are view-only.</p></div>';$("content").querySelector(".subBack").onclick=()=>openModule(name)});return}$("addBtn").style.display="";$("search").style.display="";data[current]??=[];renderRows()}
$("back").onclick=()=>{$("workspace").classList.add("hidden");$("home").classList.remove("hidden")};
function renderRows(){let q=$("search").value.toLowerCase(),rows=(data[current]||[]).filter(r=>r.join(" ").toLowerCase().includes(q));$("content").innerHTML='<div class="table"><table><thead><tr><th>Record</th><th>Details</th><th>Status</th><th></th></tr></thead><tbody>'+ (rows.length?rows.map((r,i)=>'<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td><span class="pill">'+r[2]+'</span></td><td><button class="del" data-name="'+encodeURIComponent(r[0])+'">Delete</button></td></tr>').join(""):'<tr><td colspan="4">No records yet. Tap “Add Record”.</td></tr>')+'</tbody></table></div>';document.querySelectorAll(".del").forEach(b=>b.onclick=()=>{let n=decodeURIComponent(b.dataset.name);data[current]=data[current].filter(r=>r[0]!==n);save();renderRows()})}
$("search").oninput=renderRows;$("addBtn").onclick=()=>{$("modal").classList.remove("hidden");$("formTitle").textContent="Add "+current+" Record";$("fName").focus()};$("cancel").onclick=()=>$("modal").classList.add("hidden");$("recordForm").onsubmit=e=>{e.preventDefault();data[current].push([$("fName").value,$("fDetails").value,$("fStatus").value]);save();e.target.reset();$("modal").classList.add("hidden");renderRows()};

const orbitCenterBtn=document.getElementById("orbitCenterBtn"),quickView=document.getElementById("quickView");
function showQuickView(){if(document.getElementById("role").value!=="Student")return;document.getElementById("home").classList.add("hidden");document.getElementById("workspace").classList.add("hidden");quickView.classList.remove("hidden")}
function backToOrbit(){quickView.classList.add("hidden");document.getElementById("workspace").classList.add("hidden");document.getElementById("home").classList.remove("hidden")}
if(orbitCenterBtn)orbitCenterBtn.onclick=showQuickView;
["quickBack","quickOrbit"].forEach(id=>document.getElementById(id).onclick=backToOrbit);
document.getElementById("myDay").onclick=()=>{quickView.classList.add("hidden");openModule("Academics")};
document.getElementById("viewNotifications").onclick=()=>{quickView.classList.add("hidden");openModule("Updates")};
