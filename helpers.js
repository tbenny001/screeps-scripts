/**
 * Utility functions shared across creep roles
 */

/**
 * Harvests from the first available source in the creep's room
 * @param {Creep} creep - The creep to harvest with
 */
function harvestFromSource(creep) {
    const sources = creep.room.find(FIND_SOURCES);
    if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
    }
}

module.exports = {
    harvestFromSource
};

