module.exports = {
  clear : function() {
    process.stdout.write('\x1B[2J\x1B[0f');
  },
};
