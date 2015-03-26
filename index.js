/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-pushy',

  included: function(app) {
    this._super.included(app);
    app.import('vendor/pushy/css/pushy.css');
  }
};
