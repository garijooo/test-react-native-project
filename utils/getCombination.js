import phrases from "./phrases";
import timings from "./timings";

const getRandom = (value) => Math.random() * value;

const getCombination = () => {
    const phraseRand =  Math.floor(getRandom(phrases.length));
    // for random timings
    // const timingRand =  Math.floor(getRandom(timings.length));
    return {
        phrase: phrases[phraseRand],
        timing: new Date(),
    }
};

export default getCombination;