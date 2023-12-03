function stilys(){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // month=1;
    // day=15;


if ((month == 10 && day > 20) && (month == 11 && day < 8) ) {//muertos
        estilo("styleDM");
    }else if ( (month == 11 && day > 16) && (month == 11 && day < 22) ) {//revolucion
        estilo("styleMEX");
    }else if ( (month == 12 && day > 16) && (month == 1 && day < 12) ){//navidad
        estilo("styleXmas");
    }else if( (month == 2 && day > 3) && (month == 2 && day < 7) ){//constitucion
        estilo("styleMEX");
    }else if( (month == 2 && day > 12) && (month == 2 && day < 16) ){//amor y amistad
        estilo("styleDAA");
    }else if( (month == 2 && day > 22) && (month == 2 && day < 26) ){//bandera
        estilo("styleMEX");
    }else if( (month == 3 && day > 19) && (month == 3 && day < 22) ){//primavera
        estilo("styleEP");
    }else if( (month == 4 && day == 30) ){//niño
        estilo("styleDN");
    }else if( (month == 5 && day == 1) ){//trabajo
        estilo("styleDT");
    }else if( (month == 5 && day == 10) ){//madres
        estilo("styleDMa");
    }else if( (month == 5 && day >3) && (month == 5 && day < 7) ){//5 de Mayo 
        estilo("styleMex");
    }else if( (month == 9 && day >0) && (month == 9 && day < 31) ){//septiembre
        estilo("styleMEX");
    }else{
        estilo("styleGen");
    }
}


function estilo(s){
    document.write('<link rel="stylesheet" href="style/'+s+'.css" id="inc">');
}
