//   Trigger a Netlify deployment.

export async function triggerNetlifyBuild(): Promise<void> {
  const BASE_API_URL = import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL;
  
  const res = await fetch(`${BASE_API_URL}/website/admin/triggerdeploygp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  });

  const text = await res.text();
  if (!res.ok) throw new Error(text || `HTTP ${res.status}`);

  JSON.parse(text);
}
