const BASE_API_URL = import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL

async function parseApiResponse(res: Response) {
  const text = await res.text();
  if (!res.ok) throw new Error(text || `HTTP ${res.status}`);
  try {
    const json = JSON.parse(text);
    return json?.data ?? json;
  } catch {
    return text;
  }
}

export async function fetchConfigValue(key: string): Promise<string | null> {
  const res = await fetch(`${BASE_API_URL}/api/website/admin/getConfig`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ key }),
  });

  const text = await res.text();

  if (!res.ok) {
    console.error("getConfig failed:", res.status, text);
    return null;
  }

  try {
    const json = JSON.parse(text);
    const data = json?.data ?? json?.payload ?? json;

    if (typeof data === "string") return data.trim();
    if (typeof data?.value === "string") return data.value.trim();

    console.error("Unexpected response shape:", json);
    return null;
  } catch (e) {
    // If backend returns plain text, this still works
    return text.trim() || null;
  }
}


export async function uploadBlogImageToApi(params: {
  file: Blob;
  folder?: string;
  filename?: string;
}) {
  const form = new FormData();
  form.append("folder", params.folder || "content-images");
  if (params.filename) form.append("filename", params.filename);
  form.append("file", params.file, params.filename || "image.webp");

  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/uploadImage`, {
    method: "POST",
    body: form,
  });

  return parseApiResponse(res);
}

export async function apiListAllPosts() {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/listAll`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return parseApiResponse(res);
}

export async function apiCreatePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function apiUpdatePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/update`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function apiDeletePost(payload: any) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/admin/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return parseApiResponse(res);
}

export async function getBlogPostBySlug(slug: string) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/getBySlug`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
  });
  return parseApiResponse(res);
}

export async function getBlogPostContentById(slug: string | number) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/getContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug }),
  });
  return parseApiResponse(res);
}

export async function getRelatedBlogPosts(excludeId: string | number, limit = 6) {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/related`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ excludeId, limit }),
  });
  return parseApiResponse(res);
}

export async function fetchBlogPostsListing(): Promise<any[]> {
  const res = await fetch(`${BASE_API_URL}/api/website/blog/list`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  const json = await res.json();

  // Match your ApiResponseHandler format
  return json?.data ?? json;
}
