export function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function() { return this.name; }
}

export const declare_winner = (fighter1, fighter2, firstAttacker) => {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = fighter1.name === attacker.name ? fighter2 : fighter1;
  while (defender.health > 0) {
    // console.log('attacker:', attacker.name, 'defender:', defender.name, 'def health:', defender.health)
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) return attacker.name;
    [defender, attacker] = [attacker, defender]
  }
}