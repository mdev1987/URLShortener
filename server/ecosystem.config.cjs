module.exports = {
  apps: [
    {
      name: "url-shortener-server",
      script: "./dist/app.js",
      exec_mode: "cluster",
      instances: "max"
    }
  ]
}