import react from 'react'

function Home() {
  return (<div className="montfont">
    <h1 className="mt-5 text-light text-center">Welcome !</h1>
    <h3 className="text-light text-center">Please Choose A Conversion From The Navbar</h3>
  </div>);
}

function Footer() {
  return (<center>
    <blockquote class="blockquote text-center montfont text-light">
      <p class="mb-0">There Is No Problem So Bad That You Can't Make It Worse</p>
      <footer class="blockquote-footer text-light">Chris Hadfield,
        <cite title="Source Title text-light"> Astronaut</cite>
      </footer>
    </blockquote>
  </center>);
}

export {
  Home,
  Footer
};
