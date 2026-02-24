import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse form data
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const trimmedName = name?.trim() || '';
    const trimmedMessage = message?.trim() || '';
    const trimmedEmail = email?.trim() || '';
    const trimmedPhone = phone?.trim() || '';

    if (!trimmedName || !trimmedMessage) {
      return new Response(JSON.stringify({
        error: 'Name and message are required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    if (!trimmedEmail && !trimmedPhone) {
      return new Response(JSON.stringify({
        error: 'Phone or email is required'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
      return new Response(JSON.stringify({
        error: 'Invalid email format'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }

    if (trimmedPhone) {
      const digits = trimmedPhone.replace(/\D/g, '');
      if (digits.length < 10) {
        return new Response(JSON.stringify({
          error: 'Invalid phone format'
        }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    }

    // Log the contact form submission (in production, you'd save to database or send email)
    console.log('📧 New Contact Form Submission:');
    console.log('================================');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'Not provided'}`);
    console.log(`Service Interest: ${service || 'Not specified'}`);
    console.log(`Message: ${message || 'No message'}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log('================================');

    // TODO: In production, implement one of the following:
    // 1. Save to database (Supabase, MongoDB, etc.)
    // 2. Send email notification (SendGrid, Resend, etc.)
    // 3. Send to CRM system (HubSpot, Salesforce, etc.)
    // 4. Send to messaging service (Slack, Discord, etc.)

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return success response
    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact form submitted successfully'
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return new Response(JSON.stringify({ 
      error: 'Internal server error' 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
