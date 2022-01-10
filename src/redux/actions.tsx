const setCount = (num: number) => ({
  type: "ON_CHANGE_COUNT",
  count: num,
});

const dec = () => ({ type: "DEC" });
const rnd = () => ({ type: "RND", payload: Math.floor(Math.random() * 10) });

export { setCount, dec, rnd };
