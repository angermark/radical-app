import grade1 from '../assets/data/grades/grade-1.json';
import grade2 from '../assets/data/grades/grade-2.json';
import grade3 from '../assets/data/grades/grade-3.json';
import grade4 from '../assets/data/grades/grade-4.json';
import grade5 from '../assets/data/grades/grade-5.json';
import grade6 from '../assets/data/grades/grade-6.json';
import grade8 from '../assets/data/grades/grade-8.json';

export function setGrade(setting: number) {
  switch (setting) {
    case 0:
      return grade1;
    case 1:
      return grade2;
    case 2:
      return grade3;
    case 3:
      return grade4;
    case 4:
      return grade5;
    case 5:
      return grade6;
    case 6:
      return grade8;
    default:
      return grade1;
  }
}

export function getRandomObjectFromList(list: Array<any>): any {
  return list[Math.floor(Math.random() * list.length)];
}

export function shuffle(array: Array<any>): Array<any> {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
