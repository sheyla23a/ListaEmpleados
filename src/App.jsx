import EmpleadoList from "./components/EmpleadoList";
import { Empleados } from "./utilities/Empleados";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <section className=" mt-4  p-2">
      <h1 className="text-center mb-4">Lista de Empleados</h1>
      <EmpleadoList empleados={Empleados} />
    </section>
  );
}

export default App;
