const express = require('express');
const _ = require('lodash');

const app = express();
app.get('/', (_req, res) => {
  res.json({ msg: 'Interdependent demo', lodash: _.VERSION });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
}

module.exports = app;

# add context.
