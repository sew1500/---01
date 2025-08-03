const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "&qItSCQyI#8QLMiRwQDVCw-wYPhFiXqHUm47djPrmfgi7zEUL0WcI",
OWNER_NUMBER: process.env.OWNER_NUMBER || "94770349867",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/1tQYm6zR/4z-S9-P9-Rhm9.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLO IM PRIME ALPHA-XMD CREATED BY SHERON <NOW ALIVE> ",
};
