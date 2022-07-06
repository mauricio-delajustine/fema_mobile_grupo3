import React from 'react';
import { Text, View } from 'react-native';
import style from './style';

export const Regulamento = ({ navigation }) => (
  
<View>
 
<Text style={style.info1}>Geral:</Text>

<Text style={style.info2}>Cada cartela será composta pelos 10 jogos de cada rodada.
Jogos adiados ou com datas definidas além da próxima rodada terão pontuações zeradas.</Text>

<Text style={style.info1}>Da inscrição:</Text>

<Text style={style.info2}>Após baixar o app, o usuário será redirecionado para a tela de inscrição, 
onde deverá preencher todos os campos solicitados de maneira correta. Após será exibido uma tela de login, 
onde o usuário deverá preencher com o seu nome e senha.</Text>

<Text style={style.info1}>Da pontuação:</Text>

<Text style={style.info2}>Acertando o placar exato do jogo = 25 pontos.
Acertando o ganhador e um score do placar = 15 pontos.
Acertando o ganhador e não o placar = 10 pontos.
Acertando o empate e não o placar = 10 pontos.
Errando = 0 pontos.
Máximo de pontos em uma cartela = 250 pontos.</Text>

<Text style={style.info1}>Da premiação:</Text>

<Text style={style.info2}>60% de todo o valor arrecadado por rodada vai para o app e os outros 40% ao ganhador.
Em caso de empate na pontuação final, ganhará o prêmio o usuário que tiver mais placares exatos na sua aposta. 
Persistindo o empate, haverá a repartição do prêmio entre os ganhadores. O prêmio não acumula.</Text>
      
<Text style={style.info1}>Do valor da aposta:</Text>

<Text style={style.info2}>Cada cartela terá o valor de R$ 20,00.</Text>

<Text style={style.info1}>Do pagamento e apostas:</Text>

<Text style={style.info2}>O pagamento e os palpites das apostas serão aceitos até 1 hora antes do início de cada rodada.
O pagamento das apostas será feito via PIX, assim como o pagamento da premiação.</Text>

</View>

);

export default Regulamento;