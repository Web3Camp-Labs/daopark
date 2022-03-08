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
export default {
    ToJSON
}