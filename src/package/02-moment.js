const moment = require('moment');

// const date = new Date(2023, 3, 9);

// const dateWrapper = moment(date).format('YYYY/MM/DD - HH/mm');

const dateWrapper = moment().format('YYYY/MM/DD - HH/mm');

const localizationDate = moment().locale();

const relativeTime = moment().startOf('day').fromNow();

console.log(dateWrapper);
console.log(localizationDate);
console.log(relativeTime);