'use strict'

const getKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
}

exports.Form = {
    signin: (req, res, next) => {
        if(getKeyByValue(req.body, '')) {
            req.flash('warning', 'data tidak boleh kosong');
            return res.redirect('/signin');
        }
        next();
    },
    signup: (req, res, next) => {
        if(getKeyByValue(req.body, '')) {
            req.flash('warning', 'data tidak boleh kosong');
            return res.redirect('/auth/signup');
        }
        if(req.body.password.length < 8 ) {
            req.flash('warning', 'password minimal delapan karakter');
            return res.redirect('/auth/signup');
        }
        next();
    },
    forgetPass: (req, res, next) => {
        if(getKeyByValue(req.body, '')) {
            req.flash('warning', 'data tidak boleh kosong');
            return res.redirect('/forgetpass');
        }
        next();
    },
    resetPass: (req, res, next) => {
        if(getKeyByValue(req.body, '')) {
            req.flash('warning', 'data tidak boleh kosong');
            return res.redirect('/resetpass');
        }
        next();
    }
}