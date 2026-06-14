import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return (
        <>
            <Navbar />

            <div className="container mt-5">
                <div className="card p-4">

                    <h1 className="text-primary">
                        Bienvenido a SportClub
                    </h1>

                    <p>
                        Sistema de gestión deportiva para usuarios, entrenadores y administradores.
                    </p>

                    <div className="mt-3">
                        <Link
                            to="/login"
                            className="btn btn-primary"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;