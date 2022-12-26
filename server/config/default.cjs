module.exports = {
    port: process.env.PORT || 3500,
    mongodb_url: process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/short_url",
    origin: process.env.ORIGIN || "http://localhost:3000"
}