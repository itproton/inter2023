
module.exports = function override(config, env) {
    require('fs').writeFileSync('./out.json', JSON.stringify(config, null, 2))
    return config;
}