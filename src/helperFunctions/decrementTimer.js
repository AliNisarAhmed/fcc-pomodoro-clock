export default (timer) => {
  let [ minutes, seconds ] = timer;
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  return [minutes, seconds];
}