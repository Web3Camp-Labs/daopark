const ToJSON =(str)=>{
    let arr = str.split("\n");
    const [
        name,
        slug,
        tagline,
        mission,
        values,
        emoji,
        symbol,
        address,
        logo,
        cover,
        twitter,
        discord,
        mirror,
        website,
        email
    ] = arr;
    return {
        name,
        slug,
        tagline,
        mission,
        values,
        emoji,
        symbol,
        address,
        logo,
        cover,
        twitter,
        discord,
        mirror,
        website,
        email
    }
}


const formatStr = (obj,type)=>{
    if(obj == null || !obj[type]) return;
    const str = obj[type].trim()
    return str.split(": ")[1];
}
export default {
    ToJSON,
    formatStr
}