'use strict'

const express = require('express'),
      router = express.Router()

router.get('/', async (req, res) => { 
    let context = { 
        title: 'Home',
    };
    res.render('home/index', context);
});

router.get('/help', async (req, res) => {
    let context = { 
        title: 'Bantuan',
    };
    res.render('home/help', context);
});

module.exports = router;