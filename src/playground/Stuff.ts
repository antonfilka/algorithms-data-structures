//ts-worksheet

//@ts-ignore
Number.prototype.plus = function (value) {
  return this + value;
};
//@ts-ignore
Number.prototype.minus = function (value) {
  //@ts-ignore
  return this - value;
};

//@ts-ignore
(2).plus(3).minus(1);

function getStr() {
  return [].slice.call(arguments, 1).join(arguments[0]);
}

//@ts-ignore
getStr("*", "1", "b", "1c");

const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null,
    },
    {
      valueNode: 3,
      next: null,
    },
    {
      valueNode: 2,
      next: null,
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null,
        },
        {
          valueNode: 5,
          next: null,
        },
      ],
    },
  ],
};
