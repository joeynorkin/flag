const clear = require('./util.js').clear;

var moduleAttributes = {
  flagsEntered : {
    '--user' : null,
    '--group' : null,
    '--version' : null,
    '--website' : null,
  },

  flags : [],

  getFlags : function() {},

  grab : function(flag) {
    var index = process.argv.indexOf(flag);
    return (index !== -1) ? process.argv[index+1] : null;
  },

  message : "",

  prepareFlagMessage : function() {},

  outputFlags : function (appName = "<app-name>") {
    if (this.message !== "") {
      clear();
      console.log(this.message);
    } else {
      console.log("You haven't entered any arguments");
      console.log("Run app with the command line argument 'help'");
      console.log(`\n\t$ node ${appName} help\n`);
    }
  },

};

moduleAttributes.flags = Object.keys(moduleAttributes.flagsEntered);

moduleAttributes.getFlags = function(appName = "<app-name>") {
  if (process.argv[2] === "help") {
    console.log(`You can run\n\n\t$ node ${appName}\n\nwith the following flags:`);
    console.log(`\n\t${this.flags.join('\n\t')}`);
    process.exit();
  } else {
    for (var flag of this.flags) {
      this.flagsEntered[flag] = this.grab(flag);
    }
  }
};

moduleAttributes.prepareFlagMessage = function() {
  var outputMsg = "";

  for (var flag of this.flags) {
    flagName = flag[2].toUpperCase() + flag.substring(3)

    outputMsg += (this.flagsEntered[flag] !== null) ?
      `\n${flagName}: ${this.flagsEntered[flag]}` : "";
  }

  this.message = outputMsg.trim()
};

module.exports = moduleAttributes;
