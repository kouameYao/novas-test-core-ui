import { NextRequest, NextResponse } from 'next/server';

import { API_BASE_URL } from '@/lib/config';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const authHeader = request.headers.get('authorization');

    const headers: HeadersInit = {
      'Content-Type': 'application/json'
    };

    if (authHeader) {
      headers.Authorization = authHeader;
    }

    const response = await fetch(`${API_BASE_URL}/bank-accounts/withdraw`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: error.message || 'Erreur lors du retrait' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors du retrait' },
      { status: 500 }
    );
  }
}
