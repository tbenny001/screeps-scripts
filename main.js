const roleSpawn = require('structure.role.spawn');
const roleTower = require('structure.role.tower');
const roleDespositor = require('creep.role.depositor');
const roleUpgrader = require('creep.role.upgrader');
const roleBuilder = require('creep.role.builder');

module.exports.loop = function() {
    let spawn = Game.spawns["Spawn1"];
    let creeps = Game.creeps
    let tower = Game.getObjectById('cca66ff000e3fa1bd4a9c310');
    let creepCounts = {};
    
    for(let name in creeps) {
        let creep = creeps[name];
        creepCounts[creep.memory.role] = (creepCounts[creep.memory.role] || 0) + 1;
        if(creep.memory.role == 'depositor') {
            roleDespositor.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }

    if(spawn) {
        roleSpawn.run(spawn, creepCounts)
    }
    
    if(tower) {
        roleTower.run(tower);
    }
}