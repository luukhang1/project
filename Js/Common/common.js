function addItem() {
    $('#del').hide();
    $('#saveText').text('Thêm');
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

function showToast(toast,string=""){
    $('#'+toast).show()
    if(string !== ""){
        $('#'+toast+1).text(string);
    }
    setTimeout(function(){
        $('#'+toast).hide()
    },2000);
    
}


function createEmployee(){

};



$(document).ready(function(){

    $('#formSubmit').submit(function(e){

        e.preventDefault();
        var actionurl = e.currentTarget.action;
        let dataForm =$("#formSubmit").serializeArray();
        let dataRequest={};
        let dataArray= [];
        for(let i=0 ;i<dataForm.length;i++) {
            Object.keys(dataForm[i]).map(function(key, index) {
                dataArray.push(dataForm[i][key]);
              });
              
         }
        for(let i =0 ;i< dataArray.length;i+=2) {
            dataRequest[dataArray[i]]= dataArray[i+1];
        }
        let method = 'POST';
        let url = "https://cukcuk.manhnv.net/api/v1/Employees";
        if($('#modelId').data('id')){
            method = 'PUT';
            url+='/'+$('#modelId').data('id');
        }
        console.log(method)
        $.ajax({
            url: url,
            method: method,
            dataType: "json",
            contentType : "application/json",
            data: JSON.stringify(dataRequest),
            success: function(data){
                showToast('toast',method != 'PUT' ?'Thêm Thành Công': 'Sửa thành công');
                setTimeout(function(){
                    window.location.replace('index.html')
               },2000); 

            },
            error: function(err){
            showToast('toast2',err.responseJSON.devMsg);
            }
        })
    })
    $('#del').click(function(){
        let id = $('#modelId').data('id');
        delData(id).then((data)=>{
            console.log(data);
            showToast('toast');
            setTimeout(function(){
                window.location.replace('index.html')
            },2000);    
                 
        }).catch((err)=>{
            console.log(err)
        });
    })
});




