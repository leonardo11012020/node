var fs=require('fs')

var archivo='./sople/solo_millos.txt'
var carpeta='./sople'
var texto='peguelo xd, la buena oswaldo'
var marcador='./sople/marcador.txt'

if(fs.existsSync(carpeta)){
    console.log('Cargando...')
    if(fs.existsSync(archivo)){
        console.log('Se agrego texto en el archivo solo_millos')
        fs.writeFileSync(archivo,texto)
        fs.createWriteStream('./sople/marcador.txt')    
    }
    else{
        console.log('Se creo el archivo: solo_millos en la carpeta sople')
        fs.createWriteStream('./sople/solo_millos.txt')
    }    
}
else{
    console.log('La carpeta: sople se creo')
    fs.mkdirSync('./sople')
}

if(fs.existsSync(marcador)){
    fs.unlinkSync(archivo)
    console.log('Se elimino el archivo')
    fs.unlinkSync(marcador)
    fs.rmdirSync('./sople');
    console.log('Carpeta eliminada');
}