const express = require("express");
const moment= require("moment")
const app = express();

app.get("/api", (req, res) => {
  const { slack_name, track } = req.query;
  // const slackName = req.query.slack_name || 'example_name';
  // const track = req.query.track || 'backend'
  //   // json response
  const jsonResponse = {
    slack_name: slack_name,
    current_day: moment().format("dddd"), //  toISOString('en-US',{timeZone: 'Africa/Lagos',weekday:'long'}),
    utc_time: moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]"),
    track: track,
    github_file_url:
      "https://github.com/beejayarts/hng_backend_task1/blob/main/index.js",
    github_repo_url: "https://github.com/beejayarts/hng_backend_task1",
    status_code: 200,
  };

  res.json(jsonResponse);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
