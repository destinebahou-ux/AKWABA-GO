// IMPORTANT: ne pas activer cette fonction en production tant que la signature
// du webhook n'est pas vérifiée exactement selon la documentation Wave du marchand.
// Un webhook non authentifié ne doit JAMAIS activer un abonnement.
Deno.serve(async (_req) => new Response(
  JSON.stringify({
    received: false,
    message: "Webhook non activé : implémenter la vérification cryptographique Wave avant tout traitement.",
  }),
  { status: 501, headers: { "Content-Type": "application/json" } },
));
