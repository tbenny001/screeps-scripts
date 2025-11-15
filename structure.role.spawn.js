const roleSpawn = {
/**
 * Priority order:
 * Spawn depositor first. If there is a depositor, spawn an upgrader. There should be 2 depositors and 2 upgraders. If there are 2 depositors and 2 upgraders, spawn a builder
 */
    run: function(spawn, creepCounts) {
          const depositorCount = creepCounts['depositor'] || 0;
          const upgraderCount = creepCounts['upgrader'] || 0;
          const builderCount = creepCounts['builder'] || 0;

          if(spawn.store[RESOURCE_ENERGY] === 300 && !spawn.spawning) {
               if(depositorCount < 2 && depositorCount <= upgraderCount) {
                    const newCreepId = `Depositor${depositorCount + 1}`;
                    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, { memory: { role: 'depositor', working: false }})
               } else if(upgraderCount < 2) {
                    const newCreepId = `Upgrader${upgraderCount + 1}`;
                    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, { memory: { role: 'upgrader', working: false }})
               } else if(depositorCount >= 2 && upgraderCount >= 2 && builderCount < 2) {
                    const newCreepId = `Builder${builderCount + 1}`;
                    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, { memory: { role: 'builder', working: false }})
               }
          } 
	}
};

module.exports = roleSpawn;


