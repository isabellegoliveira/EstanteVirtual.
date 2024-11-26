export const ApiURL =
  "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";
export const authHeader = { Authorization: "Bearer 241607" };

export async function findAll() {
  console.log("Buscando livros...");

  const requestInfo = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "Bearer 241607",
    },
  };

  try {
    const response = await fetch(ApiURL, requestInfo);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error("Falha ao tentar buscar os livros.");
    }
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    throw error;
  }
}
