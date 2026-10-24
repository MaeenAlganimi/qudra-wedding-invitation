import type { IncomingMessage, ServerResponse } from 'node:http';
import { respond } from '../server/gemini';
export default async function handler(req: IncomingMessage & { body?: Record<string, unknown> }, res: ServerResponse) {
  res.setHeader('Content-Type', 'application/json');
  if (req.method !== 'POST') { res.statusCode = 405; res.end(JSON.stringify({error:'Method not allowed'})); return; }
  try { res.end(JSON.stringify(await respond(req.body || {}))); }
  catch { res.statusCode = 502; res.end(JSON.stringify({error:'Unable to generate right now. Please try again.'})); }
}
