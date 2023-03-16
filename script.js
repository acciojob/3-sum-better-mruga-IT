function threeSum(S, target) {
  let closestSum = Infinity;
  for (let i = 0; i < S.length - 2; i++) {
    for (let j = i + 1; j < S.length - 1; j++) {
      for (let k = j + 1; k < S.length; k++) {
        let currentSum = S[i] + S[j] + S[k];
        if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
          closestSum = currentSum;
        }
      }
    }
  }
  return closestSum;
}






   
