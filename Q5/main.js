const API_URL = "https://62ac4e209fa81d00a7ae91f1.mockapi.io/api/Names";
$(document).ready(function(){
    function getData(){
        $.ajax({url:`${API_URL}`}).done(function(names){
            names.forEach(e => {
             addTotable(e);
            })
        });
    };   
// get
function addTotable(data){
    let div = `<div class="d-flex align-items-center">${data.name}</div>`;
    let aTag = `<a href="#!" data-mdb-toggle="tooltip" title="Remove item">
    <i class="fas fa-times text-primary"></i>
    </a>`
    let li = `<li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">${div}${aTag}</li>`;
    $(".list-group").append(li);  
    }
    getData();
});
