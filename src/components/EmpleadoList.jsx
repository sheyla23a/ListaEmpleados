import EmpleadoAvatar from "./EmpleadoAvatar";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="row">
      {empleados.map((empleado) => (
        <div key={empleado.id} className="col-lg-4 col-md-4 mb-2">
          <div className="card d-flex flex-row">
            <EmpleadoAvatar
              pic={`empleado${empleado.id}.png`}
              fullName={empleado.fullName}
            />
            <div>
              <EmpleadoRow
                fullName={empleado.fullName}
                title={empleado.title}
                department={empleado.department}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmpleadoList;
