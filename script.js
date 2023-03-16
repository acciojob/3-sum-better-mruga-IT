function threeSum(S, target) {
  // Sort the array in ascending order
  S.sort((a, b) => a - b);
  // Initialize the closest sum to a large number
  let closestSum = Infinity;
  // Loop through the array, fixing the first element
  for (let i = 0; i < S.length - 2; i++) {
    // Two pointers approach for the remaining two elements
    let left = i + 1;
    let right = S.length - 1;
    while (left < right) {
      // Calculate the current sum of the three elements
      let currentSum = S[i] + S[left] + S[right];
      // Update the closest sum if the current sum is closer to the target
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }
      // Move the pointers according to the current sum
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  // Return the closest sum found
  return closestSum;
}
This function uses a two pointers approach to find the three integers in the array S whose sum is closest to the given target number. We first sort the array in ascending order and initialize the closest sum to a large number (in this case, Infinity).

We then loop through the array, fixing the first element and using two pointers to iterate through the remaining two elements. We calculate the current sum of the three elements, update the closest sum if the current sum is closer to the target, and move the pointers accordingly based on the current sum.

Finally, we return the closest sum found.

Here's an example of how to use the function:

javascript