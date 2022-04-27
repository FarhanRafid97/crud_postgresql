const { user } = require('./models');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const data = await user.findAll();

  res.json(data);
});

module.exports = router;

router.post('/post', async (req, res) => {
  const { name, address, verified } = req.body;

  try {
    await user.create({
      name: name,
      address: address,
      verified: verified,
    });
    process.exit;
    res.status(200).json({ msg: 'data berhasil di simpan' });
  } catch (error) {
    console.log(error);
  }
});

router.delete('/delete', async (req, res) => {
  const { id } = req.body;
  try {
    await user.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).json({ msg: 'data berhasil di hapus' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const data = await user.findOne({
    where: {
      id: id,
    },
  });
  if (!data) return res.status(400).json({ msg: 'data tidak ada' });
  res.status(200).json(data);
});
