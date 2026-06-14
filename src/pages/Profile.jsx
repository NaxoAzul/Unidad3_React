import { Card, Container, Badge } from "react-bootstrap";
import { getUser } from "../services/authService";

function Profile() {
    const user = getUser();

    const getRoleBadge = (role) => {
        if (role === "admin") return <Badge bg="danger">Administrador</Badge>;
        if (role === "coach") return <Badge bg="success">Coach</Badge>;
        return <Badge bg="primary">Usuario</Badge>;
    };

    return (
        <Container className="mt-4">
            <Card className="shadow">
                <Card.Header>
                    <h4 className="mb-0">Mi Perfil</h4>
                </Card.Header>

                <Card.Body>
                    <p><strong>ID:</strong> {user?.id}</p>
                    <p><strong>Nombre:</strong> {user?.full_name}</p>
                    <p><strong>Correo:</strong> {user?.email}</p>
                    <p><strong>Rol:</strong> {getRoleBadge(user?.role)}</p>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;