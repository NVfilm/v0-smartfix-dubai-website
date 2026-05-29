import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }

  try {
    const { name, phone, service, location, message } = await req.json()

    // Validate form data
    if (!name || !phone || !service || !location) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the submission (in production, you would send an email here)
    console.log('Form submission:', { name, phone, service, location, message, timestamp: new Date().toISOString() })

    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing form:', error)
    return NextResponse.json(
      { error: 'Error processing your request' },
      { status: 500 }
    )
  }
}

