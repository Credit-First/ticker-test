export async function httpGet(url: string) {
  const data = await fetch(url);
  return data.json();
}
