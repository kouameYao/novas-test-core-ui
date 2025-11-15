// Configuration temporaire pour éviter les erreurs de build Better Auth
// TODO: Réimplémenter Better Auth avec une configuration compatible ESM

export const POST = async (request: Request) => {
  return new Response(
    JSON.stringify({
      error: 'Auth service temporarily disabled for build compatibility',
      message: 'Please implement proper authentication'
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};

export const GET = async (request: Request) => {
  return new Response(
    JSON.stringify({
      error: 'Auth service temporarily disabled for build compatibility',
      message: 'Please implement proper authentication'
    }),
    {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  );
};
