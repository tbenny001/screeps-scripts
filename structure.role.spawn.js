const roleSpawn = {

    run: function(spawn, creepCounts) {
          if(spawn.store[RESOURCE_ENERGY] === 300 && !spawn.spawning) {
               if((creepCounts['depositor'] || 0) < 1) {
                    const newCreepId = `Depositor${(creepCounts['depositor'] || 0) + 1}`;
                    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, { memory: { role: 'depositor', working: false }})
               } else if((creepCounts['upgrader'] || 0) < 1) {
                    const newCreepId = `Upgrader${(creepCounts['upgrader'] || 0) + 1}`;
                    spawn.spawnCreep([WORK, CARRY, MOVE], newCreepId, { memory: { role: 'upgrader', working: false }})
               }
          } 
	}
};

module.exports = roleSpawn;