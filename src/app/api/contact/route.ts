import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      phone,
      email,
      location,
      serviceInterested,
      requirementAmount,
      employmentType,
      preferredContactMethod,
      message,
      disclaimerAccepted,
    } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== 'string' || !fullName.trim()) {
      return NextResponse.json({ success: false, message: 'Full name is required.' }, { status: 400 });
    }

    if (!phone || typeof phone !== 'string' || !/^[0-9+\s-]{8,15}$/.test(phone.trim())) {
      return NextResponse.json({ success: false, message: 'A valid phone number is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ success: false, message: 'A valid email address is required.' }, { status: 400 });
    }

    if (!location || typeof location !== 'string' || !location.trim()) {
      return NextResponse.json({ success: false, message: 'City / Location is required.' }, { status: 400 });
    }

    if (!disclaimerAccepted) {
      return NextResponse.json({ success: false, message: 'Disclaimer acknowledgment is required.' }, { status: 400 });
    }

    // Sanitize string inputs
    const sanitize = (str: string) => str.replace(/<[^>]*>?/gm, '').trim();

    const sanitizedData = {
      fullName: sanitize(fullName),
      phone: sanitize(phone),
      email: sanitize(email).toLowerCase(),
      location: sanitize(location),
      serviceInterested: sanitize(serviceInterested || 'Home Loan'),
      requirementAmount: requirementAmount ? sanitize(String(requirementAmount)) : '',
      employmentType: employmentType ? sanitize(String(employmentType)) : 'Salaried',
      preferredContactMethod: preferredContactMethod ? sanitize(String(preferredContactMethod)) : 'Phone',
      message: message ? sanitize(String(message)) : '',
      submittedAt: new Date().toISOString(),
    };

    // Log minimal operational confirmation without exposing sensitive PII to frontend
    console.log(`[Lead Enquiry Received] Service: ${sanitizedData.serviceInterested} | Location: ${sanitizedData.location}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you. Your enquiry has been received. Royal Returns will review your request and contact you using the details provided.',
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'An error occurred while processing your enquiry. Please call +91 96332 70901 directly.',
    }, { status: 500 });
  }
}
