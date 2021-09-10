const express = require("express");
const app = express();
const faker = require("faker")
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

class User {
  constructor(){
    this.id = faker.datatype.number()
    this.firstName = faker.name.firstName()
    this.lastName = faker.name.lastName()
    this.phoneNumber = faker.phone.phoneNumber()
    this.email = faker.internet.email()
    this.password = faker.internet.password()
  }
}

class Company{
  constructor(){
    this.id = faker.datatype.number()
    this.name = faker.company.companyName()
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  }
}

// req is short for request
// res is short for response
app.get("/api/users/new", (req, res) => {
  res.json( new User );
});

app.get("/api/companies/new", (req, res) => {
  res.json( new Company );
});

app.get("/api/user/companies", (req, res) => {
  const user = new User;
  const company = new Company;
  res.json( {User: user, Company: company} );
});

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
