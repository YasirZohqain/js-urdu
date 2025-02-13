//+++++++++++++++++++++++++++++++++++++++++++++++++ IIFE +++++++++++++++++++++++++++++++++++++++++++++++++++++


////////////// Immediately Invoked Function Expression //////////////////////////////////


(function connectDB () {
    console.log(`DB is Connected`)
})();


((arrow) => {
    console.log(`Arrow DB is Connected ${arrow}`)
})('Arrow Func');
