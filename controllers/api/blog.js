const router = require('express').Router();
const { Post } = require('../../models');

router.post("/", async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        if (postData) {
            res.status(201).send(postData);  
        } else {
            res.status(400).send('post not created');
        }
      } catch (err) {
        res.status(500).json(err);
      }
});

router.put("/:id", async (req, res) => {
    try {
        const postData = await Post.update(req.body, {
            where: {id: req.params.id}
        });
        if (postData) {
            res.status(201).send(postData); 
        } else {
            res.status(400).send('post not updated');
        }
      } catch (err) {
        res.status(500).json(err);
      }
});

router.delete("/:id", async (req, res) => {
    try {
        const data = await Post.destroy( {
            where: {id: req.params.id}
        });
        if (data > 0) {
            res.status(200).end();    
        } else {
            res.status(400).end()
        }
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;

