const { url } = require("../../../db");

const getChoppedURL = async (choppedUrl) => {
    const data = await url.findOne({ where: { choppedURL: choppedUrl } });
    return data;
}

module.exports = { getChoppedURL };