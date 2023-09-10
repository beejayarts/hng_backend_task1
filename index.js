const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // json response
  const jsonResponse = {
    slack_name: "BenjaminOnuoha",
    current_day: "Monday",
    utc_time: "2023-08-21T15:04:05Z",
    track: "backend",
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  };
});
