const express = require("express");
const app = express();

app.get("/api", (req, res) => {

const slackName = req.query.slack_name || 'example_name';
const track = req.query.track || 'backend'
  // json response
  const jsonResponse = {
    slack_name: "BenjaminOnuoha",
    current_day: new Date().toISOString('en-US',{timeZone: 'Africa/Lagos',weekday:'long'}),
    utc_time: new Date().toISOString().replace(/\.\d{3}$/,'Z'),
    track: "backend",
    github_file_url: "https://github.com/beejayarts/hng_backend_task1/blob/main/index.js",
    github_repo_url: "https://github.com/beejayarts/hng_backend_task1",
    status_code: 200,
  };

  res.json(jsonResponse)
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`server is running on port ${PORT}` ))
