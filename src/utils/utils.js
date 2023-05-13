export const timeConverter = (time) => {
  let convertedTime;
  let hours;
  let minutes;

  if (time < 60) {
    return `${time}мин`;
  } else {
    hours = Math.trunc(time / 60);
    minutes = time - (hours * 60);
    convertedTime = `${hours}ч${minutes}мин`
    return convertedTime;
  }
}