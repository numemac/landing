// fetch https://veganism.social/api/v1/instance and then store it in json/instance.json

const fs = require('fs');
const fetch = require('node-fetch');
const sharp = require('sharp');

fetch('https://veganism.social/api/v1/instance')
    .then(response => response.json())
    .then(data => fs.writeFileSync('public/instance.json', JSON.stringify(data, null, 2)));

fetch('https://veganism.social/api/v1/directory?local=true?limit=80')
    .then(response => response.json())
    .then(data => {
        fs.writeFileSync('public/directory.json', JSON.stringify(data, null, 2))

        data.forEach((acct) => {
            fetch(`${acct.avatar_static}`)
                .then(response => response.buffer())
                .then(buffer => sharp(buffer))
                .then(sharp => {
                    sharp
                        .webp()
                        .toFile(`./public/avatars/${acct.acct}.webp`)


                    sharp
                        .resize(100, 100)
                        .webp()
                        .toFile(`./public/avatars/${acct.acct}-100.webp`)
                })
                .catch(err => console.log(err));
        });
    });

['./public/team', './public/featured', './public/avatars'].forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
});

['nm', 'Ellie', 'beforewisdom', 'melissaratisher', 'carlile', 'cinzalorxu'].forEach((acct) => {
    fetch(`https://veganism.social/api/v1/accounts/lookup?acct=${acct}`)
        .then(response => response.json())
        .then(data => {
            fs.writeFileSync(`public/team/${acct}.json`, JSON.stringify(data, null, 2))

            console.log(data.avatar_static)
            fetch(`${data.avatar_static}`)
                .then(response => response.buffer())
                .then(buffer => sharp(buffer))
                .then(sharp => {
                    sharp
                        .webp()
                        .toFile(`./public/avatars/${data.acct}.webp`)

                    sharp
                        .resize(364, 243, {
                            fit: 'cover',
                            position: 'center',
                        })
                        .webp()
                        .toFile(`./public/avatars/${data.acct}-364-243.webp`)
                })
                .catch(err => console.log(err));
        })
});


['liftingveganlogic', 'animalsavemovement', 'algorithm', 'foaorg', 'vegangaze'].forEach((acct) => {
    fetch(`https://veganism.social/api/v1/accounts/lookup?acct=${acct}`)
        .then(response => response.json())
        .then(data => {
            fs.writeFileSync(`public/featured/${acct}.json`, JSON.stringify(data, null, 2))
            fetch(`${data.avatar_static}`)
            .then(response => response.buffer())
            .then(buffer => sharp(buffer))
            .then(sharp => {
                sharp
                    .webp()
                    .toFile(`./public/avatars/${data.acct}.webp`)

                // resize and crop to 176 x 264 (2:3)
                sharp
                    .resize(176, 264, {
                        fit: 'cover',
                        position: 'center',
                    })
                    .webp()
                    .toFile(`./public/avatars/${data.acct}-176-264.webp`)
            })
            .catch(err => console.log(err));
        });
});
