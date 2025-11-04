/**
 * State transition logic for creeps
 */

/**
 * Manages the working/harvesting state transition for creeps
 * @param {Creep} creep - The creep to manage state for
 * @param {string} workingEmoji - Emoji to display when switching to working state
 */
function transitionWorkingState(creep, workingEmoji) {
    if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
        creep.memory.working = false;
        creep.say('🔄 harvest');
    } else if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
        creep.memory.working = true;
        creep.say(workingEmoji);
    }
}

module.exports = {
    transitionWorkingState
};
