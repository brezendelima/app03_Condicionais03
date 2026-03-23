import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

function App() {

  let OPCAO = "1";

  let imgCamaro = require('./assets/camaro.png');
  let imgCivic = require('./assets/civic.png');
  let imagemPlaceholder = require('./assets/carro.png');

  let iconEdu = require('./assets/chapeu.png');
  let iconAdd = require('./assets/construcao.png');
  let iconHealth = require('./assets/farmacia.png');
  let iconPet = require('./assets/pata.png');

  let imgMenino = require('./assets/carro.png');

  let carros = [
    { id: 1, nome: "Agora eu fiquei doce de Camaro Amarelo.", progresso: 60, img: imgCamaro },
    { id: 2, nome: "É um Civic, só isso mesmo\nNão tem mais nada a dizer.", progresso: 80, img: imgCivic }
  ];

  if (OPCAO == "1") {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 15 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#90a4ae', borderRadius: 25, paddingHorizontal: 15, paddingVertical: 10, marginBottom: 15 }}>
          <Text style={{ color: '#fff' }}>🔍 Pesquisar</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>

          <View style={{ flexDirection: 'row', backgroundColor: '#26c6da', padding: 8, borderRadius: 20, alignItems: 'center' }}>
            <Image source={iconEdu} style={{ width: 20, height: 20 }} />
            <Text style={{ marginLeft: 5, color: '#fff' }}>Educação</Text>
          </View>

          <Image source={iconAdd} style={{ width: 35, height: 35 }} />
          <Image source={iconHealth} style={{ width: 35, height: 35 }} />
          <Image source={iconPet} style={{ width: 35, height: 35 }} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ color: '#78909c' }}>420 Resultados</Text>
          <Text style={{ color: '#78909c' }}>Notificações ▼</Text>
        </View>

        {carros.map((item) => {
          return (
            <View key={item.id} style={{ flexDirection: 'row', marginBottom: 15 }}>

              <View style={{ width: 90, height: 90, backgroundColor: '#4dd0e1', borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.img} style={{ width: 60, height: 60 }} />
              </View>

              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 14, color: '#607d8b' }}>{item.nome}</Text>

                <View style={{ height: 8, backgroundColor: '#cfd8dc', borderRadius: 10, marginTop: 10 }}>
                  <View style={{ width: item.progresso + "%", height: 8, backgroundColor: '#4caf50', borderRadius: 10 }} />
                </View>
              </View>

            </View>
          );
        })}

        <View style={{ height: 160, backgroundColor: '#64b5f6', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10, overflow: 'hidden' }}>
          <Image source={imagemPlaceholder} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <Text style={{ width: '48%', color: '#607d8b' }}>
            Bruno Rezende de Lima, Tecnologia em Análise e Desenvolvimento de Sistemas 5º Período.
          </Text>
          <Text style={{ width: '48%', color: '#607d8b' }}>
            22/03/2026 Unicesumar. Analista de Redes e NOC.
          </Text>
        </View>

      </ScrollView>
    );
  }


  if (OPCAO == "2") {
    return (
      <View style={{ flex: 1, backgroundColor: '#f2d27a', justifyContent: 'center', alignItems: 'center' }}>

        <View style={{ width: '90%', height: '90%', backgroundColor: '#1fb6c9', borderRadius: 30, overflow: 'hidden' }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={imgMenino} style={{ width: 240, height: 120 }} />
          </View>

          <View style={{ flex: 1.3, backgroundColor: '#eee', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 20 }}>

            <Text style={{ textAlign: 'center', fontSize: 18, color: '#607d8b', marginBottom: 10 }}>
              Um carro vermelho bem genérico
            </Text>

            <Text style={{ textAlign: 'center', fontSize: 12, color: '#90a4ae', marginBottom: 20 }}>
              Peguei a imagem desse carro na internet, mas não sei que carro é esse. Ele é vermelho, tem quatro rodas e um volante. Ele é bem genérico, não tem nada de especial.
            </Text>

            <View style={{ backgroundColor: '#ddd', borderRadius: 20, padding: 15, alignItems: 'center', marginBottom: 20 }}>
              <Text style={{ fontSize: 28, color: '#2ecc71' }}>R$600.000,00</Text>
              <View style={{ height: 2, width: '80%', backgroundColor: '#90a4ae', marginTop: 5 }} />
            </View>

            <View style={{ height: 80, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', paddingLeft: 10, marginBottom: 20 }}>
              <Text style={{ color: '#90a4ae' }}>Quero mais informações!</Text>
            </View>

            <View style={{ backgroundColor: '#2ecc71', borderRadius: 30, padding: 15, alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>COMPRAR</Text>
            </View>

          </View>

        </View>

      </View>
    );
  }

  return null;
}

export default App;