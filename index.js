const server = require('./api/server.js');

const port = process.env.PORT || 5555;
server.listen(port, () => console.log(`\n** Running on port ${port} for DB-2 Guided**\n`));
