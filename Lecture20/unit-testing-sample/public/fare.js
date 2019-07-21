$(() => {
  $('#btnCalcFare').click(() => {
    const km = $('#km').val()
    const min = $('#min').val()

    $.get(`/fare?km=${km}&min=${min}`, (data) => {
      $('#result').text(`₹ ${data.fare}`)
    })
  })
})
