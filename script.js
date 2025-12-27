function analyzeSentiment() {
    const text = document.getElementById("opinion").value.toLowerCase();
    const result = document.getElementById("result");
    const box = document.getElementById("resultBox");

    const positiveWords = ["good", "great", "excellent", "happy", "love", "awesome"];
    const negativeWords = ["bad", "worst", "sad", "hate", "poor", "terrible"];

    let positiveCount = 0;
    let negativeCount = 0;

    positiveWords.forEach(word => {
        if (text.includes(word)) positiveCount++;
    });

    negativeWords.forEach(word => {
        if (text.includes(word)) negativeCount++;
    });

    if (positiveCount > negativeCount) {
        result.innerHTML = "Positive 😊";
        box.style.backgroundColor = "#d4edda";
        result.style.color = "#155724";
    } 
    else if (negativeCount > positiveCount) {
        result.innerHTML = "Negative 😞";
        box.style.backgroundColor = "#f8d7da";
        result.style.color = "#721c24";
    } 
    else {
        result.innerHTML = "Neutral 😐";
        box.style.backgroundColor = "#fff3cd";
        result.style.color = "#856404";
    }
}
