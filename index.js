const nodemailer = require('nodemailer');
const {google} = require('googleapis'); 

const CLIENT_ID = '776186112605-50oga3nqvnerhqdpess5sd1qshdkj6pf.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04493nRbj9OYMCgYIARAAGAQSNwF-L9IreqO-axc_OAOGGpJih3LLBOlCXUaRQvYdvu21Beoz7G96Iu60WSppfzDqnKo62UzQgc0' 

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);