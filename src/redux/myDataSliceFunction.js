export function test() {
  return [1, 2, 3];
}

export function defineRC(selection) {
  let c1, c2, r1, r2;
  if (selection.r1 === -1) {
    //컬럼 선택 시
    // console.log('column selected');
    c1 = selection.c1 < selection.c2 ? selection.c1 : selection.c2;
    c2 = selection.c1 < selection.c2 ? selection.c2 : selection.c1;
    r1 = 0;
    r2 = selection.r2;
  } else {
    //영역 선택 시
    c1 = selection.c1 < selection.c2 ? selection.c1 : selection.c2;
    c2 = selection.c1 < selection.c2 ? selection.c2 : selection.c1;
    r1 = selection.r1 < selection.r2 ? selection.r1 : selection.r2;
    r2 = selection.r1 < selection.r2 ? selection.r2 : selection.r1;
  }
  // console.log(c1, c2, r1, r2);
  if (c1 === -1) c1 = 0;
  // console.log(c1, c2, r1, r2);
  return [c1, c2, r1, r2];
}

export function getHistogramData(data) {
  let d = [];
  for (let i = 0; i < data.length; i++) {
    d.push({ x: data[i], y: data[i] * 1.1 });
  }
  return d;
}

export const colorSet = [
  ["rgb(244, 67, 54)", "rgba(244, 67, 54, 0.5)"],
  ["rgb(156, 39, 176)", "rgba(156, 39, 176, 0.5)"],
  ["rgb(103, 58, 183)", "rgba(103, 58, 183, 0.5)"],
  ["rgb(63, 81, 181)", "rgba(63, 81, 181, 0.5)"],
  ["rgb(33, 150, 243)", "rgba(33, 150, 243, 0.5)"],
  ["rgb(3, 169, 244)", "rgba(3, 169, 244, 0.5)"],
  ["rgb(0, 188, 212)", "rgba(0, 188, 212, 0.5)"],
  ["rgb(0, 150, 136)", "rgba(0, 150, 136, 0.5)"],
  ["rgb(232, 30, 99)", "rgba(232, 30, 99, 0.5)"],
  ["rgb(76, 175, 80)", "rgba(76, 175, 80, 0.5)"],
  ["rgb(139, 195, 74)", "rgba(139, 195, 74, 0.5)"],
  ["rgb(205, 220, 57)", "rgba(205, 220, 57, 0.5)"],
  ["rgb(255, 235, 59)", "rgba(255, 235, 59, 0.5)"],
  ["rgb(255, 193, 7)", "rgba(255, 193, 7, 0.5)"],
  ["rgb(255, 152, 0)", "rgba(255, 152, 0, 0.5)"],
  ["rgb(255, 87, 34)", "rgba(255, 87, 34, 0.5)"],
  ["rgb(121, 85, 72)", "rgba(121, 85, 72, 0.5)"],
  ["rgb(158, 158, 158)", "rgba(158, 158, 158, 0.5)"],
  ["rgb(96, 125, 139)", "rgba(zzz, 0.5)"],
  ["rgb(0,0,0)", "rgba(0,0,0, 0.5)"],
];
