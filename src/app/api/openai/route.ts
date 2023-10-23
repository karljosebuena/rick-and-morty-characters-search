import { generateCharacterInformation } from "@/lib/openai";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const runtime = "edge";

type RequestBodyProps = {
  name: string;
  onSmallScreen: boolean;
}

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse("unauthorised", { status: 401 });
  }
  const body: RequestBodyProps = await req.json();
  const { name, onSmallScreen } = body;
  const generatedInfo = await generateCharacterInformation(name, onSmallScreen);
  if (!generatedInfo) {
    return new NextResponse("failed to generate character information", {
      status: 500,
    });
  }

  return NextResponse.json({
    generatedInfo
  });
}