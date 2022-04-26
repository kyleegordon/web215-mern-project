


function Footer() {


  return (
    <footer className='footer' style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: "rgba(6, 6, 8, 1)",
        color: "rgba(194, 240, 242, 0.9)",
      }}>
        <p>
        <a href="https://github.com/kyleegordon">GitHub</a> &#9653;
        <a href="https://github.com/kyleegordon/web215">
          GitHub WEB215
        </a>
        &#9653; <a href="https://kyleegordon.github.io/web215/">GitHub IO</a> &#9653;
        <a href="https://www.freecodecamp.org/kyleegordon">FreeCodeCamp</a>
        &#9653;
        <a href="https://www.codecademy.com/profiles/kyleegordon">Codecademy</a>
        &#9653;
        <a href="https://jsfiddle.net/user/kyleegordon/fiddles/">JSFiddle</a>
        &#9653;
        <a href="https://www.linkedin.com/in/kylee-gordon-060612181/">LinkedIn</a>
      </p>
      <p>Page built by Gordon Designs</p>
      <p>
        <a href="https://validator.w3.org/check?uri=" id="validate_html">Validate HTML</a>
        &#9653;
        <a
          href="https://jigsaw.w3.org/css-validator/check/referer?uri="
          id="validate_css"
        >Validate CSS</a>
      </p>
      
    </footer>
  )
}

export default Footer