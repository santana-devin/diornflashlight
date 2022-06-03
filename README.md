# Construindo um App usando Sensor de Movimento com React Native
Ismael Moreira  
Mobile specialist  

#### Mais sobre mim
 - Formado em Engenharia de Software
 - Fundador e Prof. do Catapulta
 - Mobile specialist na Fleye
 - Como me encontrar:
  - linkedin: Ismael Moreiraa🧩
  - GitHub: ismaelsousa
  - Insta: ismael.catapult

#### Desafio
Neste desafio vamos construir um app de lanterna  
que além de ligar a lanterna do celular ao apertar  
no botão, também usaremos o acelerômetro para  
verificar quando celular chacoalhar  

#### Percurso
Aula 1 Instalando libs shake e torch  
Aula 2 Baixando os icones  
Aula 3 Estilizando o app  
Aula 4 Ouvindo evento nativo de shake  
Aula 5 Criar APK para compartilhar o app  

#### Pré-requisitos
Lógica de programação  
Javascript  
Vs Code  
Git  
Setup react native  



# Entendendo o Desafio
Vamos construir um App de lanterna que, além de ligar a lanterna do celular ao tocar na tela, também acenderá quando for verificado o movimento de chacoalhar o celular. Venha com a gente e embarque nesse incrível projeto utilizando React Native.

Neste desafio, você deverá replicar (e porque não, melhorar) este projeto prático, criando um repositório próprio e, com isso, aumentando ainda mais seu portfólio de projetos no GitHub 😉

Dica: você pode dar um "fork" no Repositório do GitHub (App) para organizar suas alterações e evoluções, mantendo uma referência direta ao código original. Caso não se sinta confiante pata o "fork", clone o projeto de referência e/ou faça o download do mesmo pelo próprio GitHub.

Ícones
Faça download das imagens necessárias para o projeto, clicando aqui.  
https://drive.google.com/drive/folders/1Kuh5tysH7-UFuSLHX0IQIIh2xcghHUIX?usp=sharing  

GitHub
Todo o conteúdo foi desenvolvido com base no repositório abaixo:  
https://github.com/ismaelsousa/dio-flashlight

Slides
Acesse os slides clicando aqui.  
https://docs.google.com/presentation/d/1zSHZ8xBvWNUv6ZY21fXr7UseLm5BVeSc/edit?usp=sharing&ouid=105300330738120646134&rtpof=true&sd=true



# Iniciando

```
//Criar projeto
#npx react-native init diornflashlight
// Entrar na pasta do projeto
# cd diornflashlight

// Instalar bibioteca React **Native Shake Event Detector**

#npm install react-native-shake  
or  
#yarn add react-native-shake  

// Instalr a biblioteca **React Native Torch**

#npm install --save react-native-torch
#react-native link react-native-torch


npm install --save react-native-torch react-native link react-native-torch

```

#### Baixar icones
https://drive.google.com/drive/folders/1aDTyA09EFjFvqmXqkDKLoMhFx65QQExQ

Criar APK
```
#sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

##Configurando as 

1. Coloque o my-upload-key.keystorearquivo sob o android/appdiretório na pasta do seu projeto.  
2.Edite o arquivo ~/.gradle/gradle.propertiesou android/gradle.properties, e adicione o seguinte (substitua *****pela senha correta do keystore, alias e senha da chave),


MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore  
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias  
MYAPP_UPLOAD_STORE_PASSWORD=*****  
MYAPP_UPLOAD_KEY_PASSWORD=*****  

Essas serão variáveis ​​globais do Gradle, que podemos usar posteriormente em nossa configuração do Gradle para assinar nosso aplicativo.

#cd android

#./gradlew assembleRelease

#cd app/build/outputs/apk/release/

#ls 

app-release.apk  
output-metadata.json  



```






![Overview]().














