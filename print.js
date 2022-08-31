let URL = `https://my-json-server.typicode.com/Yasomalako/json.api/Students`

async function getData(){
    try{
        await fetch(URL)
        .then(response=>response.json())
        .then(res=>console.log(res))
    }
    catch{(err)}
    finally{}
}
getData()

async function postData(){
    try{
        await fetch(URL,)
        .then(response=> response.json())
        .then(res=> console.log(res))
    }
    catch{(err)}
    finally{}
}