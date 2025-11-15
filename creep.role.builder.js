const { transitionWorkingState } = require('./state');
const { harvestFromSource } = require('./helpers');

const roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep, room, rcl, spawnPosition) {
        // State transition logic - switch between harvesting and working
        transitionWorkingState(creep, '🚧 build');

        // Action logic - perform current task
        if (creep.memory.working) {
            if (rcl > 1) {
                const buildResult = room.createConstructionSite(spawnPosition.x + 1, spawnPosition.y, STRUCTURE_EXTENSION);
                if (buildResult !== OK) {
                    console.log('Build failed:', buildResult);
                }
            }
            const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length > 0) {
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        } else {
            harvestFromSource(creep);
        }
    }
};

module.exports = roleBuilder;