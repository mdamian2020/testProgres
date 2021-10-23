const test = [
  {
    intrebare: "Inside which HTML element do we put the JavaScript?",
    raspunsuri: [
      "&lt;js&gt;",
      "&lt;script&gt;",
      "&lt;scripting&gt;",
      "&lt;javascript&gt;"
    ],
    corect: 1,
    raspuns: 3
  },
  {
    intrebare: `What is the correct JavaScript syntax to change the content of the HTML element below?<br>
                <p id="demo">This is a demonstration.</p>`,
    raspunsuri: [
      'document.getElementById("demo").innerHTML = "Hello World!" ',
      'document.getElementByName("p").innerHTML = "Hello World!" ',
      'document.getElement("p").innerHTML = "Hello World!" ',
      '#demo.innerHTML = "Hello World!" '
    ],
    corect: 0,
    raspuns: 0
  },
  {
    intrebare: "Where is the correct place to insert a JavaScript?",
    raspunsuri: [
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
      "The &lt;body&gt; section",
      "The &lt;head&gt; section"
    ],
    corect: 0,
    raspuns: 0
  },
  {
    intrebare:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    raspunsuri: [
      '&lt;script href="xxx.js"&gt;',
      '&lt;script src="xxx.js"&gt;',
      '&lt;script name="xxx.js"&gt;'
    ],
    corect: 0,
    raspuns: 0
  },
  {
    intrebare:
      "The external JavaScript file must contain the &lt;script&gt; tag.",
    raspunsuri: ["FALSE", "TRUE"],
    corect: 0,
    raspuns: 0
  }
];

export default test;
