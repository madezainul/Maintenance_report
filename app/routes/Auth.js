'use strict'

const express = require('express'),
      crypto = require('crypto'),
      moment = require('moment'),
      {Form} = require('../middlewares/Form'),
      {User} = require('../models/UserModel'),
      {Message} = require('../utils/Message'),
      router = express.Router(),
      encrypt = password => crypto.createHmac('sha256', process.env.SECRET_KEY).update(password).digest('hex');

router.get('/signin', async (req, res) => {
    let context = {
        title: 'Login',
    };
    res.render('auth/signin', context);
});

router.post('/signin', Form.signin, (req, res) => {
    let {email, password} = req.body;
    User.getone('email', email, (err, userRow) => {
        if(!userRow) {
            req.flash('warning', 'email belum terdaftar');
            return res.redirect('/signin');
        }
        if(!userRow.verified_at) {
            req.flash('warning', 'akun belum diaktivasi, silahkan cek email untuk aktivasi akun anda');
            return res.redirect('/signin');
        }
        if(encrypt(password) != userRow.password) {
            req.flash('warning', 'password salah');
            return res.redirect('/signin');
        }
        req.session.id = userRow.id;
        res.redirect(`/${userRow.role}`);
    });
});

router.get('/signup', async (req, res) => {
    let context = {
        title: 'Register',
    };
    res.render('auth/signup', context);
});

router.post('/signup', Form.signup, (req, res) => {
    let {name, nis, email, password} = req.body;
    User.getone('email', email, (err, userRow) => {
        if(userRow) {
            req.flash('warning', 'email sudah terdaftar, silahkan daftar dengan email lain');
            return res.redirect('/signup');
        }
        let userData = {
            name: name,
            email: email,
            role: 'staff',
            password: encrypt(password),
            token: crypto.randomBytes(32).toString('hex'),
            created_at: moment().format('DD-MM-YYYY HH:mm'),
        };
        Message.activateAccount(email, userData.token);
        User.add(userData, () => {
            req.flash('success', 'wali murid berhasil didaftarkan, silahkan cek email untuk aktivasi akun anda');
            res.redirect('/signin');
        });
    });
});

router.get('/signout', (req, res) => {
    req.session = null;
    res.redirect('/signin');
});

router.get('/activate/:email/:token', (req, res) => {
    let {email, token} = req.params;
    User.getone('email', email, (err, userRow) => {
        if(!userRow) {
            req.flash('warning', 'email belum terdaftar');
            return res.redirect('/signin');
        }
        if(token != userRow.token) {
            req.flash('warning', 'token tidak sesuai');
            return res.redirect('/signin');
        }
        let userData = {
            id: userRow.id,
            token: null,
            verified_at: moment().format('DD-MM-YYYY HH:mm'),
            updated_at: moment().format('DD-MM-YYYY HH:mm')
        };
        User.put(userData, () => {
            req.flash('success', 'aktivasi akun berhasil');
            res.redirect('/signin');
        });
    });
});

router.get('/forgotpass', async (req, res) => {
    let context = {
        title: 'Forgot Password',
    };
    res.render('auth/forgotpass', context);
});

router.post('/forgotpass', Form.forgotPass, (req, res) => {
    let {email} = req.body;
    User.getone('email', email, (err, userRow) => {
        if(!userRow) {
            req.flash('warning', 'email belum terdaftar');
            return res.redirect('/signin');
        }
        if(!userRow.verified_at) {
            req.flash('warning', 'akun belum diaktivasi, silahkan cek email untuk aktivasi akun anda');
            return res.redirect('/signin');
        }
        let userData = {
            id: userRow.id,
            token: crypto.randomBytes(32).toString('hex'),
            updated_at: moment().format('DD MMMM YYYY HH:mm')
        };
        Message.forgotPassword(email, userData.token);
        User.put(userData, () => {
            req.flash('success', 'permintaan reset password telah terkirim, silahkan cek email untuk reset password anda');
            res.redirect('/signin');
        });
    });
});

router.get('/resetpass/:email/:token', (req, res) => {
    let {email, token} = req.params;
    res.render('auth/resetpass');
    // User.getone('email', email, async (err, userRow) => {
    //     if(!userRow) {
    //         req.flash('warning', 'email belum terdaftar');
    //         return res.redirect('/signin');
    //     }
    //     if(token != userRow.token) {
    //         req.flash('warning', 'token tidak sesuai');
    //         return res.redirect('/signin');
    //     }
    //     let context = {
    //         title: 'Reset Password',
    //         id: userRow.id
    //     };
    //     res.render('auth/resetpass', context);
    // });
});

router.post('/resetpass', Form.resetPass, (req, res) => {
    let {id, password} = req.body;
    let userData = {
        id: id,
        password: encrypt(password),
        token: null,
        updated_at: moment().format('DD-MM-YYYY HH:mm')
    };
    User.put(userData, () => {
        req.flash('success', 'reset password berhasil');
        res.redirect('/signin');
    });
});

module.exports = router;