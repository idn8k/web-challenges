import { createServer, request } from 'node:http'

// export const server = …

export const server = createServer((request, Response) => {
    Response.end('Hello, Idan')
})

// import { readFileSync } from 'node:fs'
// import { createServer } from 'node:http'

// // similar to element.addEventListener()
// const server = createServer((request, response) => {
//     if (request.url === '/api/bad-jokes') {
//         const data = readFileSync('./data.json')
//         console.log('data requested')
//         response.end(data)
//         return
//     }

//     const htmlfile = readFileSync('./index.html')
//     response.end(htmlfile)
// })

// server.listen(3000, () => {
//     console.log('server up and running on http://localhost:3000')
// })
