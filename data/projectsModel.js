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


function getActionById(id) {
    return db('actions')
    .where ({ id })
    .first()
}

async function getProjectById(id) {

    // get project and join with actions
    const project = await db
    .select('projects.*', 'actions.description as action', 'actions.notes as notes', 'actions.completed as action_completed' )
    .from('actions')
    .where ({ 'project_id' : id })
    .innerJoin('projects')
    .first()

    const actions = await getActionById(id)

    return { project, actions };
}


function addProject(project) {
    return db('projects')
    .insert(project, 'id')
    .then(ids => {
        const [id] = ids;
        return getProjectById(id)
    })
}