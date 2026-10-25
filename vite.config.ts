import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { respond } from './server/gemini';
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'GEMINI_API_KEY');
  if (env.GEMINI_API_KEY) process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
  return { plugins: [react(), tsconfigPaths(), { name: 'invite-api', configureServer(server) {
    server.middlewares.use('/api/invitation', async (req, res) => {
      res.setHeader('Content-Type', 'application/json');
      if (req.method !== 'POST') { res.statusCode = 405; res.end('{}'); return; }
      try { let raw = ''; for await (const chunk of req) { raw += chunk; if (raw.length > 120000) throw new Error('Too large'); } res.end(JSON.stringify(await respond(JSON.parse(raw || '{}')))); }
      catch { res.statusCode = 502; res.end(JSON.stringify({error:'Unable to generate right now. Please try again.'})); }
    });
  }}] };
});
