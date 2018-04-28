const Promise = require('bluebird');
const db = require('./db/db.js')
const { Activities, User, Membership } = require('./db/models')

const activities = [
    {
        status: 'Active',
        name: "Felicia's Bachelorette",
        category: "Bachelorette",
        description: "We are planning to split the hotel and book some activities together",
        image: 'https://www.weddinc.com/wp-content/uploads/2016/09/bridemaids.jpg'

    },
    {
        status: 'Active',
        name: 'Bahamas Trip',
        category: "Nick's Birthday",
        description: "Celebrate Nick's Birthday in the bahamas with all his friends",
        image: "http://cache.marriott.com/Images/EventsandMeetings/Weddings/Weddings%20SEO/Main%20Page/weddingmain-12unit-SH-2.1.jpg"
    },
    {
        status: 'Completed',
        name: "Communal Lawnmower",
        category: "Goods",
        description: "Let's buy a lawnmower that we can rotate and use whenever is needed",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_erPo1VFNwr7SVMuss63Sl5eRbcZLvrpBVgnqwus1zJXTPujOA"
    }
]





// --------------------------------------------- USERS START ----------------------------------------------


const chance = require('chance')(123);
const toonAvatar = require('cartoon-avatar');

const numUsers = 100;
const emails = chance.unique(chance.email, numUsers);

function doTimes(n, fn) {
    const results = [];
    while (n--) {
        results.push(fn());
    }
    return results;
}

function randPhoto(gender) {
    gender = gender.toLowerCase();
    const id = chance.natural({
        min: 1,
        max: gender === 'female' ? 114 : 129
    });
    return toonAvatar.generate_avatar({ gender: gender, id: id });
}

function randUser() {
    const gender = chance.gender();
    return User.build({
        name: [chance.first({ gender: gender }), chance.last()].join(' '),
        photo: randPhoto(gender),
        phone: chance.phone(),
        email: emails.pop(),
        password: chance.word(),
        isAdmin: chance.weighted([true, false], [5, 95])
    });
}

function randTitle() {
    const numWords = chance.natural({
        min: 1,
        max: 8
    });
    return chance.sentence({ words: numWords })
        .replace(/\b\w/g, function (m) {
            return m.toUpperCase();
        })
        .slice(0, -1);
}

function randStory(createdUsers) {
    const user = chance.pick(createdUsers);
    const numPars = chance.natural({
        min: 3,
        max: 20
    });
    return Story.build({
        author_id: user.id,
        title: randTitle(),
        paragraphs: chance.n(chance.paragraph, numPars)
    });
}

function generateUsers() {
    const users = doTimes(numUsers, randUser);
    users.push(User.build({
        name: 'Zeke Nierenberg',
        photo: toonAvatar.generate_avatar({ gender: 'male' }),
        phone: '(510) 295-5523',
        email: 'zeke@zeke.zeke',
        password: '123',
        isAdmin: false
    }));
    users.push(User.build({
        name: 'Omri Bernstein',
        photo: toonAvatar.generate_avatar({ gender: 'male' }),
        phone: '(781) 854-8854',
        email: 'omri@omri.omri',
        password: '123',
        isAdmin: true
    }));
    users.push(User.build({
        name: 'Kate Humphrey',
        photo: toonAvatar.generate_avatar({ gender: 'female' }),
        phone: '(555) 623-7878',
        email: 'kate@kate.kate',
        password: '123',
        isAdmin: true
    }));
    return users;
}

function createUsers() {
    return Promise.map(generateUsers(), user => user.save());
}





// --------------------------------------------- USERS END ----------------------------------------------

const memberships = [
    {
        total: 350,
        deadline: "2018-07-17T00:00:00.000Z",
        activityId: 1,
        userId: 1
    },
    {
        total: 350,
        deadline: "2018-07-17T00:00:00.000Z",
        activityId: 1,
        userId: 2
    },
    {
        total: 350,
        deadline: "2018-07-17T00:00:00.000Z",
        activityId: 1,
        userId: 3
    },
    {
        total: 100,
        deadline: "2018-08-17T00:00:00.000Z",
        activityId: 2,
        userId: 1
    },
    {
        total: 100,
        deadline: "2018-08-17T00:00:00.000Z",
        activityId: 2,
        userId: 2
    },
    {
        total: 35,
        deadline: "2018-08-17T00:00:00.000Z",
        activityId: 3,
        userId: 1
    },
    {
        total: 35,
        deadline: "2018-05-23T00:00:00.000Z",
        activityId: 3,
        userId: 2
    }
]


const seed = () =>
    Promise.all(activities.map(activity =>
        Activities.create(activity)
    ))
        .then(() => createUsers())
        .then(() =>
            Promise.all(memberships.map(membership =>
                Membership.create(membership)
            )))
        .catch(err => {
            console.error(err)
            console.log('create failed');
        })


const main = () => {
    db.sync({ force: true })
        .then(() => {
            console.log('seeding the database');
            return seed()
        })
        .catch(err => {
            console.log(err.stack)
        })
        .then(() => {
            db.close();
            return null;
        })
}

main();








