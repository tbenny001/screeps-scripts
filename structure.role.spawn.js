const ROLE_DEPOSITOR = 'depositor';
const ROLE_UPGRADER = 'upgrader';
const ROLE_BUILDER = 'builder';
const TARGET_CREEP_COUNT = 2;
const REQUIRED_ENERGY = 300;

function spawnCreepWithRole(spawn, role, count) {
    const newCreepId = `${role}${count + 1}`;
    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, {
        memory: { role: role, working: false }
    });
}

const roleSpawn = {
/**
 * Priority order:
 * Spawn depositor first. If there is a depositor, spawn an upgrader. There should be 2 depositors and 2 upgraders. If there are 2 depositors and 2 upgraders, spawn a builder
 */
    run: function(spawn, creepCounts) {
          const depositorCount = creepCounts[ROLE_DEPOSITOR] || 0;
          const upgraderCount = creepCounts[ROLE_UPGRADER] || 0;
          const builderCount = creepCounts[ROLE_BUILDER] || 0;

          if(spawn.store[RESOURCE_ENERGY] === REQUIRED_ENERGY && !spawn.spawning) {
               if(depositorCount < TARGET_CREEP_COUNT && depositorCount <= upgraderCount) {
                    spawnCreepWithRole(spawn, ROLE_DEPOSITOR, depositorCount);
               } else if(upgraderCount < TARGET_CREEP_COUNT) {
                    spawnCreepWithRole(spawn, ROLE_UPGRADER, upgraderCount);
               } else if(depositorCount >= TARGET_CREEP_COUNT && upgraderCount >= TARGET_CREEP_COUNT && builderCount < TARGET_CREEP_COUNT) {
                    spawnCreepWithRole(spawn, ROLE_BUILDER, builderCount);
               }
          } 
	}
};

module.exports = roleSpawn;


