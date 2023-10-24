import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs';
import axios from 'axios';

/**
 * This code is responsible for authenticating a user and returning a 401 response if the user is not authenticated.
 * It also passes the request body to the GraphQL server and returns a 500 response if the GraphQL server returns an error.
 * It returns a 200 response with the GraphQL server's response if the GraphQL server returns a successful response.
 * @export POST
 * @param {NextRequest} request
 * @returns {Promise<NextResponse>}
 */
export async function POST(request: NextRequest) {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('unauthorised', { status: 401 });
    }

    const body = await request.json();
    const response = await axios.post(process.env.GRAPHQL_URL as string, JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return new NextResponse(JSON.stringify({ code: 'Internal server error', error: (error as Error).message }), {
      status: 500
    });
  }
}
