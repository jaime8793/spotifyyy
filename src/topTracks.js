import React, { useState, useEffect } from "react";

function GetItems() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    async function getProfile() {
      const accessToken = localStorage.getItem("access_token");
      const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      const data = await response.json();
      setProfileData(data);
    }

    getProfile();
  }, []);

  return <div>{profileData && <div>{profileData.artists}</div>}</div>;
}

export default GetItems;
