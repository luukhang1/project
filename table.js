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
        tr.append($('<th></th>').text('EmployeeCode'));
        tr.append($('<th></th>').text('FullName'));
        tr.append($('<th></th>').text('Email'));
        tr.append($('<th></th>').text('DateOfBirth'));
        tr.append($('<th></th>').text('GenderName'));
        tr.append($('<th></th>').text('PhoneNumber'));
        tr.append($('<th></th>').text('PositionName'));
        tr.append($('<th></th>').text('Salary'));
        tr.append($('<th></th>').text('DepartmentName'));
        tr.append($('<th></th>').text('WorkStatus'));
        tr.append($('<th></th>').text('DepartmentCode'));
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
                me.model.attr('data-id',me.dataEm[i].EmployeeId);
                tr.click(function(){
                    $('#ma').val(me.dataEm[i].EmployeeCode);
                    $('#name').val(me.dataEm[i].FullName);
                    $('#date').val(me.dataEm[i].DateOfBirth);
                });
                me.gird.append(tr);
            }; 
        }   
    };

}
var table = new Table();