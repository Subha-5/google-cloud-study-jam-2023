export function convertStringToDate (dateString: string)  {
    const newObj = new Date(dateString);
    const dateStr =  newObj.toDateString();
    const newDate = dateStr.split(" ");
    const formattedDate = [];
    for(let i=0; i<newDate.length; i++) {
       if(i==0) continue;
        formattedDate.push(newDate[i])
    }
    return formattedDate.join(" ");
}