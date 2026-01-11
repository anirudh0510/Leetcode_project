const { createClient } = require("redis");

const redisClient = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: "redis-14089.c16.us-east-1-2.ec2.cloud.redislabs.com",
    port: 14089,
  },
});

module.exports = redisClient;
