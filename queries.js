const database = require('./database-connection')

module.exports = {
    allStudents() {
        return database('cohort')
    }
}