module.exports = {

  calcFare(km, min) {
    if (km == null || min == null) {
      throw new Error('Must pass km and min')
    }
    let fare = 20
    if (km > 2) {
      fare += (km - 2) * 5
    }

    if (min > 15) {
      fare += (min - 15) * 0.5
    }

    return fare

  }
}
