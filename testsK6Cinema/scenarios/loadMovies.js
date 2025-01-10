import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../support/base/baseTest.js"

export const options = testConfig.options.tudoOkTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export default function () {
  const listaFilmes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT).json();

  //Deletando Filmes
  const deletaFilme = baseRest.delete(listaFilmes[2]._id, ENDPOINTS.MOVIES_ENDPOINT);
  
  //Cria uma variavel para checar o status code das requisições de REMOÇÃO de Filmes por ID
  let statusCodeDeletaFilme = baseChecks.checkStatusCode("Status code correto DELETE FILMES", deletaFilme, 200); 
  
  addMetrics(statusCodeDeletaFilme);
  
  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
    return {
      "resultadosLoadFilmes.html": htmlReport(data),
    };
  }
  
