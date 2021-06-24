const addZero = (n) => {
  return String(n).padStart(2, '0');
}
const formatTime = (time) => {
        const mins = Math.floor(time / 60);
        const sec = time % 60;

        const minsFormatted = addZero(mins);
        const secFormatted = addZero(sec);
        return `${minsFormatted}:${secFormatted}`;
};

export default formatTime;