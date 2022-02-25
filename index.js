
const MessageFormat = require("@messageformat/core");
const compileMessageModule = require("@messageformat/core/lib/compile-module");


const messagePacks = {
    "en": {
      es: "Estimation Date: {date, date, ::EEEMMMd}",
      fi: "Financial Incentive Date: {date, date, ::EEEMMMd}",
    },
  };
  
  const mf = new MessageFormat("*");
  console.log(compileMessageModule(mf, messagePacks));