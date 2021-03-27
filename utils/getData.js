export const getImage = (entry)=>{
    return entry.image[0].fields.file.url;
};

export const getContenType = (entry)=>{
    return entry.contentType.fields.contentTypeName;
};

