import "./styles.css";
import test from "./test.js";

const ecranPrincipal = () => {
  //  Afisez ecranul principal
  document.getElementById("app").innerHTML = `
  <div class="container">
    <h1 id="titlu">Test pentru limbajul <em>JavaScript</em></h1>
    <div id="continut">
    <p>Testul conține ${test.length} întrebări și nu există limită de timp.</p>

    <h2>Stabilirea punctajului</h2>
    <p>Pentru fiecare răspuns corect se acordă un punct. Punctajul maxim este ${test.length}.</p>
    <p>Succes!</p>
    <p><button id="btStart" class="btn btn-primary">START &nbsp;<i class="fa fa-angle-right" aria-hidden="true"></i></button></p>
    </div>
  </div>
  `;
};

//  Apelez functia.
ecranPrincipal();
