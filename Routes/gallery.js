const router = require('express').Router();
const Image = require('../Model/Image');

router.post('/images', async (req,res) => {
    const pic = new Image({
        image: req.body.image
    })
    try{
        const savedImage = await pic.save();
        res.send(savedImage);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/images', (req,res) => {
    Image.find({})
        .then(images => res.send(images))
        .catch(err => res.status(400).send(err));
})

module.exports = router;