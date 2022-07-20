import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';


let tempo = null;
let exibir
let second = 0;
let minute = 0;
let hour = 0;



export default function App() {

  const [timer, setTimer] = useState('00:00:00');
  const [resul, setResul] = useState('00:00:00');
  const [img, setImg] = useState((require('./src/botao-play.png')))

  function iniciar(){
    if(tempo !== null){
      clearInterval(tempo)
      tempo = null
      
      setImg(require('./src/botao-play.png'))
    }
    else{
      setImg((require('./src/botao-de-pausa.png')))
      
      tempo = setInterval(() => {
        second++
        if(second == 60){
          second = 0
          minute++
        }
        if(minute == 60){
          minute = 0
          hour++
        }

        exibir = (hour < 10 ? '0'+ hour : hour) +':'+ (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second)

         setTimer(exibir)

      }, 1000)
     
      
      
    }

  }

  function parar(){
    setResul(exibir)
    if (tempo!== null){
      clearInterval(tempo)
      
      setImg(require('./src/botao-play.png'))
      tempo = null
  }
      setTimer('00:00:00')
      second = 0
      minute = 0
      hour = 0

}
  
  return (
    <View style={styles.container}>
      <Text style={styles.btnTimer}>{timer}</Text>
      <Text style={{fontSize:25, fontStyle:'italic', color:'white', bottom:110}}>Ultimo tempo: {resul}</Text>
      
      
     <View style={styles.btnArea}>

      <TouchableOpacity 
      onPress={iniciar}
      style={styles.btnIniciar}>
      <Image
      source={img}
      />
      </TouchableOpacity>
      

       

        
       <TouchableOpacity 
        onPress={parar}
       style={styles.btnParar}>
       <Image
       source={require('./src/stop.png')}
       />
       </TouchableOpacity>
     
  
      
      
      
      </View>
     
      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292759',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTimer:{
    
    color:'white', 
    fontWeight:'bold', 
    fontSize:80,
    bottom:110
  },
  btnArea:{
    flexDirection:'row',
   
  },
  btnIniciar:{
    top:210,
    right:30
    
  },
  btnParar:{
    top:210,
    left:30
   
  }

 
  
});
