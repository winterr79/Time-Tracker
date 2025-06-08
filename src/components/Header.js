import PropTypes from 'prop-types'
import Button from './Button';


// const Header = (props) => {
//   return (
//     <header>
//         {/* <h1>Task Tracker</h1> */}
//         <h1>{props.title}</h1>
//     </header>
//   )
// };

// Header.defaultProps = {
//     title: "Task Tracker",
// };

const Header = ({title}) => {
  const onClick = () => {
    console.log("Click");
  };

  return (
    <header className= "header">
        {/* <h1>Task Tracker</h1> */}
        {/* <h1 style = {{color: "red", backgroundColor: 
        "black"}}>{title}</h1> */}
        {/* <h1 style = {headingStyle}>{title}</h1> */}
        <h1 >{title}</h1>
        {/* <button className= "btn">Add</button> */}
        {/* <Button color= "green" text= "Hello"/> */}
        {/* <Button color= "blue" text= "Hello 1"/>
        <Button color= "red" text= "Hello 3"/> */}
        {/* This teaches we can reuse the component with different props */}
        <Button
          color= "green"
          text= "Add"
          onClick = {onClick}
        />
    </header>
  );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//     color: "red",
//     backgroundColor: "black"
// }

export default Header
