const express = require('express');
const router = express.Router();

const passport = require('../passport');

router.get('/github', passport.authenticate('github')); 
router.get('/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
    // Successful authentication, redirect home. 
    res.redirect('/');
});
router.get('/logout', (req, res) => {
    req.session = null;
    res.clearCookie('sid');
    res.redirect('/');
});
module.exports = router;