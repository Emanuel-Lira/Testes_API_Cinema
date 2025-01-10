import {sleep, BaseChecks, BaseRest, ENDPOINTS, testConfig, addMetrics, htmlReport, DynamicMovieData} from "../support/base/baseTest.js"

export const options = testConfig.options.stressTest;

const baseURI = testConfig.environment.hml.url;
const baseRest = new BaseRest(baseURI);
const baseChecks = new BaseChecks();

export default function () {
  //Criar filmes
  const criaFilme = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, new DynamicMovieData());

  //Cria uma variavel para checar o status code das requisições de criação de filmes
  const statusCodeCriarFilme = baseChecks.checkStatusCode("Status code correto POST FILMES", criaFilme, 201);

  addMetrics(statusCodeCriarFilme);

  sleep(1);

};

//Função para gerar o relatório
export function handleSummary(data) {
  return {
    "resultadosStressMovies.html": htmlReport(data),
  };
}
