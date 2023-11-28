function stilys(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    //month=10;
    if ((month == 10 && day > 20) || (month == 11 && day < 8) ) {
        document.write('<link rel="stylesheet" href="style/styleDM.css" id="inc">');
    }
}
