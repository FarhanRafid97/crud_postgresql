const { user } = require('./models');

// user
//   .create({
//     name: 'syauqi',
//     address: 'komplek cemara 2 blok gg 11',
//     verified: false,
//   })
//   .then((user) => {
//     console.log(user);
//   });

const query = {
  where: {
    id: 1,
  },
};

user
  .update(
    {
      address: 'komplek gajah mada no 22',
    },
    query
  )
  .then(() => {
    console.log('data berhasil di update');
    process.exit();
  })
  .catch((err) => {
    console.error('gagal update dATA');
  });
