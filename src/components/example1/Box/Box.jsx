import './Box.css'

function Box({ variant = "dark", block, title }) {
  return <div className={`Box Box__${variant} ${block ? "Box__block" : ""}`}>
    <h1>{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolor cumque eius aspernatur quos error dignissimos repellendus possimus obcaecati, ipsam assumenda enim cum rem sapiente consectetur! Necessitatibus!</p>
  </div>;
}

export default Box;
