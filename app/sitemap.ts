export default function sitemap() {
  const base = "https://niusukeji.com";
  const urls = ["", "/thanks", "#solutions", "#assets", "#power", "#fire", "#cases", "#contact"]
    .map((u) => ({
      url: `${base}${u.startsWith("#") ? "/" : ""}${u}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: u === "" ? 1.0 : 0.6,
    }));
  return urls;
}
