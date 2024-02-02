import EmpleadoAvatar from "./EmpleadoAvatar";
import EmpleadoRow from "./EmpleadoRow";

const EmpleadoList = ({ empleados }) => {
  return (
    <div className="row">
      {empleados.map((empleado) => (
        <div key={empleado.id} className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <div className="card-body d-flex flex-row w-100">
              <EmpleadoAvatar
                pic={`empleado${empleado.id}.png`}
                fullName={empleado.fullName}
              />
              <div className="ms-3">
                <EmpleadoRow
                  fullName={empleado.fullName}
                  title={empleado.title}
                  department={empleado.department}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmpleadoList;
