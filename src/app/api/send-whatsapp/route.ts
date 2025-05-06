// app/api/send-whatsapp/route.ts

import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  const body = await req.json();
  const message = body.message;

  try {
    const gupshupRes = await axios.post(
      'https://api.gupshup.io/sm/api/v1/msg',
      null,
      {
        params: {
          channel: 'whatsapp',
          source: process.env.GUPSHUP_SOURCE,       // your number
          destination: '918219393501',   // receiver number
          message: message,
          'src.name': 'your-app-name'
        },
        headers: {
          apikey: process.env.GUPSHUP_API_KEY,
        }
      }
    );

    return NextResponse.json({ success: true, data: gupshupRes.data });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
