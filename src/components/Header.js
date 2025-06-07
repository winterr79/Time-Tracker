import PropTypes from 'prop-types'


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
  return (
    <header>
        {/* <h1>Task Tracker</h1> */}
        <h1>{title}</h1>
    </header>
  )
};

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
