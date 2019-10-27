
// Routes
// =============================================================
const defaultPath = () => {
  app.get("/", function(req, res) {
    if (err) {
      return res.status(500).end();
    }

    {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }
  });
};

const homePath = () => {
  app.get("/home", function(req, res) {
    if (err) {
      return res.status(500).end();
    }

    {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    }
  });
};

const surveyPath = () => {
  app.get("/survey", function(req, res) {
    if (err) {
      return res.status(500).end();
    }

    {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    }
  });
};

module.exports = {
  defaultRoute : defaultPath,
  home : homePath,
  survey: surveyPath
};