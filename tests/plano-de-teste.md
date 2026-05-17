## Plano de teste de performance

## Criação do report e monitoria

$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="html-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\test-report.js

## Executar Smoke Tests

- Validar se a aplicação (api, site, banco, etc. ) Está no ar

## Configuração do teste
-VUs: 2
-Tempo de 10 segundos

## Executar Load Test ( Teste de performance )
- Validar se um fluxo aguenta com um certo número de usuários
-Validar fluxo de login 

### Configuração do teste
-VUs: 50
-Tempo de 2 minutos

## Execução via terminal

$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="load-test-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\load/test.js



## Executar Stress Test ( Teste de Estresse )
- Validar o limite do sistema, para descobrir até onde aguanta antes de falhar.
-Validar fluxo de login 

### Configuração do teste
-VUs: aumento gradativo
-Estágios, 
    - rump-up de 1 até 200 virtual users em 1 minuto
    - mantém as 200 VUs durante 5 minutos
    - ramp-down de 200 VUs até 0 em 1 minuto.

## Execução via terminal

$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="stress-test-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\stress-test.js


## Executar Spike Test ( Teste de Pico )
- Validar a reação da aplicação e da infraestrutura com picos de requisições.
-Validar fluxo de login 

### Configuração do teste
-VUs: aumento gradativo
-Estágios, 
    - rump-up de 1 até 400 virtual users em 30 segundos
    - ramp-down de 400 VUs até 0 em 40 segundos.

## Execução via terminal

$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="spike-test-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\spike-test.js



## Executar Soak Test ( Teste de Imersão )
- Validar a estabilidade do sistema e da infraestrutura por um longo periodo de teste.
-Validar fluxo de login 

### Configuração do teste
-VUs: aumento gradativo
-Estágios, 
   - rump-up de 1 até 200 virtual users em 1 minuto
   -  mantém as 200 VUs durante 1 hora.
   - ramp-down de 200 VUs até 0 em 1 minuto.

## Execução via terminal
$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="soak-test-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\soak-test.js



## Executar Breakpoint test ( Teste de Interrupção )

- Validar o quanto sua aplicação ou infraestrutura aguenta.
-Validar fluxo de login 

### Configuração do teste

-VUs: aumento gradativo
-Estágios, 
   - rump-up de 1 até 50000 virtual users em 1 hora
   

## Execução via terminal

$env:K6_WEB_DASHBOARD="true";
$env:K6_WEB_DASHBOARD_EXPORT="breakpoint-test-report.html";
$env:K6_WEB_DASHBOARD_PERIOD="5s";
k6 run .\breakpoint-test.js
