export const getShortenedUrl = async (initialUrl: string) => {
  const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${initialUrl}
      `).then(r => r.json());
  return data.result.short_link;
};
