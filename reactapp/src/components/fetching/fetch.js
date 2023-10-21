
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export function FetchLogic() {
    async function getData(url) {
        return await fetch(`${url}`)
    }
    return {getData}
}


export async function postData(url, body) {
    console.log(body)
    return await fetch(`${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        redirect: 'follow',
        headers: myHeaders
    })
}




