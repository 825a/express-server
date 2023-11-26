# express-server
 
in cmd (express-server path): npm install

create config.env file with MONGO_URI and PORT specified

add your IP to Atlas

in cmd: node server.js > app.log

get data:
http://localhost:[PORT]/gene?id=[Gene_ID]

get gene-ids:
http://localhost:[PORT]/gene-ids

example:
http://localhost:5005/gene?id=AT1G01020