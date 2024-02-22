const { url} = require("../../../db")
const CryptoJS = require('crypto-js');

const hash=(url, id)=>{
    const datosConcatenados = `${url}${id}`;
    const hashedResult = CryptoJS.SHA256(datosConcatenados);
    const shortHash = hashedResult.toString(CryptoJS.enc.Hex).substring(0, 6);
    return shortHash;
}

const createUrl = async (URL)=>{
    let newUrl = await url.create({URL})
    let choppedURL = hash(URL, newUrl.id)
    newUrl.update({choppedURL: choppedURL})
    return newUrl
}

module.exports = {createUrl}