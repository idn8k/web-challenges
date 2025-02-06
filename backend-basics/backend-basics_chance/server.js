import { createServer } from 'node:http'
import Chance from 'chance'

const chance = new Chance()

export const server = createServer((request, response) => {
    if (request.url === '/api/person/1') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/plain')
        const person = {
            name: chance.name(),
            age: chance.age(),
            profession: chance.profession(),
        }

        response.end(
            `Hello, my name is ${JSON.stringify(
                person.name
            )} and I am ${JSON.stringify(
                person.age
            )} years old. I am a ${JSON.stringify(person.profession)}.`
        )
    } else {
        response.statusCode = 400
        response.end('Not found...')
    }
})
