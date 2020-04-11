(function(){
    
    var actualizarHora = function(){
        var fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();            

        var pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

//  NOW YOU ARE GOING TO BE WORKING WITH THE DATES

        var semana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
       
        pDiaSemana.textContent = semana[diaSemana]; //IT SHOWS THE CURRENT DAY
        pDia.textContent = dia; //IT SHOWS THE CURRENT DATE (number of day in the month)

        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        
        pMes.textContent = meses[mes];
        pYear.textContent = year;

// NOW YOU ARE GONNA BE WORKING WITH THE CLOCK

        if (horas >= 12) {
            horas = horas - 12;
            ampm = 'PM';
        } else {
            ampm = 'AM';
        }

        if (horas == 0) {
            horas = 12;
        }

        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if (minutos < 10) { minutos = "0" + minutos }
        if (horas < 10) { horas = "0" + horas }
        if (segundos < 10) { segundos = "0" + segundos }


        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;        
    }
    
    var cambiarImagen = function(){
        var imagenes = ['a.JPG','b.JPG','c.JPG','d.JPG','e.JPG'],
            indexImg = Math.floor(Math.random()*imagenes.length),
            imagenActual = document.getElementById("bg"),
            bg = document.getElementById("bg").setAttribute("background", imagenes[indexImg]);

            imagenActual.addEventListener("onload", bg);

    }
    cambiarImagen();
    actualizarHora();
    
    var cambiar =setInterval(cambiarImagen, 10000);
    var intervalo = setInterval(actualizarHora, 1000);
    
}())  