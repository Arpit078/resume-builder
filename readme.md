# About
NodeJS CLI tool to create and update your resume by just maintaining a google sheet.

# Requirements
NodeJS and any latex software installed on your pc.<br>
Go with https://miktex.org/download.<br>
Make sure "pdflatex" is accessible in your terminal.

# Usage
1. download the excel sheet from https://docs.google.com/spreadsheets/d/1SQy7sRQvNfkfm7kDfkTQedGE-MBO_8XITbd0Jxo5Fj0/edit?usp=sharing
2. fill in your details and upload on google drive.
3. share the sheet with resume-builder@resume-builder-392620.iam.gserviceaccount.com.
4. set the permission to be viewer.
5. install miktex or any other latex software.
6. run
```
npx resume-builder-iitrpr
```
7. for the first time it is going to ask for certain latex packages to be installed just go through.
8. voilla there is a resume.pdf in the directory you executed the command.
9. There is resume.tex also you can use to customise your resume further.
10. Just make a bat file to execute this commmand on every machine startup and there you have it your resume auto updated every time you log in, just make sure you keep updating your gsheet:}


# Note
## do not use any special characters in the google sheet such as {},\ etc it might break pdflatex.

# Demonstration

https://github.com/Arpit078/resume-builder/assets/92263716/39519ac1-c1fe-44ea-9c6b-ea903735f50a


