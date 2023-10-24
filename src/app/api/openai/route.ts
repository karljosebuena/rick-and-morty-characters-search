import { auth } from '@clerk/nextjs';
import { NextRequest, NextResponse } from 'next/server';

import { generateCharacterInformation } from '@/lib/openai';

export const runtime = 'edge';

/**
 * This function generates a character sheet for a character with a given name.
 * It returns a 200 response with the character sheet if the character sheet is successfully generated
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
    const { name, onSmallScreen } = body;
    const generatedInfo = await generateCharacterInformation(name, onSmallScreen);
    if (!generatedInfo) {
      return new NextResponse('failed to generate character information', {
        status: 500
      });
    }

    return NextResponse.json({
      generatedInfo
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ code: 'Internal server error', error: (error as Error).message }), {
      status: 500
    });
  }
}
