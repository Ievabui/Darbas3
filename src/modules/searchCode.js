import ajaxService from "./ajaxService";

const searchCode =() =>{
    document.querySelector('.form').addEventListener('submit',(e)=>{
        e.preventDefault() //keiciama standartine formos elgsena
        const searchTerm = document.querySelector('.term').value;
        let searchResponse;
        ajaxService(searchTerm)
            .then(result => searchResponse = result)
            .then(()=>console.log(searchResponse))
    })
}

export default searchCode