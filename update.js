const { user } = require('./models');

const query = {
  where: {
    id: 2,
  },
};

user
  .update(
    {
      name: 'joko',
      address: 'komplek griya madani no 22',
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
