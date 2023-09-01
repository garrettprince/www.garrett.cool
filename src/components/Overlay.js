// Overlay will handle all 2D text based on user interaction with the objects in Scene.js


// Main Overlay function all other functions are fed through
export default function Overlay() {
  return (
    <>
      {/* Navigation - Mainly for x button to get back to main page */}
      <Nav />
      <ProjectTitle title="test1" />
    </>
  );
}

function Nav() {
  return <h1 className="">Test</h1>;
}

function ProjectTitle({ title }) {
  return <h1 className="absolute top-1">{title}</h1>;
}
