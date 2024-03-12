export async function login(userdata) {
  return fetch("/api/email-auth", {
    method: "POST",
    cache: "no-cache",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userdata),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        return {success:"Logged in successfully",uid:data.uid};
      } else return {error:data.error};
    });
}
