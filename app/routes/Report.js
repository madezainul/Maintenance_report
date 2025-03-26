'use strict'

const express = require('express'),
router = express.Router();
const { ReportDetails } = require('../models/ReportDetails');


// Routes untuk handle report_add
router.get('/report_add', async (req, res) => {
    console.log("aaa");
    res.render('report_add');
    // ReportDetails.add(req.body, (err) => {
    //     if (err) {
    //         return res.status(500).send('Error adding report');
    //     }
    // });
});

// Routes untuk handle report_detail
// router.get('/report_detail', async (req, res) => {
//     ReportDetails.all((err, rows) => {
//         if (err) {
//             return res.status(500).send('Error getting report');
//         }
//         // res.render('report_detail', { reports: rows });
//         let context = {
//             title: 'Report Detail',
//             reports: rows
//         };
//         res.render('report_detail', context);
//     });
// });

//Debugging
router.get('/report_detail', async (req, res) => {
    ReportDetails.all((err, rows) => {
        if (err) {
            return res.status(500).send('Error getting report');
        }
        console.log(rows);
        res.render('report/report_detail', { reports: rows });
    });
});

module.exports = router;