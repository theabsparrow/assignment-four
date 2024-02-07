// -----------------problem number four---------------------
function password(obj) {
    const stringYear = obj.birthYear;
    if (typeof obj !== "object"){
        return "invalid";
    }
    else if (!obj.name || !obj.birthYear || !obj.siteName){
        return "invalid";
    }
    else if (stringYear.toString().length !== 4){
        return "invalid";
    }
    const website = obj.siteName;
    const websiteName = website[0].toUpperCase() + website.slice(1).toLowerCase();
    const userName = obj.name;
     const passwordStructure = websiteName + "#" + userName + "@" + stringYear.toString();
     return passwordStructure;
    }
    const socialMedia = {
        name: "kolimuddin",
        birthYear: 1999 ,
        siteName: "instagram"
    }
    const result = password(socialMedia);
    console.log(result);