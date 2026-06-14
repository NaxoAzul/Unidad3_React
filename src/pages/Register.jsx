import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Alert,
    Button,
    Card,
    Container,
    Form,
    Spinner
} from "react-bootstrap";

import { registerUser } from "../services/authService";

function Register() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        birth_date: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError("");
        setSuccess("");

        if (!formData.full_name || !formData.email || !formData.password) {
            setError("Nombre, correo y contraseña son obligatorios.");
            return;
        }

        if (formData.password.length < 8) {
            setError("La contraseña debe tener mínimo 8 caracteres.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        setLoading(true);

        try {
            await registerUser({
                full_name: formData.full_name,
                email: formData.email,
                password: formData.password,
                birth_date: formData.birth_date || null,
                metadata: {
                    sports: [],
                },
            });

            setSuccess("Usuario registrado correctamente.");

            setTimeout(() => {
                navigate("/login");
            }, 1200);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "26rem" }} className="shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">
                        Registro SportClub
                    </Card.Title>

                    {error && (
                        <Alert variant="danger">
                            {error}
                        </Alert>
                    )}

                    {success && (
                        <Alert variant="success">
                            {success}
                        </Alert>
                    )}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>
                                Nombre completo
                            </Form.Label>

                            <Form.Control
                                type="text"
                                name="full_name"
                                placeholder="Ingrese su nombre"
                                value={formData.full_name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Correo
                            </Form.Label>

                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="Ingrese su correo"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Fecha de nacimiento
                            </Form.Label>

                            <Form.Control
                                type="date"
                                name="birth_date"
                                value={formData.birth_date}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Contraseña
                            </Form.Label>

                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Mínimo 8 caracteres"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>
                                Confirmar contraseña
                            </Form.Label>

                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                placeholder="Repita su contraseña"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-100"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Spinner
                                        size="sm"
                                        animation="border"
                                    />
                                    {" "}
                                    Registrando...
                                </>
                            ) : (
                                "Registrarse"
                            )}
                        </Button>
                    </Form>

                    <div className="text-center mt-3">
                        <span>¿Ya tienes cuenta? </span>
                        <Link to="/login">
                            Iniciar sesión
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Register;