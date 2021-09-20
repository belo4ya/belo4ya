import mustache from "mustache/mustache.mjs";
import fs from 'fs';


const generateReadMe = (view) => {
    const template = './dist/readme.mustache';
    fs.readFile(template, (err, data) => {
        if (err) throw err;
        fs.writeFileSync('README.md', mustache.render(data.toString(), view));
    });
};


const getPassedDays = (startDate) => {
    const now = new Date();
    const offset = 3 * 60 * 60 * 1000;
    return Math.floor((now - startDate + offset) / (24 * 60 * 60 * 1000));
};


const startDate = new Date(Date.UTC(2021, 8, 16));

const view = {
    startDate: startDate.toLocaleDateString('ru-RU'),
    days: getPassedDays(startDate)
};

generateReadMe(view);
