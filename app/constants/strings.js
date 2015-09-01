let Strings = {};


Strings['default'] = {
  language: 'default'
};


Strings['pt-BR'] = Object.assign({}, Strings['en-US'], {
  language: 'pt-BR',

  App: {
    FooterText: "Footer text here"
  },

});

module.exports = Strings['pt-BR'];
