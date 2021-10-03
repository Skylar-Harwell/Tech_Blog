const router = require('express').Router();
const { Post, User } = require('../../models');

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll({ 
            include: [User],
        });
        const blogs = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { blogs });
    } catch (err) {
        res.status(500).json(err);
    }
    
    res.render('dashboard', {blogs})
})

module.exports = router;











const blogs = [
    {
        title: "First Blog",
        content: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita rem atque facilis quibusdam quas aliquid ipsum maiores perferendis ipsam? Quo obcaecati exercitationem deleniti, officiis dolor hic accusamus! Numquam, minus?",
        user: {
            userName: "jSquiggle",
            name: "Ralph Mason",
            userId: 0,
        },
        createdAt: "YYYY-MM-DD HH:MM:SS",
        id: 0,
    },
    {
        title: "Second Blog",
        content: 
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita rem atque facilis quibusdam quas aliquid ipsum maiores perferendis ipsam? Quo obcaecati exercitationem deleniti, officiis dolor hic accusamus! Numquam, minus?",
        user: {
            userName: "User12345",
            name: "Scott Powers",
            userId: 1,
        },
        createdAt: "YYYY-MM-DD HH:MM:SS",
        id: 1,
    },
];