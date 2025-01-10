import {sleep} from "k6";
import {BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport} from "../support/base/baseTest.js"


export const options = testConfig.options.tudoOkTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

const payload = {
    _id: "rYC0RAs9yIofwdgh"
}

export default function () {
  
  //Listando detalhes de filmes  
  const listaFilmes = baseRest.getId(payload._id,ENDPOINTS.MOVIES_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de listagem de filmes
  const statusCodeListaFilmes = baseChecks.checkStatusCode("Status code correto GET FILMES", listaFilmes, 200);

  addMetrics(statusCodeListaFilmes);

  sleep(1);
  
};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosSmokeMovies.html": htmlReport(data),
  };
}