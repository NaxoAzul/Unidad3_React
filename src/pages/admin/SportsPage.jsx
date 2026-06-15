import { useEffect, useState } from "react";
import {
    Button,
    Card,
    Table,
    Form,
} from "react-bootstrap";

import Swal from "sweetalert2";

import SportFormModal from "../../components/sports/SportFormModal";

import {
    getSports,
    createSport,
    updateSport,
    deleteSport,
    updateSportStatus,
} from "../../services/sportService";

function SportsPage() {

    const [sports, setSports] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedSport, setSelectedSport] = useState(null);

    const loadSports = async () => {
        try {
            const response = await getSports();
            setSports(response.data);
        } catch (error) {
            Swal.fire(
                "Error",
                error.message,
                "error"
            );
        }
    };

    useEffect(() => {
        loadSports();
    }, []);

    const handleNew = () => {
        setSelectedSport(null);
        setShowModal(true);
    };

    const handleEdit = (sport) => {
        setSelectedSport(sport);
        setShowModal(true);
    };

    const handleSave = async (sportData) => {
        try {

            if (selectedSport) {
                await updateSport(
                    selectedSport.id,
                    sportData
                );
            } else {
                await createSport(
                    sportData
                );
            }

            Swal.fire(
                "Éxito",
                "Operación realizada correctamente",
                "success"
            );

            setShowModal(false);

            loadSports();

        } catch (error) {

            Swal.fire(
                "Error",
                error.message,
                "error"
            );

        }
    };

    const handleDelete = async (sport) => {

        const result = await Swal.fire({
            title: "¿Está seguro?",
            text: "¿Desea eliminar este deporte?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "Cancelar",
        });

        if (!result.isConfirmed) return;

        try {

            await deleteSport(sport.id);

            Swal.fire(
                "Eliminado",
                "Deporte eliminado correctamente",
                "success"
            );

            loadSports();

        } catch (error) {

            Swal.fire(
                "Error",
                error.message,
                "error"
            );

        }
    };

    const handleStatusChange = async (sport) => {

        try {

            await updateSportStatus(
                sport.id,
                !sport.status
            );

            loadSports();

        } catch (error) {

            Swal.fire(
                "Error",
                error.message,
                "error"
            );

        }
    };

    const formatDate = (date) => {
        return new Date(date)
            .toLocaleDateString(
                "es-CL",
                {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                }
            );
    };

    return (
        <Card className="shadow">

            <Card.Body>

                <div className="d-flex justify-content-between mb-3">

                    <h3>
                        Gestión Deportes
                    </h3>

                    <div>

                        <Button
                            variant="secondary"
                            className="me-2"
                            onClick={loadSports}
                        >
                            Refrescar
                        </Button>

                        <Button
                            onClick={handleNew}
                        >
                            Nuevo Deporte
                        </Button>

                    </div>

                </div>

                <Table
                    striped
                    bordered
                    hover
                >

                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Objetivo</th>
                            <th>Duración</th>
                            <th>Estado</th>
                            <th>Fecha</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>

                        {sports.map((sport) => (

                            <tr key={sport.id}>

                                <td>
                                    {sport.name}
                                </td>

                                <td>
                                    {sport.objective}
                                </td>

                                <td>
                                    {sport.duration} min
                                </td>

                                <td>

                                    <Form.Check
                                        type="switch"
                                        checked={
                                            sport.status
                                        }
                                        onChange={() =>
                                            handleStatusChange(
                                                sport
                                            )
                                        }
                                    />

                                </td>

                                <td>
                                    {formatDate(
                                        sport.created_at
                                    )}
                                </td>

                                <td>

                                    <Button
                                        size="sm"
                                        variant="warning"
                                        className="me-2"
                                        onClick={() =>
                                            handleEdit(
                                                sport
                                            )
                                        }
                                    >
                                        Editar
                                    </Button>

                                    <Button
                                        size="sm"
                                        variant="danger"
                                        onClick={() =>
                                            handleDelete(
                                                sport
                                            )
                                        }
                                    >
                                        Eliminar
                                    </Button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </Table>

            </Card.Body>

            <SportFormModal
                show={showModal}
                handleClose={() =>
                    setShowModal(false)
                }
                handleSave={handleSave}
                sport={selectedSport}
            />

        </Card>
    );
}

export default SportsPage;