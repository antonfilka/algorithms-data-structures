//ts-worksheet
// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i];
    if (numMap.has(comp) && numMap.get(comp) !== i) {
      return [i, numMap.get(comp)];
    }
  }
}
