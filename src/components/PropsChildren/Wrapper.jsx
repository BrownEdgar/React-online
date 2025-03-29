import './Wrapper.scss'

function Wrapper(props) {

  if (!props.isOpen) {
    return null
  }

  return (
    <div className='Wrapper'>
      {props.children}
    </div>
  );
}

export default Wrapper;
