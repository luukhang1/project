$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
async function getData(){
    return await $.ajax({
        url: "https://cukcuk.manhnv.net/api/v1/Employees",
        context: document.body
    })
}

async function delData(id){
    return await $.ajax({
        url: "https://cukcuk.manhnv.net/api/v1/Employees/"+id,
         method: 'DELETE',
    })
}
