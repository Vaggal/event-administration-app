let res = [
  db.events.drop(),
  db.events.insert({
    title: "Concert 1",
    date: new Date("2021-10-21T16:00:00Z"),
    location: { latitude: 51.5073219, longitude: -0.1276474 },
  }),
  db.events.insert({
    title: "Concert 2",
    date: new Date("2021-10-25T21:00:00Z"),
    location: { latitude: 52.5170365, longitude: 13.3888599 },
  }),
  db.events.insert({
    title: "Concert 3",
    date: new Date("2021-10-28T18:00:00Z"),
    location: { latitude: 40.4167047, longitude: -3.7035825 },
  }),
];

printjson(res);

db.createUser({
  user: "test",
  pwd: "testpass",
  roles: [
    {
      role: "readWrite",
      db: "eventsDB",
    },
  ],
});
