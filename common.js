function addItem() {
    $('#modelId').find('input').val('');
    setTimeout(function (){
        $('#ma').focus();
    },10);
    $('#ma').focus();
};

function saveitem() {
    $('#save').click(function(){
        
    })
};

function showToast(){
    $('#toast').show()
    setTimeout(function(){
        $('#toast').hide()
    },5000);
    
}

function createEmployee(){

};



$(document).ready(function(){

    $('#formSubmit').submit(function(e){

        e.preventDefault();
        var actionurl = e.currentTarget.action;
        let data =$("#formSubmit").serializeArray();
        var object = {};
        data.forEach((value, key) => {
            Object.keys(value).map(function(k, v) {
                Object.keys(k).map(function(n, m) {
                    console.log(value[k])
                    // object[value[k]] = value[v];
                  });
                // object[value[k]] = value[v];
              });
              
        });
        console.log(object)
        var json = JSON.stringify(object);
        $.ajax({
            url: "http://api.ngoc.local/api/ngoc22",
            method: 'POST',
            dataType: "json",
            contentType : "application/json",
            data: data,
            success: function(data){
                console.log(data)
            },
            error: function(err){
                console.log(err)
            }
        })
    })
    $('#del').click(function(){
        let id = $('#modelId').data('id');
        console.log(id);
        delData(id).then((data)=>{
            console.log(data);
            showToast();
            setTimeout(function(){
                window.location.replace('index.html')
            },2000);    
                 
        }).catch((err)=>{
            console.log(err)
        });
    })
});




