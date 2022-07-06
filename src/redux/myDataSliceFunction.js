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
    if(c1 === -1)c1 = 0
    // console.log(c1, c2, r1, r2);
    return [c1, c2, r1, r2];
  }
