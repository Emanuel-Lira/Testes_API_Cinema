import {sleep} from "k6";
import {BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../support/base/baseTest.js"

export const options = testConfig.options.tudoOkTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export default function () {
  //Listando usuarios  
  const listaFilmes = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de listagem de filmes
  const statusCodelistaFilmes = baseChecks.checkStatusCode("Status code correto GET USUARIOS", listaFilmes, 200);

  addMetrics(statusCodelistaFilmes);

  sleep(1);
};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosSoakMovies.html": htmlReport(data),
  };
}