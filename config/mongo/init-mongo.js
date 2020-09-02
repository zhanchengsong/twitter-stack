db.createUser({
  user: "twitter",
  pwd: "twitterPassword",
  roles: [
      {
          role: "readWrite",
          db: "twitter"
      }
  ]
})