
## Security Configuration

A dedicated security group (todo-ecs-sg) was created for the ECS application.

Inbound Rules:
- Port 80 (HTTP) – Public access for frontend
- Port 3000 – Backend API access

![Security Group Overview](docs/security-group-overview.png)

![Inbound Rules](docs/security-group-inbound.png)
