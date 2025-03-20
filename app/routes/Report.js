'use strict'

const express = require('express'),
      router = express.Router()

router.get('/report_add', async (req, res) => {
    let context = { 
        title: 'Tambah Laporan',
    };
    res.render('report/report_add', context);
});

router.get('/report_detail', async (req, res) => {
    let context = { 
        title: 'Detail Laporan',
    };
    res.render('report/report_detail', context);
});

module.exports = router;