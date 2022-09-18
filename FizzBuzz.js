for (i=1; i<=100; i++) {

    var remain_3 = (i % 3);
    var remain_5 = (i % 5);

    if (remain_3!=0 && remain_5==0) {
        console.log("Buzz");
    }

    else if (remain_3==0 && remain_5!=0) {
        console.log("Fizz");
    }

    else if (remain_3==0 && remain_5==0) {
        console.log("FizzBuzz");
    }

    else if (remain_3!=0 && remain_5!=0){
        console.log(i);
    }
}