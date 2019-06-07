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
    getProjects,
    getProjectById,
    addProject,
    
}

function getProjects() {
    return db('projects')
}

function getProjectById(id) {
    return db('projects')
    .where ({ id })
    .first()
}

function addProject(project) {
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;
        return getProjectById(id)
    })
}