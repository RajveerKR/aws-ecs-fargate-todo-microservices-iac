# AWS ECS Fargate Todo Microservices Deployment

## Project Overview

This project demonstrates the deployment of a containerized Todo application using:

- Amazon ECR (Elastic Container Registry)
- Amazon ECS (Elastic Container Service)
- AWS Fargate (Serverless container runtime)
- EC2 Security Groups
- Default VPC networking

The application follows a microservices architecture:
- Backend Service (Node.js API – Port 3000)
- Frontend Service (Web UI – Port 80)

---

## Architecture Overview

Docker Images → Amazon ECR → ECS Task Definitions → ECS Services → Fargate → VPC + Security Group

---

## Implementation Steps

### 1️⃣ Created ECR Repositories
- todo-backend
- todo-frontend

### 2️⃣ Built and Pushed Docker Images
- Backend image pushed to ECR
- Frontend image pushed to ECR

### 3️⃣ Created ECS Cluster
- Cluster Name: `todo-cluster`
- Launch Type: Fargate

### 4️⃣ Registered Task Definitions
- `todo-backend-task`
- `todo-frontend-task`
- Network mode: awsvpc
- Log driver: awslogs

### 5️⃣ Identified Default VPC and Subnets
- Retrieved default VPC using AWS CLI
- Extracted associated subnets for deployment

### 6️⃣ Created Security Group
- Security Group Name: `todo-ecs-sg`
- Inbound Rules:
  - Port 80 (HTTP)
  - Port 3000 (Backend API)

### 7️⃣ Created Backend ECS Service
- Launch Type: FARGATE
- Desired count: 1
- Public IP assigned
- Attached security group

---

## Evidence

Screenshots and deployment evidence are available in:

- `/screenshots`
- `/docs`

---
## Troubleshooting

See detailed deployment issue resolution here:
[Deployment Troubleshooting](docs/deployment-troubleshooting.md)

## Technologies Used

- AWS CLI
- Docker
- Amazon ECR
- Amazon ECS
- AWS Fargate
- EC2 Networking
- Git & GitHub

---

## Author

Rajveer Kaur  
Cloud Engineering & Data Analytics

