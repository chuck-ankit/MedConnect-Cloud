const AWS = require('aws-sdk');

// Configure AWS region
AWS.config.update({ region: 'your-region' });

const chime = new AWS.Chime({ region: 'your-region' });
chime.endpoint = 'https://service.chime.aws.amazon.com';

/**
 * Create a new Chime meeting
 */
const createMeeting = async () => {
    const params = {
        ClientRequestToken: `token-${Date.now()}`, // Unique token for the meeting
        MediaRegion: 'us-east-1', // Specify your region
    };

    try {
        const meeting = await chime.createMeeting(params).promise();
        return meeting;
    } catch (err) {
        console.error('Error creating meeting:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Create an attendee for a Chime meeting
 * @param {string} meetingId - The ID of the meeting
 * @param {string} externalUserId - Unique ID for the user
 */
const createAttendee = async (meetingId, externalUserId) => {
    const params = {
        MeetingId: meetingId,
        ExternalUserId: externalUserId, // User ID (e.g., email or unique string)
    };

    try {
        const attendee = await chime.createAttendee(params).promise();
        return attendee;
    } catch (err) {
        console.error('Error creating attendee:', err.message);
        throw new Error(err.message);
    }
};

module.exports = {
    createMeeting,
    createAttendee,
};
