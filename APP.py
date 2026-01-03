from flask import Flask, render_template, request

app = Flask(__name__)

def analyze_sentiment(text):
    text = text.lower()

    positive_words = ["good", "happy", "great", "excellent", "nice", "love"]
    negative_words = ["bad", "sad", "poor", "worst", "hate", "angry"]

    pos = 0
    neg = 0

    for word in positive_words:
        if word in text:
            pos += 1

    for word in negative_words:
        if word in text:
            neg += 1

    if pos > neg:
        return "Positive 😊"
    elif neg > pos:
        return "Negative 😞"
    else:
        return "Neutral 😐"


@app.route("/", methods=["GET", "POST"])
def index():
    result = ""
    opinion = ""

    if request.method == "POST":
        opinion = request.form["opinion"]
        result = analyze_sentiment(opinion)

    return render_template("INDEX1.html", result=result, opinion=opinion)


if __name__ == "__main__":
    app.run(debug=True)
