const { data_buku } = require('../models');

const getBuku = async (req, res) => {
  const dataBuku = await data_buku.findAll();

  res.json(dataBuku);
};
const postBuku = async (req, res) => {
  const { title, category, penerbit, best_seller } = req.body;
  try {
    await data_buku.create({
      title: title,
      category: category,
      penerbit: penerbit,
      best_seller: best_seller,
    });
    res.status(200).json({ msg: 'data berhasil di simpan' });
  } catch (error) {
    res.status(403).json({ msg: 'data gagal di simpan' });
  }
};

const updateBuku = async (req, res) => {
  const { id } = req.params;
  const checkBuku = await data_buku.findOne({
    where: {
      id: id,
    },
  });
  if (!checkBuku) return res.status(403).json({ msg: 'data tidak ada' });
  try {
    const dataBuku = req.body;
    data_buku.update(
      {
        ...dataBuku,
        id,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).json({ msg: 'data berhasil di ubah' });
  } catch (error) {
    res.status(400).json({ msg: 'data gagal di ubah' });
  }
};

module.exports = { postBuku, getBuku, updateBuku };
