const knex = require("knex");

const knexConfig = {
    client: "sqlite3",
    connection: {
        filename: "./data/projects.db3"
    },
    useNullAsDefault: true,
    debug: true
}

const db = knex(knexConfig);

module.exports = {
    getActions,
    getAction,
    addAction
}

function getActions() {
    return db('actions')
}

function getActionById(id) {
    return db('actions')
    .where ({ id })
    .first()
}

function addAction(action) {
    return db('actions')
    .insert(action, 'id')
    .then(ids => {
        const [id] = ids;
        return getAction(id)
    })
}