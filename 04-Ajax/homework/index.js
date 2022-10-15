$('#boton').click(() => {
    $('#lista').empty()
    $.get("http://localhost:5000/amigos", function(data) {
        data.forEach(e => $(`
            <li id=${e.id}>${e.name}</li>
        `).appendTo('#lista'))
    })
    if($('img')) $('img').remove()
})

$('#search').click(() => {
    $.get(`http://localhost:5000/amigos/${$('#input').val()}`, function(data) {
        $("#amigo").text(`${data.name} ${data.age} ${data.email}`)
    })
})

$('#delete').click(() => {
    $.ajax({
        url: `http://localhost:5000/amigos/${$('#inputDelete').val()}`,
        type: 'DELETE',
        success: function(data) {
            $("#success").text(data[$('#inputDelete').val()].name)
        }
    });
})