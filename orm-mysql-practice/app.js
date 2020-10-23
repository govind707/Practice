//const { sequelize } = require(".");

const sequelize = require('./index');
const Sequelize = require('sequelize');

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });


const Note = sequelize.define('notes', { note: Sequelize.TEXT, tag: Sequelize.STRING });

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log(`Database & tables created!`);

//     Note.bulkCreate([
//       { note: 'get up in the morning', tag: 'habit' },
//       { note: 'walk to the road', tag: 'travelling' },
//       { note: 'sit for long and concentrate', tag: 'office' },
//       { note: 'learn CURD operations with orm', tag: 'work' }
//     ]).then(function() {
//       return Note.findAll();
//     }).then(function(notes) {
//       console.log(notes);
//     });
//   });

// sequelize.sync({force: true})
// .then(() => {
//     return Note.bulkCreate([
//               { note: 'get up in the morning', tag: 'habit' },
//               { note: 'walk to the road', tag: 'travelling' },
//               { note: 'sit for long and concentrate', tag: 'office' },
//               { note: 'learn CURD operations with orm', tag: 'work' },
//               { note: 'get-me up in the morning', tag: "mrng"}
//             ]);
// });

Note.create({
        note : 'Refreshing mood',
        tag: 'collection_team'
    });
Note.destroy({
    where: {
        note: 'get-me up in the morning'
    }
});
Note.update({
    note: 'learn CRUD Operations'
},
{
    where: {
        tag: "work"
    }
});
Note.findAll()
.then( notes => {
    console.log("All notes", JSON.stringify(notes,null,4));
});    
