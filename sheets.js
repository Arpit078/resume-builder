import { google } from 'googleapis';
import fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';
import {dirname} from 'path'


// Load credentials from the JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = path.join(__dirname, 'credentials.json');

const credentials = JSON.parse(fs.readFileSync(filePath));

// Set up authentication
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// Create a Sheets client
const sheets = google.sheets({ version: 'v4', auth });

// ID of the spreadsheet you want to access

export async function data_extractor(spreadsheetId) {
  const data = {};

  try {
    // Retrieve data from 'basic' sheet
    const basicRange = 'basic';
    const basicData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: basicRange,
    });
    const basicRows = basicData.data.values;
    if (basicRows.length) {
      for (let i = 0; i < basicRows.length; i++) {
        data[basicRows[i][0]] = basicRows[i][1];
      }
    }

    // Retrieve data from other sheets
    const sheetsToRetrieve = ['projects', 'skills', 'courses', 'por', 'miscellaneous'];

    for (const sheet of sheetsToRetrieve) {
      const range = `${sheet}`;
      const sheetData = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range,
      });
      const rows = sheetData.data.values;
      if (rows.length) {
        const attributesCount = rows[0].length;
        const sheetBox = [];
        for (let i = 1; i < rows.length; i++) {
          const temp = {};
          for (let j = 0; j < attributesCount; j++) {
            temp[rows[0][j]] = rows[i][j];
          }
          sheetBox.push(temp);
        }
        data[sheet] = sheetBox;
      }
    }
  } catch (err) {
    console.error('An error occurred while retrieving data:', err);
  }

  return data;
}

