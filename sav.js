const { GoogleSpreadsheet } = require('google-spreadsheet'); 
const { JWT } = require('google-auth-library');

const SCOPES = [
  'https://www.googleapis.com/auth/spreadsheets',
  'https://www.googleapis.com/auth/drive.file',
];

const creds = require('./sheetdiscord-402817-6b1d48cc4e4a.json');

const {
  client_email,
  private_key
} = creds;


module.exports = class SheetClient {

  constructor() {

    const auth = new JWT({
      email: client_email,
      key: private_key,
      scopes: SCOPES
    });

    this.doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID, auth);

    console.log(this.doc)
    

    console.log(auth)

  }

  async getRows(offset, limit) {
    await this.doc.loadInfo();

    const sheet = this.doc.sheetsById[process.env.WORKSHEET]; 
    
    const rows = await sheet.getRows({
       offset, limit 
    });

    return rows;
  }

};