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


const getPassedDays = () => {
    const AD = new Date(Date.UTC(2021, 8, 16))  // 16.09.2021 - нулевая дата
    const now = new Date()
    return Math.floor((now - AD) / (1000 * 3600 * 24))
}


const view = {
    days: getPassedDays()
}

generateReadMe(view)
