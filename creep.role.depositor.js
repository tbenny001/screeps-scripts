const { transitionWorkingState } = require('./state');
const { harvestFromSource } = require('./helpers');

const roleDepositor = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // State transition logic - switch between harvesting and working
        transitionWorkingState(creep, '📦 deposit');

        // Action logic - perform current task
        if (creep.memory.working) {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                            structure.structureType == STRUCTURE_SPAWN ||
                            structure.structureType == STRUCTURE_TOWER) && 
                            structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } else {
            harvestFromSource(creep);
        }
    }
};

module.exports = roleDepositor;