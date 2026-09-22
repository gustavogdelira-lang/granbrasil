const steps = [
    {
      stage: "Etapa 1 · Pré-requisito",
      title: "Habilitação RADAR no Siscomex",
      text: "É o registro que autoriza a empresa a operar no comércio exterior. Sem ele não é possível acessar o Portal Siscomex nem credenciar um despachante aduaneiro — por isso é o primeiro passo de qualquer exportação. A habilitação pode ser Expressa (até US$ 50 mil por semestre), Limitada (até US$ 150 mil) ou Ilimitada, e depende de documentos como contrato social, certidão da junta comercial e domicílio tributário eletrônico ativo.",
      src: "Fonte: Siscomex / Receita Federal — habilitação de intervenientes aduaneiros."
    },
    {
      stage: "Etapa 2 · Documentação",
      title: "Documentação comercial e do produto",
      text: "Reúne os documentos que descrevem a mercadoria e a venda: nota fiscal eletrônica, invoice comercial e packing list, além da classificação fiscal correta do produto (NCM). Para soja em grão destinada a consumo ou processamento, o código é 1201.90.00; para milho em grão, 1005.90.10.",
      src: "Fonte: Tabela NCM — Nomenclatura Comum do Mercosul."
    },
    {
      stage: "Etapa 3 · Controle administrativo",
      title: "LPCO — Licenças, Permissões, Certificados e Outros documentos",
      text: "Módulo do Portal Único que reúne as exigências de órgãos anuentes — MAPA, ANVISA, IBAMA, entre outros — conforme o NCM e o destino do produto. Para a soja, o LPCO relevante é o próprio Certificado Fitossanitário, obtido na etapa seguinte: aqui se confirma que o pedido foi aberto e aprovado antes do registro da DU-E.",
      src: "Fonte: Portal Único de Comércio Exterior (Siscomex) — módulo LPCO."
    },
    {
      stage: "Etapa 4 · Certificação sanitária",
      title: "Certificado Fitossanitário Internacional (e-Phyto)",
      text: "Emitido pelo MAPA, atesta que a carga está livre de pragas e doenças e apta a entrar no país de destino. O exportador solicita pelo sistema SHIVA, que emite o certificado eletrônico pela rede internacional ePhyto — ou pelo SIGVIG3, quando o destino ainda não está habilitado eletronicamente.",
      src: "Fonte: Ministério da Agricultura e Pecuária (MAPA) — Certificado Fitossanitário Eletrônico."
    },
    {
      stage: "Etapa 5 · Registro aduaneiro",
      title: "Registro da DU-E",
      text: "A Declaração Única de Exportação reúne, num único documento eletrônico, os dados aduaneiros, comerciais, fiscais e logísticos da operação. Ao ser registrada no Siscomex, gera uma Referência Única de Carga (RUC), que identifica a operação até o fim do processo — e só pode ser feita depois que as quatro etapas anteriores estão regulares.",
      src: "Fonte: Receita Federal — Exportação Portal Único."
    },
    {
      stage: "Etapa 6 · Análise de risco",
      title: "Canal de parametrização",
      text: "Após o registro, a DU-E é submetida a uma análise de risco que a direciona a um canal: Verde (desembaraço automático — a grande maioria dos casos), Laranja (conferência apenas dos documentos) ou Vermelho (conferência documental e física da carga). Diferente da importação, na exportação não existe canal Cinza.",
      src: "Fonte: Receita Federal — canais de conferência aduaneira na exportação."
    },
    {
      stage: "Etapa 7 · Liberação final",
      title: "Desembaraço e averbação do embarque",
      text: "Cumpridas as exigências do canal sorteado, a carga é desembaraçada e, após o embarque físico no navio, a operação é averbada no sistema — encerrando formalmente o processo de exportação.",
      src: "Fonte: Receita Federal — Exportação Portal Único."
    }
  ];

  const list = document.getElementById('stepsList');
  steps.forEach((s, i) => {
    const el = document.createElement('div');
    el.className = 'step';
    el.innerHTML = `
      <button class="step-head" aria-expanded="false">
        <span class="idx mono">${String(i+1).padStart(2,'0')}</span>
        <span class="ttl"><span class="stg mono">${s.stage}</span><h4>${s.title}</h4></span>
        <span class="chev mono">+</span>
      </button>
      <div class="step-body"><div class="step-body-inner"><p style="margin:0;">${s.text}</p><div class="src">${s.src}</div></div></div>
    `;
    list.appendChild(el);
    const head = el.querySelector('.step-head');
    const body = el.querySelector('.step-body');
    head.addEventListener('click', () => {
      const isOpen = el.classList.contains('open');
      list.querySelectorAll('.step.open').forEach(o => {
        o.classList.remove('open');
        o.querySelector('.step-body').style.maxHeight = null;
        o.querySelector('.step-head').setAttribute('aria-expanded','false');
      });
      if(!isOpen){
        el.classList.add('open');
        body.style.maxHeight = body.scrollHeight + 'px';
        head.setAttribute('aria-expanded','true');
      }
    });
    if(i === 0){ head.click(); }
  });