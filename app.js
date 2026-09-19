const modules=[
["Students","🎓","Enrollment, profiles and student records"],["Teachers","👩‍🏫","Faculty profiles and assignments"],["Enrollment","📝","Admissions and registration"],["Classes & Sections","🏫","Grade levels, sections and advisers"],["Attendance","✓","Daily student attendance"],["Schedules","📅","Classes, rooms and timetables"],["Grades","📊","Grades and report cards"],["Assignments","📚","Learning tasks and submissions"],["Accounting","₱","Tuition, payments and receipts"],["Parents","👪","Parent accounts and communication"],["Announcements","📣","School-wide notices"],["Documents","📄","Certificates and school documents"],["Inventory","📦","School assets and supplies"],["Reports","📈","Academic and operational reports"],["Audit History","🕘","System activity and changes"],["Settings","⚙️","School year, users and permissions"]];
const seed={Students:[["2026-0001 · Mia Santos","Grade 7 – Rizal","Active"],["2026-0002 · Lucas Reyes","Grade 8 – Bonifacio","Active"]],Teachers:[["Ana Cruz","Mathematics · Grade 7","Active"],["Marco Lim","Science · Grade 8","Active"]],Enrollment:[["ENR-26001 · Sofia Garcia","Grade 7 application","Pending"]],Accounting:[["OR-10021 · Mia Santos","Tuition · ₱4,500","Completed"]],Announcements:[["First Quarter Examination","October 12–16, 2026","Active"]]};
let current="",data=JSON.parse(localStorage.getItem("schoolData")||"{}");Object.keys(seed).forEach(k=>data[k]??=seed[k]);function save(){localStorage.setItem("schoolData",JSON.stringify(data))}
const $=id=>document.getElementById(id);
$("loginBtn").onclick=()=>{if($("username").value==="admin"&&$("password").value==="school123"){ $("login").classList.add("hidden");$("app").classList.remove("hidden");$("roleTag").textContent=$("role").value.toUpperCase();renderHome()}else alert("Use demo login: admin / school123")};
document.querySelectorAll(".roleDemo").forEach(b=>b.onclick=()=>{$("role").value=b.dataset.role;$("username").value="admin";$("password").value="school123";$("loginBtn").click()});
$("logout").onclick=()=>location.reload();
const studentModules=[
["My Student Profile","👤","Personal Information • Student ID • Grade & Section • Adviser • Guardian Information"],
["Academics","📚","My Subjects • My Schedule • Assignments • Learning Materials"],
["Grades","📊","Current Grades • Quarterly Grades • Final Grades • Report Card • Academic History"],
["Attendance","✅","Daily Attendance • Late Records • Absences • Attendance Summary"],
["My Account","💳","Tuition Balance • Payment History • Official Receipts • Other Fees"],
["School Life","📅","School Calendar • Events • Activities • Holidays • Examination Schedule"],
["Updates","📢","Announcements • Notifications • Teacher Messages • School Messages"],
["Documents","📁","Enrollment Requirements • Certificates • School Forms • Downloadable Documents"],
["Achievements","🏆","Honors • Awards • Certificates • Recognitions"],
["Student Services","🆘","Registrar • Accounting Help • Guidance Office • Technical Help"]
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
"Emergency Contacts":["School Clinic","Local 105 • Guardian: Maria Santos"]
};
const studentSubmenus={
"My Student Profile":["Personal Information","Student ID / QR","Grade & Section","Adviser","Guardian & Emergency Contacts","Security / Change Password"],
"Academics":["My Subjects","My Schedule","Assignments & Submission","Learning Materials","Exam Schedule & Results"],
"Grades":["Current Grades","Quarterly Grades","Final Grades","Report Card","Academic History"],
"Attendance":["Daily Attendance","Late Records","Absences","Submit Absence Explanation","Attendance Summary"],
"My Account":["Tuition Balance","Payment History","Official Receipts","Other Fees"],
"School Life":["School Calendar","Events","Activities","Holidays","Examination Schedule"],
"Updates":["Announcements","Notifications","Teacher Messages","School Messages"],
"Documents":["Enrollment Requirements","Request Document","Request Tracking","Certificates","School Forms","Downloads"],
"Achievements":["Honors","Awards","Certificates","Recognitions"],
"Student Services":["Registrar Help","Accounting Help","Guidance Request","Technical Help","Emergency Contacts"]
};
function openModule(name){current=name;const banner=document.getElementById("studentDemoBanner");if(banner)banner.classList.toggle("hidden",document.getElementById("role").value!=="Student");$("home").classList.add("hidden");$("workspace").classList.remove("hidden");$("wsTitle").textContent=name;$("search").value="";const isStudent=$("role").value==="Student";if(isStudent&&studentSubmenus[name]){ $("addBtn").style.display="none";$("search").style.display="none";$("content").innerHTML='<p class="demoLabel">DEMO STUDENT • MIA SANTOS</p><div class="studentSubmenu">'+studentSubmenus[name].map(x=>{const d=studentDemo[x]||["Demo record","Sample student information"];return '<button type="button" class="subMenuBtn"><div><b>'+x+'</b><small>'+d[0]+'</small><em>'+d[1]+'</em></div><span>Open →</span></button>'}).join("")+'</div>';document.querySelectorAll(".subMenuBtn").forEach(b=>b.onclick=()=>{const key=b.querySelector("b").textContent,d=studentDemo[key]||["Demo record","Sample student information"]; $("content").innerHTML='<div class="studentDetail"><button type="button" class="subBack">← Back to '+name+'</button><p class="demoLabel">DEMO STUDENT • MIA SANTOS</p><h2>'+key+'</h2><div class="demoRecord"><strong>'+d[0]+'</strong><span>'+d[1]+'</span></div><p>Official grades, attendance, payments and profile records are view-only.</p></div>';$("content").querySelector(".subBack").onclick=()=>openModule(name)});return}$("addBtn").style.display="";$("search").style.display="";data[current]??=[];renderRows()}
$("back").onclick=()=>{$("workspace").classList.add("hidden");$("home").classList.remove("hidden")};
function renderRows(){let q=$("search").value.toLowerCase(),rows=(data[current]||[]).filter(r=>r.join(" ").toLowerCase().includes(q));$("content").innerHTML='<div class="table"><table><thead><tr><th>Record</th><th>Details</th><th>Status</th><th></th></tr></thead><tbody>'+ (rows.length?rows.map((r,i)=>'<tr><td><b>'+r[0]+'</b></td><td>'+r[1]+'</td><td><span class="pill">'+r[2]+'</span></td><td><button class="del" data-name="'+encodeURIComponent(r[0])+'">Delete</button></td></tr>').join(""):'<tr><td colspan="4">No records yet. Tap “Add Record”.</td></tr>')+'</tbody></table></div>';document.querySelectorAll(".del").forEach(b=>b.onclick=()=>{let n=decodeURIComponent(b.dataset.name);data[current]=data[current].filter(r=>r[0]!==n);save();renderRows()})}
$("search").oninput=renderRows;$("addBtn").onclick=()=>{$("modal").classList.remove("hidden");$("formTitle").textContent="Add "+current+" Record";$("fName").focus()};$("cancel").onclick=()=>$("modal").classList.add("hidden");$("recordForm").onsubmit=e=>{e.preventDefault();data[current].push([$("fName").value,$("fDetails").value,$("fStatus").value]);save();e.target.reset();$("modal").classList.add("hidden");renderRows()};