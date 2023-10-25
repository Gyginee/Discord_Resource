const { google } = require('googleapis');

const sheets = google.sheets({
    version: 'v4',
    auth: 'AIzaSyCXxtdwHaG8El3vmEvxHguigAv-efFq62Q' // Replace with your actual API key
});

async function fetchData() {
  try {
      const response = await sheets.spreadsheets.values.get({
          spreadsheetId: '1b39fuiHyd18wOPqiAYe4Z2DKO4atPldGKKMdUrNI2r8',
          range: 'data', // Replace with the actual range you want to fetch
          majorDimension: 'ROWS',
      });
      return response.data.values; // This should be an array of arrays
  } catch (error) {
      console.error('Error fetching data from Google Sheets:', error);
      return null;
  }
}

module.exports = {
  fetchData,
};