type SearchRequest = { query: string };
type SearchResponse = { items: string[] };

export const getSearch = async ({
  query,
}: SearchRequest): Promise<SearchResponse> => {
  // const response = await fetch(`.../s=${query}`)
  // return response.data as SearchResponse

  return { items: ['A', 'B', 'C'] };
};
