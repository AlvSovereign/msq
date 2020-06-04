const valueDisplay = (value: number) => (value < 10 ? `0${value}` : value);

const secsToDuration: any = (seconds: number) => {
  if (typeof seconds === 'number') {
    var hoursDisplay = valueDisplay(Math.floor(seconds / 3600));
    var minsDisplay = valueDisplay(Math.floor((seconds % 3600) / 60));
    var secsDisplay = valueDisplay(Math.floor((seconds % 3600) % 60));
    const returnedValue =
      hoursDisplay === '00'
        ? `${minsDisplay}:${secsDisplay}`
        : `${hoursDisplay}:${minsDisplay}:${secsDisplay}`;

    return seconds ? returnedValue : '00:00';
  } else {
    return '00:00';
  }
};

export default secsToDuration;
