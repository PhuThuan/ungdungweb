const app = require('./app');
const config =require('./app/config');

// start the server
const PORT=config.app.port;
app.listen(PORT,()=>{
console.log(`server is listening on ${PORT}`);
});

