let x = 10;

function fun () {

  console.log (x);
  let x = 20;
  console.log(x);

  if (true) {
    console.log(x);
    let x = 30;
    console.log(x);
  }

  console.log(x);
}

fun();
