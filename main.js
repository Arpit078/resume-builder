#! /usr/bin/env node
import {exec} from 'child_process'
import { resume_builder } from './resume_builder.js';
import { data_extractor } from './sheets.js';
import axios from 'axios';
import fs from 'fs';
import readline from 'readline';
const questionAsync = (question) => {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      answer = extractSpreadsheetId(answer)
      rl.close();
      resolve(answer);
    });
  });
};
const extractSpreadsheetId = async (url) => {
  const regex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
  const match = await url.toString().match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
};

const spreadsheetId= await questionAsync(`Please enter the google sheet url, also please share the sheet with "resume-builder@resume-builder-392620.iam.gserviceaccount.com" with viewer permissions : \n`)
const downloadFile = async (url, filename) => {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  const path = `./${filename}`;
  const writer = fs.createWriteStream(path);

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
};

const data = await data_extractor(spreadsheetId)
console.log(data)

resume_builder(
  data.name,
  data.entry_number,
  data.phone,
  data.emaila,
  data.emailb,
  data.branch,
  data.github_username,
  data.website_url,
  data.linkedin_username,
  data.CGPA,
  data.CGPA_till,
  data.years,
  data.senior_school,
  data.twelth_grade,
  data.twelth_year,
  data.high_school,
  data.tenth_grade,
  data.tenth_year,
  data.projects,
  data.skills,
  data.courses,
  data.por,
  data.miscellaneous
)



const fileUrl = 'https://drive.google.com/uc?export=download&id=1VkBokaCrhby6xc8iVx-OI44ceVHLQaGr';
const filename = 'iitrpr_logo.jpg';
await downloadFile(fileUrl,filename)

await   exec("pdflatex resume.tex", (err, stdout, stderr) => {
    if (err) {
      console.error(err);
    } else {
      console.log(stdout);
      fs.unlink('./resume.aux',(err)=>{console.error(err)})
      fs.unlink('./resume.out',(err)=>{console.error(err)})
      fs.unlink('./resume.log',(err)=>{console.error(err)})
      fs.unlink('./iitrpr_logo.jpg',(err)=>{console.error(err)})
    }
  });
