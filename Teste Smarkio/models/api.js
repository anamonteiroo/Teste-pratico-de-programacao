const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: 'ApMwI054is5AFWHUTon6woPIf0y2_x3T_4rjMd8dVLBR',
    }),
    serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/d7ea786c-c20a-4ee7-9d93-88e362aef8bd',
});

const synthesizeParams = {
    text: 'Olá, mundo!',
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
};

textToSpeech.synthesize(synthesizeParams).then((response) => {
    return textToSpeech.repairWavHeaderStream(response.result);
}).

then(buffer => {
    let date = Date.now();
    let path = `audios/${date}.wav`;

    fs.writeFileSync(path, buffer)
})