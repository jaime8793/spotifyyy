import React, { useEffect } from "react";

function Callback() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    async function getAccessToken() {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Basic " + btoa("YOUR_CLIENT_ID:YOUR_CLIENT_SECRET"),
        },
        body: new URLSearchParams({
          code: code,
          redirect_uri: "http://localhost:3000/callback",
          grant_type: "authorization_code",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("access_token", data.access_token);
        // Redirect to the desired page after setting the access token
        //is this really working
        window.location.href = "/";
      } else {
        console.error("Failed to get access token", data);
      }
    }

    if (code) {
      getAccessToken();
    }
  }, []);

  return <div>Loading...</div>;
}

export default Callback;
