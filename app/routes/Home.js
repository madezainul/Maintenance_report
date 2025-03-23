'use strict'

const { Auth } = require('../middlewares/Auth');


const express = require('express'),
      moment = require('moment'),
      router = express.Router(),
      {ReportHeader} = require('../models/ReportHeaderModel');

router.get('/', async (req, res) => {
    ReportHeader.all((err, rows) => {
        rows.forEach(row => {
            row.date = moment(row.date).format('YYYY-MM-DD'); // Format the date as YYYY-MM-DD
        });
        let context = {
            title: 'Home',
            reports: rows,
        };
        res.render('home/index', context);
    });
});

router.get('/report/:id', (req, res) => {
    // Report.getone('id', req.params.id, (err, report) => {
    //     let context = {
    //         title: 'Report Detail',
    //         report: report
    //     };
        res.render('report/report_detail');
    // });
});

router.get('/help', Auth.isUser, async (req, res) => {
    let context = { 
        title: 'Bantuan',
    };
    res.render('home/help', context);
});

module.exports = router;