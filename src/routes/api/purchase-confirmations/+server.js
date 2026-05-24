import { json } from "@sveltejs/kit";

export async function POST({ request }) {
  try {
    const requestBody = await request.json();
    console.log(requestBody);
    return json({success: true})
  } catch (error) {
    return json({ error }, { status: 500 })
  }
}
