function processConfirm(question) {
  let answer = confirm(question);
  let result = '';
  if (answer) {
    result += "Excellent. We'll play a nice game of chess.";
  } else {
    result += 'Maybe later then.';
  }
  console.log(result);
  return result;
}

processConfirm('Bạn có chơi cờ vua không?');