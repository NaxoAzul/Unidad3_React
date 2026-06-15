import { useEffect, useState } from "react";
import {
    Modal,
    Button,
    Form,
} from "react-bootstrap";

function SportFormModal({
    show,
    handleClose,
    handleSave,
    sport,
}) {
    const [formData, setFormData] = useState({
        name: "",
        objective: "",
        duration: "",
        status: true,
    });

    useEffect(() => {
        if (sport) {
            setFormData({
                name: sport.name || "",
                objective: sport.objective || "",
                duration: sport.duration || "",
                status: sport.status ?? true,
            });
        } else {
            setFormData({
                name: "",
                objective: "",
                duration: "",
                status: true,
            });
        }
    }, [sport]);

    const onSubmit = (e) => {
        e.preventDefault();
        handleSave(formData);
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={onSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {sport
                            ? "Editar Deporte"
                            : "Nuevo Deporte"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Nombre
                        </Form.Label>

                        <Form.Control
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    name: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Objetivo
                        </Form.Label>

                        <Form.Control
                            as="textarea"
                            rows={3}
                            required
                            value={formData.objective}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    objective: e.target.value,
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>
                            Duración (min)
                        </Form.Label>

                        <Form.Control
                            type="number"
                            required
                            min="1"
                            value={formData.duration}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    duration: Number(e.target.value),
                                })
                            }
                        />
                    </Form.Group>

                    <Form.Check
                        type="switch"
                        label="Activo"
                        checked={formData.status}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                status: e.target.checked,
                            })
                        }
                    />

                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={handleClose}
                    >
                        Cancelar
                    </Button>

                    <Button
                        variant="primary"
                        type="submit"
                    >
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default SportFormModal;