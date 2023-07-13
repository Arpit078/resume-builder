import fs from "fs";
export async function resume_builder(
  name,
  entry_number,
  phone,
  emaila,
  emailb,
  branch,
  github_username,
  website_url,
  linkedin_username,
  CGPA,
  CGPA_till,
  years,
  senior_school,
  twelth_grade,
  twelth_year,
  high_school,
  tenth_grade,
  tenth_year,
  projectsArr,
  skillsArr,
  coursesArr,
  porArr,
  miscellaneousArr
) {

let projects = ``;
let skills = ``;
let courses = ``;
let por = ``;
let miscellaneous = ``;


for(let i =0;i<projectsArr.length;i++){
      let temp = `\\resumeProject
      {${projectsArr[i].project_name}} %Project Name
      {${projectsArr[i].under}} %Project Name, Location Name
      {${projectsArr[i].date}} %Event Dates
      {\\href{${projectsArr[i].github_repo}}{\\textbf{Github}}} %Website
      \\resumeItemListStart
        \\item {${projectsArr[i].about}}
      \\resumeItemListEnd
      
      \\vspace{-1mm}`
      projects =projects + temp + '\n'
}
for(let i =0;i<skillsArr.length;i++){
      let temp = `\\resumeSubItem{${skillsArr[i].skill}} % Category
      { ${skillsArr[i].about}}
      %\\vspace{-0.5mm}`
      skills =skills + temp + '\n'
}
for(let i =0;i<coursesArr.length;i++){
      let temp = `\\resumeSubItem{${coursesArr[i].course_category}} % Category
      { ${coursesArr[i].course_arr}}
      %\\vspace{-0.5mm} `
      courses =courses + temp + '\n'
}

for(let i =0;i<porArr.length;i++){
      let temp = `\\resumePOR{${porArr[i].position}} % Position
      {${porArr[i].affiliation}} %Club,Event
      {${porArr[i].tenure_period}} %Tenure Period
`
      por =por + temp + '\n'
}
for(let i =0;i<miscellaneousArr.length;i++){
      let temp = `\\resumePOR{${miscellaneousArr[i].achievement}} % Award
      {${miscellaneousArr[i].about}} % Event
      {${miscellaneousArr[i].year}} %Event Year
  \\vspace{-0.1mm}
`
      miscellaneous =miscellaneous + temp + '\n'
}


let resume = `%-------------------------
% Resume in Latex
% Tex Author : Harsh Mittal, 2018eeb1150@iitrpr.ac.in
% Script Author : Arpit Kumar Verma, 2021eeb1156@iitrpr.ac.in
% License : MIT
%------------------------

%---- Required Packages and Functions ----

\\documentclass[a4paper,11pt]{article}
\\usepackage{latexsym}
\\usepackage{xcolor}
\\usepackage{float}
\\usepackage{ragged2e}
\\usepackage[empty]{fullpage}
\\usepackage{wrapfig}
\\usepackage{lipsum}
\\usepackage{tabularx}
\\usepackage{titlesec}
\\usepackage{geometry}
\\usepackage{marvosym}
\\usepackage{verbatim}
\\usepackage{enumitem}
\\usepackage[hidelinks]{hyperref}
\\usepackage{fancyhdr}
\\usepackage{multicol}
\\usepackage{graphicx}
\\usepackage{cfr-lm}
\\usepackage[T1]{fontenc}
\\setlength{\\multicolsep}{0pt} 
\\pagestyle{fancy}
\\fancyhf{} % clear all header and footer fields
\\fancyfoot{}
\\renewcommand{\\headrulewidth}{0pt}
\\renewcommand{\\footrulewidth}{0pt}
\\geometry{left=0.6cm, top=0.5cm, right=0.6cm, bottom=0.5cm}
% Adjust margins
%\\addtolength{\\oddsidemargin}{-0.5in}
%\\addtolength{\\evensidemargin}{-0.5in}
%\\addtolength{\\textwidth}{1in}
\\usepackage[most]{tcolorbox}
\\tcbset{
  frame code={}
  center title,
  left=0pt,
  right=0pt,
  top=0pt,
  bottom=0pt,
  colback=gray!20,
  colframe=white,
  width=\\dimexpr\\textwidth\\relax,
  enlarge left by=-2mm,
  boxsep=4pt,
  arc=0pt,outer arc=0pt,
}

\\urlstyle{same}

\\raggedright
\\setlength{\\tabcolsep}{0in}

% Sections formatting
\\titleformat{\\section}{
  \\vspace{-4pt}\\scshape\\raggedright\\large
}{}{0em}{}[\\color{black}\\titlerule \\vspace{-7pt}]

%-------------------------
% Custom commands
\\newcommand{\\resumeItem}[2]{
  \\item{
    \\textbf{#1}{:\\hspace{0.5mm}#2 \\vspace{-0.5mm}}
  }
}

\\newcommand{\\resumePOR}[3]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1},\\hspace{0.3mm}#2 & \\textit{\\small{#3}} 
    \\end{tabular*}
    \\vspace{-2mm}
}

\\newcommand{\\resumeSubheading}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#4}} \\\\
        \\textit{\\footnotesize{#3}} &  \\footnotesize{#2}\\\\
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeProject}[4]{
\\vspace{0.5mm}\\item
    \\begin{tabular*}{0.98\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}
        \\textbf{#1} & \\textit{\\footnotesize{#3}} \\\\
        \\footnotesize{\\textit{#2}} & \\footnotesize{#4}
    \\end{tabular*}
    \\vspace{-2.4mm}
}

\\newcommand{\\resumeSubItem}[2]{\\resumeItem{#1}{#2}\\vspace{-4pt}}

% \\renewcommand{\\labelitemii}{$\\circ$}
\\renewcommand{\\labelitemi}{$\\vcenter{\\hbox{\\tiny$\\bullet$}}$}

\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=*,labelsep=0mm]}
\\newcommand{\\resumeHeadingSkillStart}{\\begin{itemize}[leftmargin=*,itemsep=1.7mm, rightmargin=2ex]}
\\newcommand{\\resumeItemListStart}{\\begin{justify}\\begin{itemize}[leftmargin=3ex, rightmargin=2ex, noitemsep,labelsep=1.2mm,itemsep=0mm]\\small}

\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}\\vspace{2mm}}
\\newcommand{\\resumeHeadingSkillEnd}{\\end{itemize}\\vspace{-2mm}}
\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\end{justify}\\vspace{-2mm}}
\\newcommand{\\cvsection}[1]{%
\\vspace{2mm}
\\begin{tcolorbox}
    \\textbf{\\large #1}
\\end{tcolorbox}
    \\vspace{-4mm}
}

\\newcolumntype{L}{>{\\raggedright\\arraybackslash}X}%
\\newcolumntype{R}{>{\\raggedleft\\arraybackslash}X}%
\\newcolumntype{C}{>{\\centering\\arraybackslash}X}%
%---- End of Packages and Functions ------

%-------------------------------------------
%%%%%%  CV STARTS HERE  %%%%%%%%%%%
%%%%%% DEFINE ELEMENTS HERE %%%%%%%
\\newcommand{\\name}{${name}} % Your Name
\\newcommand{\\course}{Bachelor of Technology in ${branch}} % Your Course
\\newcommand{\\roll}{${entry_number}} % Your Roll No.
\\newcommand{\\phone}{${phone}} % Your Phone Number
\\newcommand{\\emaila}{${emaila}} %Email 1
\\newcommand{\\emailb}{${emailb}} %Email 2
\\newcommand{\\github}{${github_username}} %Github
\\newcommand{\\website}{${website_url}} %Website
\\newcommand{\\linkedin}{${linkedin_username}} %linkedin




\\begin{document}
\\fontfamily{cmr}\\selectfont
%----------HEADING-----------------
\\parbox{2.35cm}{%
% \\graphicspath{ {./} }  
\\includegraphics[width=2cm,clip]{iitrpr_logo.jpg}

}\\parbox{\\dimexpr\\linewidth-2.8cm\\relax}{
\\begin{tabularx}{\\linewidth}{L r}
  \\textbf{\\LARGE \\name} & +91-\\phone\\\\
  
  \\course &  \\href{mailto:\\emailb}{\\emailb}\\\\
    {in Electrical Engineering} &  \\href{https://github.com/\\github}{GitHub} $|$ \\href{\\website}{Website}\\\\
  {Indian Institute Of Technology, Ropar} & \\href{https://www.linkedin.com/in/\\linkedin/}{linkedin.com/in/\\linkedin}
\\end{tabularx}
}

\\vspace{-2mm}

%-----------EDUCATION-----------------

\\section{\\textbf{Education}}
\\setlength{\\tabcolsep}{5pt} % Default value: 6pt
% \\renewcommand{\\arraystretch}{1.1} % Default value: 1
\\small{\\begin{tabularx}
{\\dimexpr\\textwidth-2mm\\relax}{|c|C|c|c|}
  \\hline
  \\textbf{Degree } & \\textbf{Institute/Board} & \\textbf{CGPA/Percentage} & \\textbf{Year}\\\\
  \\hline
  Bachelor of Technology in ${branch} & Indian Institute of Technology, Ropar & ${CGPA} (Till ${CGPA_till}th Sem) & ${years}\\\\
  
  %\\hline
  %Minor in CSE & Indian Institute of Technology, Ropar & 8.52 %(Till 6th Sem) & 2018-2022\\\\
  
  \\hline
  Senior Secondary & ${senior_school} & ${twelth_grade}\\% & ${twelth_year} \\\\
  \\hline
  Secondary & ${high_school} & ${tenth_grade}\\% & ${tenth_year} \\\\
  \\hline
\\end{tabularx}}
\\vspace{-1mm}

%-----------PROJECTS-----------------
\\section{\\textbf{Projects}}
\\resumeSubHeadingListStart
    

    ${projects}
    
      
  \\resumeSubHeadingListEnd
\\vspace{-7.5mm}

\\section{\\textbf{Technical Skills}}
  \\resumeHeadingSkillStart
  
    ${skills}
    
  
  \\resumeHeadingSkillEnd

\\vspace{-1.5mm}

\\section{\\textbf{Key courses taken}}
\\resumeHeadingSkillStart
      
    ${courses}

  \\resumeHeadingSkillEnd

\\vspace{-1mm}


\\section{\\textbf{Positions of Responsibility}}
\\vspace{-0.4mm}
\\resumeSubHeadingListStart

  ${por}

\\resumeSubHeadingListEnd
\\vspace{-4mm}


\\section{\\textbf{Miscellaneous}}
\\vspace{-0.1mm}
\\resumeSubHeadingListStart

  ${miscellaneous}

\\vspace{-1.2mm}
\\resumeSubHeadingListEnd
% \\vspace{-2mm}
\\hspace*{-5mm}\\rule{1.035\\textwidth}{0.1mm}


%-------------------------------------------
\\end{document}
  `;


await fs.writeFile("resume.tex", resume, (err) => {
    if (err) {
      console.error("An error occurred while writing the file:", err);
    } 
  });
}
