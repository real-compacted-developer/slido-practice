const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const http = require("http");

const normalizePort = require("./function/normalizePort");
const onError = require("./function/onError");

const apiRouter = require("./api/entryPoint");

const port = normalizePort(process.env.PORT || "3000");
const app = express();

const dao = require("./database/dao");
dao.setDefault();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.send("error");

  next();
});

app.set("port", port);

const server = http.createServer(app);
server.listen(port);
server.on("error", onError);
