class Table{
    constructor(){
        let me = this
        me.girdTh = $('#thead');
        me.gird = $('#tbody');
        me.model = $('#modelId');
        me.renderTh();
        getData().then((data)=>{
            me.dataEm = data
            me.render();
        });
    }

    renderTh(){
        let me = this
        me.girdTh.empty(); 
        let tr = $('<tr></tr>');
        tr.append($('<th style="min-width:100px"></th>').text('Mã nhân viên'));
        tr.append($('<th></th>').text('Họ tên'));
        tr.append($('<th></th>').text('Email'));
        tr.append($('<th></th>').text('Ngày Sinh'));
        tr.append($('<th></th>').text('Giới tính'));
        tr.append($('<th></th>').text('Số điện thoại'));
        tr.append($('<th></th>').text('Vị trí'));
        tr.append($('<th></th>').text('Lương'));
        tr.append($('<th></th>').text('Phòng ban'));
        tr.append($('<th></th>').text('Tình trạng'));
        tr.append($('<th style="min-width:100px"></th>').text('Mã phòng ban'));
        me.girdTh.append(tr);
    }

    render(){
        let me = this;
        me.gird.empty();
        me.addChild();
    }

    addChild(){
        let me = this;
        if(me.dataEm){
            let th;
            let len = me.dataEm.length > 20 ? 20 : me.dataEm.length;
            for(let i =0 ; i< len  ;i++ )
            {
                let tr = $('<tr></tr>');
                let btnXoa = $('<button class="btn btn-warning">Xoa</button>');
                let btnEdit = $('<button class="btn btn-warning" style="margin-left:10px">Edit</button>');
                tr.attr('data-bs-toggle','modal',);
                tr.attr('data-bs-target',"#modelId");
                tr.append($('<td></td>').text(me.dataEm[i].EmployeeCode));
                tr.append($('<td></td>').text(me.dataEm[i].FullName));
                tr.append($('<td></td>').text(me.dataEm[i].Email));
                tr.append($('<td></td>').text(me.dataEm[i].DateOfBirth));
                tr.append($('<td></td>').text(me.dataEm[i].GenderName));
                tr.append($('<td></td>').text(me.dataEm[i].PhoneNumber));
                tr.append($('<td></td>').text(me.dataEm[i].PositionName));
                tr.append($('<td></td>').text(me.dataEm[i].Salary));
                tr.append($('<td></td>').text(me.dataEm[i].DepartmentName));
                tr.append($('<td></td>').text(me.dataEm[i].WorkStatus));
                tr.append($('<td></td>').text(me.dataEm[i].DepartmentCode));
                me.model.find('input').val('');
                tr.attr('data-id',me.dataEm[i].EmployeeId);
                tr.click(function(){
                    $('#del').show();
                    $('#saveText').text('Lưu');
                    me.model.attr('data-id',$(this).data('id'));
                    $('#ma').val(me.dataEm[i].EmployeeCode);
                    $('#name').val(me.dataEm[i].FullName);
                    $('#date').val(me.dataEm[i].DateOfBirth);
                    $('#gender').val(me.dataEm[i].GenderName == 'Nam' ? 0 : 1);
                    $('#email').val(me.dataEm[i].Email);
                    $('#phone').val(me.dataEm[i].PhoneNumber);
                    $('#salary').val(me.dataEm[i].Salary);
                });
                me.gird.append(tr);
            }; 
        }   
    };

}
var table = new Table();