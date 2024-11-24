const { DynamoDBClient, PutItemCommand, GetItemCommand, ScanCommand } = require('@aws-sdk/client-dynamodb');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs
const AWS_REGION = 'your-region';

const dynamoClient = new DynamoDBClient({ region: AWS_REGION });

/**
 * Add a new appointment to DynamoDB
 * @param {Object} appointment - Appointment details
 */
const createAppointment = async (appointment) => {
    const params = {
        TableName: 'Appointments',
        Item: {
            AppointmentId: { S: uuidv4() },
            PatientName: { S: appointment.patientName },
            DoctorName: { S: appointment.doctorName },
            Date: { S: appointment.date },
        },
    };

    try {
        await dynamoClient.send(new PutItemCommand(params));
        return { message: 'Appointment created successfully!' };
    } catch (err) {
        console.error('Error creating appointment:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Get an appointment by ID
 * @param {string} appointmentId - The ID of the appointment
 */
const getAppointment = async (appointmentId) => {
    const params = {
        TableName: 'Appointments',
        Key: {
            AppointmentId: { S: appointmentId },
        },
    };

    try {
        const response = await dynamoClient.send(new GetItemCommand(params));
        return response.Item;
    } catch (err) {
        console.error('Error fetching appointment:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Get all appointments
 */
const listAppointments = async () => {
    const params = { TableName: 'Appointments' };

    try {
        const response = await dynamoClient.send(new ScanCommand(params));
        return response.Items;
    } catch (err) {
        console.error('Error fetching appointments:', err.message);
        throw new Error(err.message);
    }
};

module.exports = {
    createAppointment,
    getAppointment,
    listAppointments,
};
chimeService.js