const router = require('express').Router();
const { Post } = require('../../models');

router.get('/new', (req,res) => {
    res.render('blogNew')
})

router.get('/:id', (req,res) => {
    const post = {
        title: "First Blog",
        content: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita rem atque facilis quibusdam quas aliquid ipsum maiores perferendis ipsam? Quo obcaecati exercitationem deleniti, officiis dolor hic accusamus! Numquam, minus?",
        user: {
            userName: "jSquiggle",
            name: "Ralph Mason",
            userId: 0,
        },
        createdAt: "YYYY-MM-DD HH:MM:SS",
    };
    res.render('blogPost', post)
})

router.get('/edit/:id', (req,res) => {
    const blogData = {
        title: "Title",
        content: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita rem atque facilis quibusdam quas aliquid ipsum maiores perferendis ipsam? Quo obcaecati exercitationem deleniti, officiis dolor hic accusamus! Numquam, minus?",
    };
    res.render('blogEdit', {blogData})
})

module.exports = router;