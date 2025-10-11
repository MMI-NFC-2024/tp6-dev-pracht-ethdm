import penguins from "../../assets/penguins.json";

export async function GET({ params, request }) {
  // Ici tu peux faire un vrai fetch vers une DB ou API externe
  // Pour l'exemple, on retourne le JSON avec un timestamp
  
  const data = {
    timestamp: new Date().toISOString(),
    data: penguins
  };

  return new Response(JSON.stringify(penguins), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store" // Empêche le cache
    }
  });
}
