const zohoTicketing = require('./zohoTicketing.model');

const createTicket = (ticketData) => {
  try {
    

    return {
      statusCode: 200,
      message: 'Zoho Ticket Created Successfully',
    };
  } catch (error) {
    console.error('Error occurred while creating ticket, error:', error);
    return {
      statusCode: 500,
      error: `Error occurred while creating ticket, error: ${error}`,
    };
  }
}
