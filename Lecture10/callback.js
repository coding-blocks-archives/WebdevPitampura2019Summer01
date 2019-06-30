const download = function (url, callback) {
  setTimeout(() => {
    callback(null, "Secret Data")
  }, 1000)
}

const resize = function (file, callback) {
  setTimeout(() => {
    callback(null, "Resized Data")
  }, 2000)
}

const upload = function (resizedFile, callback) {
  setTimeout(() => {
    callback(null, "cb.lk/secret.jpg")
  }, 1000)
}

download("github.com/abhishek.jpg", function (err, file) {
  if (err) {
    // handle err;
  } else {
    resize(file, (err, resizedFile) => {
      if (err)
        return;

      upload(resizedFile, (err, url) => {
        if (err)
          return;

        console.log(url)
      })
    })

  }


})