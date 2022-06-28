import Character from './Character';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.protection = 10;
  }
}
