
const EmpleadoAvatar = ({ pic, fullName }) => {
  return (
    <div className="text-center w-25 ">
      <div className="card bg-danger">
      <img src={(`../src/img/${pic}`)} alt={fullName} className="img-fluid rounded-circle" />
      </div>
    </div>
  );
}

export default EmpleadoAvatar;
