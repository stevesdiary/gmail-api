const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const dotenv = require('dotenv');

const CLIENT_ID = '776186112605-tpm7ookqr5n8udmrnap0d51ic1k44n0v.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04hZ-Ub2EM5GKCgYIARAAGAQSNwF-L9IrrCfrNEgdp1M_TYJaZYjqqM6485g0vcGFWZ7duv6l96TuZx3rmxnKyPlOM3eO-2YS2t8' 


const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN }); 

async function sendMail(){
   try {
      const accessToken = await oAuth2Client.getAccessToken();

      const transport = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            type: 'OAuth2',
            user: 'stephenoyeyemi@gmail.com',
            clientId: 'CLIENT_ID', 
            clientSecret: 'CLIENT_SECRET',  
            refreshToken: 'REFRESH_TOKEN',
            accessToken: 'ACCESS_TOKEN',
         }
      })
      
      const mailOptions = {
         from: 'STEPHEN <stephenoyeyemi@gmail>',
         to: 'steveoyeyemi@gmail.com',
         subject: 'Hello from Stephen Using Gmail API',
         html: '<h1>Here is my first email using Nodemailer</h1>',
      }

      const result = await transport.sendMail(mailOptions)
         return result
      
   }catch(error){
      return error;
   }

}

sendMail().then((result) => console.log('Email sent successfully!', result))
   .catch((error) => console.log(error.message));
   
