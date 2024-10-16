from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def scrapbook():
    return render_template('scrapbook.html')

if __name__ == '__main__':
    app.run(debug=True)
