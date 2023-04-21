export async function getIP() {
  try {
    return fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => data.ip)
      .then(async (ip) => {
        return ip;
      });
  } catch (err) {
    console.error(err);
  }
}
