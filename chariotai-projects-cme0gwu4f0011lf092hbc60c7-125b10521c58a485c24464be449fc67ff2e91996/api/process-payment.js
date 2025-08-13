// This is a simple Node.js/Express endpoint for processing Square payments
// You'll need to set this up on your server or use a serverless function

const { Client, Environment } = require('squareup');

// Initialize Square client
const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN, // Your Square Access Token
  environment: Environment.Sandbox, // Use Environment.Production for live payments
});

const { paymentsApi } = client;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { sourceId, amount, currency, customerInfo, idempotencyKey } = req.body;

    // Create payment request
    const paymentRequest = {
      sourceId,
      amountMoney: {
        amount: amount, // Amount in cents
        currency: currency || 'USD',
      },
      idempotencyKey,
      note: `Registration - ${customerInfo.firstName} ${customerInfo.lastName}`,
      buyerEmailAddress: customerInfo.email,
    };

    // Process payment with Square
    const response = await paymentsApi.createPayment(paymentRequest);

    if (response.result.payment) {
      // Payment successful
      const payment = response.result.payment;
      
      // Here you would typically:
      // 1. Save the registration to your database
      // 2. Send confirmation email
      // 3. Update your records
      
      console.log('Payment successful:', {
        paymentId: payment.id,
        amount: payment.amountMoney.amount,
        customer: customerInfo,
      });

      res.status(200).json({
        success: true,
        paymentId: payment.id,
        amount: payment.amountMoney.amount,
        status: payment.status,
      });
    } else {
      throw new Error('Payment failed');
    }
  } catch (error) {
    console.error('Payment processing error:', error);
    
    res.status(400).json({
      success: false,
      error: error.message || 'Payment processing failed',
    });
  }
}

// Alternative: Simple fetch-based approach for testing
// You can use this structure with any backend framework
/*
app.post('/api/process-payment', async (req, res) => {
  // Same logic as above
});
*/