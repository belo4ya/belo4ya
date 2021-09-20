const Mustache = require('mustache');
const fs = require('fs');


const generateReadMe = (view) => {
    const template = './dist/readme.mustache';
    fs.readFile(template, (err, data) => {
        if (err) throw err;
        fs.writeFileSync('README.md', Mustache.render(data.toString(), view));
    });
}


const getPassedDays = (startDate) => {
    const now = new Date();
    const offset = 3 * 60 * 60 * 1000;
    return Math.floor((now - startDate + offset) / (24 * 60 * 60 * 1000));
}


const startDate = new Date(Date.UTC(2021, 8, 16));

const view = {
    startDate: startDate.toLocaleDateString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(new RegExp('/', 'g'), '.'),
    days: getPassedDays(startDate)
};

generateReadMe(view);
