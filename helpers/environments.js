// dependencis

// module scafolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging'
}

environments.production = {
    port: 5000,
    envName: 'production'
}

// determine which environment was passd
const courentEnvitonment =
    typeof(process.env.NODE_ENV) === 'string' ?
    process.env.NODE_ENV : 'staging';

// export corrosponding environment object
const envitonmentToExport =
    typeof(environments[courentEnvitonment]) === 'object' ?
    environments[courentEnvitonment] : environments.staging;

// export module
module.exports = envitonmentToExport;