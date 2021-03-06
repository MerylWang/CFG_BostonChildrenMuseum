$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var place = button.data('place') // Extract info from data-* attributes
    var desc = button.data('desc')
    var pic = button.data('pic')
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text(place)
    modal.find('.modal-desc').text(desc)
    $('#modal-pic').attr("src", pic)
    //modal.find('.modal-body input').val(recipient)
})