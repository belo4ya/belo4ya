const Mustache = require('mustache')
const fs = require('fs')


const generateReadMe = (view) => {
    const template = './dist/readme.mustache'
    fs.readFile(template, (err, data) => {
        if (err) throw err
        const rendered = Mustache.render(data.toString(), view)
        fs.writeFileSync('README.md', rendered)
    })
}


const getPassedDays = (startDate) => {
    const now = new Date()
    return Math.floor((now - startDate) / (1000 * 3600 * 24))
}


const startDate = new Date(Date.UTC(2021, 8, 16))

const view = {
    startDate: startDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(new RegExp('/', 'g'), '.'),
    days: getPassedDays(startDate)
}

generateReadMe(view)
