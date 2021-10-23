let res = [
  db.events.drop(),
  db.events.insert({
    organizer: "Organizer 1",
    title: "Concert 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date("2021-10-21T16:00:00Z"),
    address: "20 Stirling Rd, St. Leonards-On-Sea, TN38 9NP, UK",
  }),
  db.events.insert({
    organizer: "Organizer 2",
    title: "Concert 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date("2021-10-25T21:00:00Z"),
    address: "19 Primrose Close, Spennymoor, DL16 7YE, UK",
  }),
  db.events.insert({
    organizer: "Organizer 3",
    title: "Concert 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: new Date("2021-10-28T18:00:00Z"),
    address: "69 The Exchange, High Rd, Ilford, IG1 1AS, UK",
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
