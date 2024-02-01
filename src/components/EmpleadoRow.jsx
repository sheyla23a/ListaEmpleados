import { Container } from 'react-bootstrap';

const EmpleadoRow = ({ fullName, title, department }) => {
  return (
    <Container className='ms-lg-3 mt-lg-3 w-100 h-auto'>
      <div>
        <h5 >{fullName}</h5>
        <p className="card-text">{title} <b className='bg-warning'>{department}</b></p>
      </div>
    </Container>
  );
}

export default EmpleadoRow;
