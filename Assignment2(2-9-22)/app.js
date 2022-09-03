// SPREAD OPERATOR FOR ARRAY
let nestedArr = ["outermostData", ["innerData", ["INNERMOSTDATA"]]];
let copyInnerMostArr = [...nestedArr[1][1]];
// console.log(copyInnerMostArr)



// SPREAD OPERATOR FOR OBJECT
let nestedObj = {
  outermost: {
    inner: {
      data: "INNERMOSTDATA",
    },
  },
};

let copyInnermostObj = {
  ...(nestedObj.outermost.inner),
};
// console.log(copyInnermostObj);
