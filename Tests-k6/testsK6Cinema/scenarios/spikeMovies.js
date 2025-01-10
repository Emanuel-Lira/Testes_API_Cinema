import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicMovieData} from "../support/base/baseTest.js"

export const options = testConfig.options.tudoOkTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

const payload = {
  title: "A banana 4",
  description: "Uma banana 2 que se formou em artes",
  launchdate: "2023-10-11",
  showtimes: "2023-10-10",
  _id: "rYC0RAs9yIofwdgh"
}


export default function () {

  //Atualizando dados do filmes
  const atualizarFilme = baseRest.put(payload._id, new DynamicMovieData(), ENDPOINTS.MOVIES_ENDPOINT);

  //Cria uma variavel para checar o status code das requisições de atualização de filmes
  const statusCodeAtualizarFilme = baseChecks.checkStatusCode("Status code correto PUT MOVIES", atualizarFilme, 200);

  //Adiciona as metricas ao relatório do teste
  addMetrics(statusCodeAtualizarFilme);

  sleep(1);

};

//Gerando Relatório do Teste

export function handleSummary(data) {
  return {
    "resultadosSpikeMovies.html": htmlReport(data),
  };
}
