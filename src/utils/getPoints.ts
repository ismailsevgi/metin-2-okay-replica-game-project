import { ICard } from '../constants/types';

export function getPoints(arr: ICard[]) {
  const colorsArr: string[] = [];
  const numbersArr: number[] = [];
  arr.forEach((card: ICard) => {
    colorsArr.push(card.color);
    numbersArr.push(card.number);
  });

  //trys to find if numbers are consecutive
  const isConsecutive = ((array: number[]) => {
    const trueCheck: boolean[] = [];

    array.forEach((num, index) => {
      //if it is last index
      const isLastIndex = index === array.length - 1;
      if (!isLastIndex) {
        if (num + 1 === array[index + 1]) {
          trueCheck.push(true);
        } else {
          trueCheck.push(false);
        }
      }
    });

    return trueCheck.every((bool: boolean) => {
      return bool === true;
    });
  })(numbersArr.sort());

  //trys to find if colors are same
  const isSameColor = colorsArr.every((color: string) => {
    return color === colorsArr[0];
  });

  const isSameNumber = numbersArr.every((number: number) => {
    return number === numbersArr[0];
  });

  let totalPoint = isSameColor ? 40 : 0;

  console.log('Renk KARŞILAŞTIRMA SONRASI totalPoint', totalPoint);

  if (isConsecutive) {
    console.log('Numaralar Ardisik');
    let total = 0;
    numbersArr.forEach((n) => {
      total += n;
    });

    switch (total) {
      case 6:
        totalPoint += 10;
        break;
      case 9:
        totalPoint += 20;
        break;
      case 12:
        totalPoint += 30;
        break;
      case 15:
        totalPoint += 40;
        break;
      case 18:
        totalPoint += 50;
        break;
      case 21:
        totalPoint += 60;
        break;
      default:
        totalPoint += 0;
        break;
    }
  }

  if (isSameNumber) {
    console.log('Numaralar ayni');
    let total = 0;
    numbersArr.forEach((n) => {
      total += n;
    });
    switch (total) {
      case 3:
        totalPoint += 20;
        break;
      case 6:
        totalPoint += 30;
        break;
      case 9:
        totalPoint += 40;
        break;
      case 12:
        totalPoint += 50;
        break;
      case 15:
        totalPoint += 60;
        break;
      case 18:
        totalPoint += 70;
        break;
      case 21:
        totalPoint += 80;
        break;
      case 24:
        totalPoint += 90;
        break;
      default:
        totalPoint += 0;
        break;
    }
  }

  console.log('totalPoint: ', totalPoint);
  return {
    isConsecutive,
    isSameColor,
    isSameNumber,
    totalPoint,
  };
}
