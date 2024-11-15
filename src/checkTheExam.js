const checkTheExam = (key, submitted) => {
  let score = 0;
  
  submitted.map((answer, index) => {
    score += answer === key[index] ? 4 : answer === '' ? 0 : -1;
  })

  if (score < 0) return 0;
  return score
}

export default checkTheExam;
