🚀 AWS ECS Fargate Todo Microservices Deployment (Infrastructure as Code)

👩‍💻 Rajveer Kaur – Cloud / DevOps Portfolio Project
📍 Region: us-east-1

## Project Overview

📌 Project Overview

This project demonstrates a production-style deployment of a containerised Todo microservices application on AWS using Infrastructure as Code (IaC).

The application consists of:

Frontend Service – Nginx (Port 80)

Backend Service – Node.js API (Port 3000)

The infrastructure is provisioned automatically using a single AWS CloudFormation YAML template, implementing secure networking and container orchestration best practices.

🛠 Technologies Used

Docker (Containerisation)

Amazon ECR (Image Registry)

Amazon ECS (Fargate Launch Type)

Application Load Balancer (ALB)

Amazon VPC (Public & Private Subnets)

Security Groups (Least Privilege)

IAM Roles

AWS CloudFormation (Infrastructure as Code)

AWS CLI

Git & GitHub

-------------------------------

## Architecture Overview

Internet
   │
   ▼
Application Load Balancer (Public Subnets)
   │
   ▼
ECS Fargate Cluster
 ├── Frontend Service
 └── Backend Service
   │
Amazon ECR (Container Images)

VPC
 ├── Public Subnets (ALB)
 └── Private Subnets (ECS Tasks)

Architecture Highlights

Containers run on AWS Fargate (serverless container runtime)

ALB acts as public entry point

ECS tasks run in private subnets

Backend is not directly exposed to the internet

Security groups enforce controlled traffic flow

------------------------------------------
🔐 Security Design
This architecture follows the principle of least privilege:

ALB Security Group:

Allows inbound HTTP (port 80) from internet

ECS Service Security Group:

Allows inbound traffic only from ALB security group

Backend service is not publicly accessible

IAM execution role allows:

Pulling images from ECR

Writing logs to CloudWatch

No container is directly exposed to public traffic.

## Implementation Steps

Implementation Summary

The infrastructure was provisioned entirely using AWS CloudFormation to ensure automation and reproducibility.

The deployment included:

1️⃣ Containerisation

Built Docker images for frontend and backend.

Tagged and pushed images to separate Amazon ECR repositories.

2️⃣ Infrastructure Provisioning via CloudFormation

The YAML template created:

Custom VPC

Public and Private Subnets

Internet Gateway and Route Tables

Application Load Balancer (Public)

ECS Cluster (Fargate launch type)

Two Task Definitions (Frontend & Backend)

Two ECS Services

Security Groups with least-privilege rules

IAM Execution Role

ALB DNS Output

3️⃣ Service Deployment

ECS services launched in private subnets

Containers pulled images from ECR

ALB routed external traffic to frontend service

Backend remained internal-only

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
🎯 Key Skills Demonstrated

Infrastructure as Code (CloudFormation)

Secure cloud networking design

Container orchestration with ECS Fargate

Load balancing using ALB

IAM role configuration

DevOps deployment automation

Microservices architecture implementation

🚀 Why This Project Matters

This repository reflects real-world cloud engineering practices:

✔ Automated infrastructure provisioning
✔ Secure network segmentation
✔ Scalable container deployment
✔ Reproducible environments
✔ Production-ready architecture


## Author

Rajveer Kaur  
Cloud Engineering & Data Analytics


