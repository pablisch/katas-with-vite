export const increasingSequence = (sequence) => {
  let remove = true;
  sequence.forEach((num, index) => {
    if (remove && index > 0 && num <= sequence[index - 1]) {
      if (index > 1 && num <= sequence[index -2]) {
        sequence.splice(index, 1);
      } else {
      sequence.splice(index - 1, 1);
      }
      remove = false;
    }
    // console.log(index, sequence);
  });

  const sortedSequence = [...sequence].sort((a, b) => a - b)
  // console.log(sortedSequence)

  // console.log(sequence, sortedSequence);
  return JSON.stringify(sequence) === JSON.stringify(sortedSequence) && (new Set(sequence)).size === sequence.length;
};

// increasingSequence([1,2,3,4,5])
// increasingSequence([1,8,3,4,5])
// increasingSequence([1,4,3,5,2])
