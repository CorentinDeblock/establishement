export default (num) => {
    let str = "";

    for(let i = 0; i < num;i++) {
        if(Math.ceil(Math.random() * 100) > 50) {
            str += String.fromCharCode(Math.random() * (90 - 65) + 65).toUpperCase();
        }else{
            str += String.fromCharCode(Math.random() * (90 - 65) + 65).toLowerCase();
        }
    }
    return str
}
