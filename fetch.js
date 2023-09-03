// fetch https://veganism.social/api/v1/instance and then store it in json/instance.json

const fs = require('fs');
const fetch = require('node-fetch');

fetch('https://veganism.social/api/v1/instance')
    .then(response => response.json())
    .then(data => fs.writeFileSync('public/instance.json', JSON.stringify(data, null, 2)));

fetch('https://veganism.social/api/v1/directory?local=true?limit=80')
    .then(response => response.json())
    .then(data => fs.writeFileSync('public/directory.json', JSON.stringify(data, null, 2)));

['./public/team', './public/featured'].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

['nm', 'Ellie', 'beforewisdom', 'melissaratisher', 'carlile', 'cinzalorxu'].forEach((acct) => {
    fetch(`https://veganism.social/api/v1/accounts/lookup?acct=${acct}`)
        .then(response => response.json())
        .then(data => fs.writeFileSync(`public/team/${acct}.json`, JSON.stringify(data, null, 2)));
});

['liftingveganlogic', 'animalsavemovement', 'algorithm', 'foaorg', 'vegangaze'].forEach((acct) => {
    fetch(`https://veganism.social/api/v1/accounts/lookup?acct=${acct}`)
        .then(response => response.json())
        .then(data => fs.writeFileSync(`public/featured/${acct}.json`, JSON.stringify(data, null, 2)));
});
