export const getImageUrl = (set: string, cardNumber: string, extension: string = 'png') =>
{
    return `/images/${set}/${set}-${cardNumber.replace("#", "")}.${extension}`;
};