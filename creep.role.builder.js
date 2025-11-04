const { transitionWorkingState } = require('./state');
const { harvestFromSource } = require('./helpers');

const roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // State transition logic - switch between harvesting and working
        transitionWorkingState(creep, '🚧 build');

        // Action logic - perform current task
        if (creep.memory.working) {
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