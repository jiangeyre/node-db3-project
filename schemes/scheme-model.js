const db = require('../db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes')
        .select();
};

function findById(id) {
    return db('schemes')
        .where({ id })
        .first();
};

