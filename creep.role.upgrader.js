const { transitionWorkingState } = require('./state');
const { harvestFromSource } = require('./helpers');

const roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // State transition logic - switch between harvesting and working
        transitionWorkingState(creep, '⚡ upgrade');

        // Action logic - perform current task
        if (creep.memory.working) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        } else {
            harvestFromSource(creep);
        }
    }
};

module.exports = roleUpgrader;