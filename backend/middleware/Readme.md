# MedConnect Cloud Backend

A secure, scalable telemedicine platform backend built with Node.js and AWS services. MedConnect Cloud enables authentication, appointment scheduling, and video consultations through a robust REST API.

## Features

### Authentication
- Secure user signup and login powered by AWS Cognito
- Email verification and account confirmation
- JWT-based session management
- Password reset functionality

### Appointment Management
- Create, read, update, and delete appointments
- Real-time appointment status tracking
- Automated notifications and reminders
- DynamoDB-backed persistent storage

### Video Consultations
- Secure video meetings via Amazon Chime SDK
- Real-time attendee management
- Meeting recordings and chat functionality
- Screen sharing capabilities

### Security & Validation
- Request validation using Joi schema
- Centralized error handling middleware
- Input sanitization
- Rate limiting and request throttling

## Technology Stack

### Core
- Node.js (v14+)
- Express.js
- AWS SDK v3

### AWS Services
- Amazon Cognito - User authentication
- Amazon DynamoDB - Data persistence
- Amazon Chime SDK - Video consultations
- Amazon CloudWatch - Logging and monitoring

### Development Tools
- Joi - Schema validation
- dotenv - Environment configuration
- ESLint - Code linting
- Jest - Unit testing

## Project Structure

```
/medconnect-backend
├── src/
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── appointments.routes.js
│   │   └── meetings.routes.js
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── dynamo.service.js
│   │   └── chime.service.js
│   ├── middleware/
│   │   ├── error-handler.js
│   │   ├── validator.js
│   │   └── auth.middleware.js
│   └── config/
│       └── aws.config.js
├── tests/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js v14 or higher
- AWS Account with appropriate permissions
- Local development environment

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-org/medconnect-backend.git
cd medconnect-backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
```bash
cp .env.example .env
```

Edit `.env` with your AWS credentials and configuration:
```
AWS_REGION=us-east-1
COGNITO_USER_POOL_ID=your-user-pool-id
COGNITO_CLIENT_ID=your-client-id
DYNAMODB_TABLE_NAME=Appointments
```

4. Start the development server
```bash
npm run dev
```

## API Documentation

### Authentication Endpoints

| Endpoint | Method | Description | Request Body |
|----------|---------|-------------|--------------|
| `/auth/signup` | POST | Register new user | `{ email, password, name }` |
| `/auth/confirm` | POST | Confirm registration | `{ email, code }` |
| `/auth/login` | POST | User login | `{ email, password }` |
| `/auth/forgot-password` | POST | Reset password | `{ email }` |

### Appointment Endpoints

| Endpoint | Method | Description | Request Body |
|----------|---------|-------------|--------------|
| `/appointments` | POST | Create appointment | `{ patientId, doctorId, date }` |
| `/appointments/:id` | GET | Get appointment | - |
| `/appointments` | GET | List appointments | - |
| `/appointments/:id` | PUT | Update appointment | `{ status, notes }` |

### Meeting Endpoints

| Endpoint | Method | Description | Request Body |
|----------|---------|-------------|--------------|
| `/meetings` | POST | Create meeting | `{ appointmentId }` |
| `/meetings/:id/join` | POST | Join meeting | `{ attendeeId }` |
| `/meetings/:id` | DELETE | End meeting | - |

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please contact:
- Email: support@medconnect.cloud
- Documentation: https://docs.medconnect.cloud