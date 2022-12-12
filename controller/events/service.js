import * as dao from "../events/dao.js";

export default (app) => {
  app.get("/event/:id/fetch", fetchEventById);
  app.get("/event", getAllEvents);
  app.post("/event", createEvent);
  app.get("/event/:searchString", searchEventByKeywords);
  app.get("/event/:uid/:eid/apply", applyJob);
  app.get("/event/:uid/:eid/unapply", unapplyJob);
  app.get("/event/today", getTodayEvents);
  app.get("/latestposts", getLatestPosts);
};

const getAllEvents = (req, res) =>
  dao.getAllEvents().then((events) => res.json(events));

const createEvent = (req, res) =>
  dao.createEvent(req.body).then((createEvent) => res.json(createEvent));

const searchEventByKeywords = (req, res) => {
  dao
    .searchEventByKeywords(req.params.searchString)
    .then((results) => res.json(results));
};

const applyJob = (req, res) => {
  dao.applyJob(req.params.uid, req.params.eid)
      .then((status) => res.send(status));
};

const unapplyJob = (req, res) => {
  dao.unapplyJob(req.params.uid, req.params.eid)
    .then((status) => res.send(status));
};

const getTodayEvents = (req, res) =>
  dao.getTodayEvents().then((events) => res.json(events));

const getLatestPosts = (req, res) =>
  dao.getLatestPosts().then((events) => res.json(events));

const fetchEventById = (req, res) =>
  dao.fetchEventById(req.params.id).then((event) => res.json(event));
