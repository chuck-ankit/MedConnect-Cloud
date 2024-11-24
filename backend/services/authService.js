const AWS = require('aws-sdk');

// Configure AWS region
AWS.config.update({ region: 'your-region' });

const cognito = new AWS.CognitoIdentityServiceProvider();

// Your User Pool details
const USER_POOL_ID = 'your-user-pool-id';
const CLIENT_ID = 'your-app-client-id';

/**
 * Sign up a new user
 * @param {string} email - User's email
 * @param {string} password - User's password
 */
const signUpUser = async (email, password) => {
    const params = {
        ClientId: CLIENT_ID,
        Username: email,
        Password: password,
        UserAttributes: [
            {
                Name: 'email',
                Value: email,
            },
        ],
    };

    try {
        const response = await cognito.signUp(params).promise();
        return response;
    } catch (err) {
        console.error('Error during sign-up:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Confirm user signup with a verification code
 * @param {string} email - User's email
 * @param {string} code - Verification code sent to the user's email
 */
const confirmSignUp = async (email, code) => {
    const params = {
        ClientId: CLIENT_ID,
        Username: email,
        ConfirmationCode: code,
    };

    try {
        const response = await cognito.confirmSignUp(params).promise();
        return response;
    } catch (err) {
        console.error('Error confirming sign-up:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Log in a user
 * @param {string} email - User's email
 * @param {string} password - User's password
 */
const loginUser = async (email, password) => {
    const params = {
        AuthFlow: 'USER_PASSWORD_AUTH',
        ClientId: CLIENT_ID,
        AuthParameters: {
            USERNAME: email,
            PASSWORD: password,
        },
    };

    try {
        const response = await cognito.initiateAuth(params).promise();
        return response.AuthenticationResult; // Contains AccessToken, IdToken, and RefreshToken
    } catch (err) {
        console.error('Error logging in:', err.message);
        throw new Error(err.message);
    }
};

/**
 * Resend confirmation code to user
 * @param {string} email - User's email
 */
const resendConfirmationCode = async (email) => {
    const params = {
        ClientId: CLIENT_ID,
        Username: email,
    };

    try {
        const response = await cognito.resendConfirmationCode(params).promise();
        return response;
    } catch (err) {
        console.error('Error resending confirmation code:', err.message);
        throw new Error(err.message);
    }
};

module.exports = {
    signUpUser,
    confirmSignUp,
    loginUser,
    resendConfirmationCode,
};
