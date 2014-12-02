'use strict';

var MMMCalc = require('../lib/mean_median_mode.js');

module.exports = function(app) {
  app.post('/api/mmmCalc', function(req, res) {
    res.send({
      mean: MMMCalc.mean(req.body),
      median: MMMCalc.median(req.body),
      mode: MMMCalc.mode(req.body)
    });
  });
};
