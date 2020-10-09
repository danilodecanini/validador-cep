const Youch = require('youch');

module.exports = {
  async exceptionHandler(err, req, res, next) {
    if (process.env.NODE_ENV !== 'production') {
      const errors = await new Youch(err, req).toJSON();
      return res.status(500).json(errors);
    }

    return res.status(500).json({ error: 'Internal server error' });
  },
};
