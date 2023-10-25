const { google } = require('googleapis');
require('dotenv').config();

const auth = 'AIzaSyCXxtdwHaG8El3vmEvxHguigAv-efFq62Q'; // Assuming this is your API key
const sheets = google.sheets({
  version: 'v4',
  auth, // You need to provide 'auth' here, not 'GGAPI'
});

const spreadsheetId = process.env.GOOGLE_SHEET_ID;
const range ='A1:B2';
const majorDimension ='ROWS';
const numRows = ''

sheets.spreadsheets.values.get(
  {
    spreadsheetId, // Correct the property name
    range, 
    majorDimension,
  },
  (err, res) => {
    if (err) {
      console.error('The API returned an error: ' + err);
      return;
    }

    numRows = res.data.values ? res.data.values.length : 0;

    console.log(`${numRows} rows retrieved.`);
    console.log(res.data.values); // Log the retrieved values
  }
);



module.exports = numRows;
