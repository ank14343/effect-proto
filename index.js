
export var effect = (finalNumber, effectTime, divElement) => {
    var start = 0;
    var partTime = 10;
    var totalTime = 0;
    effectTime *= 1000;
    let incrementPerPartTime = Math.floor((finalNumber / (effectTime / partTime)));
    const time = setInterval(() => {
        totalTime += partTime;
        if( totalTime < effectTime ) {
            start += incrementPerPartTime;
            divElement.innerHTML = start;
        } else {
            divElement.innerHTML = finalNumber;
            clearInterval(time);
        }
    }, partTime);
}

// effect(12345, 3);
