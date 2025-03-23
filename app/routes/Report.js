'use strict'

const express = require('express');
const router = express.Router();
const { ReportDetails } = require('../models/ReportDetails');


// Routes untuk handle report_add
router.post('/report_add', async (req, res) => {
    ReportDetails.add(req.body, (err) => {
        if (err) {
            return res.status(500).send('Error adding report');
        }
        res.redirect('/report_detail');
    });
});

// Routes untuk handle report_detail
router.get('/report_detail', async (req, res) => {
    ReportDetails.all((err, rows) => {
        if (err) {
            return res.status(500).send('Error getting report');
        }
<<<<<<< HEAD
        res.render('report_detail', { reports: rows });
        // let context = {
        //     title: 'Report Detail',
        //     reports: rows
        // };
        // res.render('report_detail', context);
=======
        console.log(rows);
        res.render('report/report_detail', { reports: rows });
>>>>>>> 9c0104589b9088e5740fc53ff5166bdd09b0b4a5
    });
});

//Debugging
// router.get('/report_detail', async (req, res) => {
//     ReportDetails.all((err, rows) => {
//         if (err) {
//             return res.status(500).send('Error getting report');
//         }
//         console.log(rows);
//         res.render('report_detail', { reports: rows });
//     });
// });

module.exports = router;