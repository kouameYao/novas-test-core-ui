import { NextRequest, NextResponse } from 'next/server';

import { API_BASE_URL } from '@/lib/config';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');

    const headers: HeadersInit = {
      'Content-Type': 'application/json'
    };

    if (authHeader) {
      headers.Authorization = authHeader;
    }

    const response = await fetch(`${API_BASE_URL}/bank-accounts/balance`, {
      method: 'GET',
      headers
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: error.message || 'Erreur lors de la récupération du solde' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la récupération du solde' },
      { status: 500 }
    );
  }
}
