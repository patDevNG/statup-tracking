const typeDefs = `
scalar JSONObject
scalar Date
extend type Query {
    getAllStartupStage: [StartupStages]
    getStartupStageById(id: String):StartupStages
}
extend type Mutation{
    createStartupStages(stage: String!, status: String):StartupStages
    updateStartupStage(startupStage: startupStage): StartupStages
}

input  startupStage{
    id: ID!,
    status: String
    stage: String
}
type StartupStages{
    _id: ID,
    refernceId: String
    status: String
    stage: String
}
`;

const resolvers = require('../resolvers');

module.exports = {
 typeDefs,
 resolvers
}