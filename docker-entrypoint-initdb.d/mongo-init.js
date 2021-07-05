print("Start creating database ##########################");
db1 = db.getSiblingDB("api_dev_db");
db1.createUser({
  user: "api_user",
  pwd: "api1234",
  roles: [{ role: "readWrite", db: "api_dev_db" }],
});

db2 = db.getSiblingDB("api_test_db");
db2.createUser({
  user: "api_user",
  pwd: "api1234",
  roles: [{ role: "readWrite", db: "api_test_db" }],
});
db2.meals.insertOne({
  name: "Guiso",
  desc: "Alto guiso",
});
db2.meals.insertOne({
  name: "Burger con Chendlar",
  desc: "Hamburguesa con queso chedlar",
});
db2.users.insertOne({
  email: "ikakaotsu@gmail.com",
  password:
    "TdPYc8Pbf+7cVXMuY/AyGk4w58vZUfkYEwZZg7oDgG6djbR1i/BPrNE1rjpEmDj+TlNyOMrfHEY+3aP6SBCSVw==",
  salt: "St3yIqWP8wrt0HgtmtT/iA==",
  role: "admin",
});
print("End creating database ##########################");
