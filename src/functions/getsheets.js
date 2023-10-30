const { google } = require('googleapis');

const serviceAccountKeyFile = "./src/config/credentials.json";

const auth = new google.auth.GoogleAuth({
  keyFilename: serviceAccountKeyFile,
  scopes: ['https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive'],
});

const sheets = google.sheets({
  version: 'v4',
  auth: auth,
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
};

async function updateForumId(cell, newId) {
  const ranges = 'data!' + cell;
  const values = [[newId]];

  try {
    await sheets.spreadsheets.values.update({
      auth: auth,
      includeValuesInResponse: true,
      valueInputOption: 'RAW',
      spreadsheetId: '1b39fuiHyd18wOPqiAYe4Z2DKO4atPldGKKMdUrNI2r8',
      range: ranges,
      resource: { values: values },
    });
  } catch (error) {
    console.error('Error update data to Google Sheets:', error);
    throw error;
  }
}
module.exports = {
  fetchData,
  updateForumId,
};