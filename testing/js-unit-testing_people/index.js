export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => `${person.firstName} ${person.lastName}`);
}

// export function getNameAndAge(people) {}

// export function getPeopleByAge(people, age) {}

// export function getPeopleNamesOlderThan(people, age) {}

// export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

// export function isAnyoneOlderThan(people, age) {}

// export function getFullNamesSortedByAge(people) {}
