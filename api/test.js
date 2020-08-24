module.exports = async (req, res) => {
  const zoho = require("@trifoia/zcrmsdk");

  const config = {
    client_id: "a",
    client_secret: "a",
    iamurl: "accounts.zoho.eu",
    base_url: "www.zohoapis.eu",
    redirect_url: "https://ofof.nl",
    refresh_token: "b",
    mysql_module: "local",
  };

  try {
    const client = await zoho.initialize(config);
    let resultRaw = await client.API.MODULES.get({
      module: "Deals",
    });

    let result = JSON.parse(resultRaw.body);
    console.log(result);
    res.status(200).end(`Successfully sent request!`);
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
};
