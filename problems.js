function newPrice(currentPrice, discount) {
    if(
        typeof currentPrice !=="number" ||
        typeof discount !== "number" ||
        discount < 0 ||
        discount > 100
        ){
            return "Invalid";
        }

        const discountAmount = (currentPrice * discount) /100;
        const finalPrice = currentPrice - discountAmount;

        return finalPrice.toFixed(3);
}


function validOtp(otp) {
    if(typeof otp !== "string"){
        return "Invalid";
    }

    if(otp.length !== 8){
        return false;
    }

    if(!otp.startsWith("ph-")){
        return false;
    }

    return true;
}


function finalScore(omr) {
    if(
        typeof omr !== "object" || 
        omr === null ||
        Array.isArray(omr)){
            return "Invalid";
        }

        const {right,wrong,skip} = omr;

        if(
            typeof right !== "number" ||
            typeof wrong !== "number" ||
            typeof skip !== "number"
        ){
            return "Invalid";
        }

        if(right+wrong+skip !== 100){
            return "Invalid";
        }

        const score = right *1 - wrong * 0.5;

        return Math.round(score);
}


function gonoVote(array) {
    if(!Array.isArray(array)){
        return "Invalid";
    }

    let haCount =0;
    let naCount =0;

    for(let vote of array){
        if(vote === "ha") haCount++;
        else if(vote === "na") naCount++;
    }

    if(haCount > naCount) return true;
    if(haCount === naCount) return  "equal";

    return false;
}


function analyzeText(str) {
    if(typeof str !== "string"){
        return "Invalid";
    }

    const trimmed =str.trim();

    if(trimmed.length === 0){
        return "Invalid";
    }

    const words = trimmed.split(" ");

    let longestWord ="";
    for(let word of words){
        if(word.length >longestWord.length)    {longestWord = word}
    }

    const token = trimmed.split(" ").join("").length;

    return {
        longwords : longestWord,
        token : token
    };
}

