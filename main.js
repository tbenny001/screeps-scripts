const roleSpawn = require('structure.role.spawn');
const roleTower = require('structure.role.tower');
const roleHarvester = require('creep.role.harvester');
const roleUpgrader = require('creep.role.upgrader');
const roleBuilder = require('creep.role.builder');

module.exports.loop = function() {
    let spawn = Game.spawns["Spawn0"];
    let creeps = Game.creeps
    let tower = Game.getObjectById('cca66ff000e3fa1bd4a9c310');
    
    if(spawn) {
        roleSpawn.run(spawn)
    }
    
    if(tower) {
        roleTower.run(tower);
    }

    for(var name in creeps) {
        var creep = creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
}