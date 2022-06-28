import Team from "../src/js/Team/Team";
import Bowman from "../src/js/Character/Bowman";
import Swordsman from "../src/js/Character/Swordsman";
import Zombie from "../src/js/Character/Zombie";


const bow = new Bowman('Luka');
const sword = new Swordsman('Lukas');
const zombie = new Zombie('Tukas')
const team = new Team();

const party = [
  [bow, 1],
  [sword, 2],
  [zombie, 3]
];

const partyArray = [bow, sword, zombie]

test.each(party)('Тест добавления персонажей в пати', (character, count) => {
  team.add(character);
  expect(team.members.size).toEqual(count)
})

test('Тест ошибки на повторное добавление персонажа в пати', () => {
  expect(() => {
    team.add(bow);
    team.add(bow);
  }).toThrow(Error);
});

test('Тест возврата массива toArray', () => {
  expect(team.toArray()).toEqual(partyArray)
})
