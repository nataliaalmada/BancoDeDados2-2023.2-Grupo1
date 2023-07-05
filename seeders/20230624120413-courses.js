'use strict';
const fs = require('fs');
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Caminho da imagem para o curso de Design Gráfico
    const designImagePath = path.join(__dirname, '..', 'public', 'images', 'design_grafico.jpg');
    const designImageBuffer = await fs.promises.readFile(designImagePath);

    // Caminho da imagem para o curso de Git e GitHub
    const gitImagePath = path.join(__dirname, '..', 'public', 'images', 'git_github.jpg');
    const gitImageBuffer = await fs.promises.readFile(gitImagePath);

    // Caminho da imagem para o curso de Inteligência Artificial
    const iaImagePath = path.join(__dirname, '..', 'public', 'images', 'inteligencia_artificial.jpg');
    const iaImageBuffer = await fs.promises.readFile(iaImagePath);

    // Caminho da imagem para o curso de Desenvolvimento Mobile
    const mobileImagePath = path.join(__dirname, '..', 'public', 'images', 'desenvolvimento_mobile.jpg');
    const mobileImageBuffer = await fs.promises.readFile(mobileImagePath);
    await queryInterface.bulkInsert('Courses', [
      {
        image: designImageBuffer,
        imageMimeType: "image/jpg",
        name: 'Design Gráfico',
        description: 'O curso de design gráfico é um programa educacional abrangente que ensina os princípios fundamentais do design visual e as habilidades técnicas necessárias para criar projetos gráficos eficazes. Os alunos aprendem a usar ferramentas e softwares especializados, como Adobe Photoshop, Illustrator e InDesign, para manipular imagens, criar ilustrações vetoriais, diagramas, layouts de página e muito mais. Além disso, o curso explora conceitos de composição, cor, tipografia e branding para desenvolver a capacidade dos alunos de transmitir mensagens visualmente atraentes e coerentes. Ao longo do curso, os alunos também participam de projetos práticos, trabalhando em briefings reais para criar materiais de marketing, identidades visuais e peças promocionais. No final, os alunos terão adquirido um conjunto de habilidades sólidas e estarão prontos para iniciar uma carreira emocionante no campo do design gráfico.Learn the basics of business management and gain insights into various aspects of the business world.',
        status: 'open',
        workload: 40,
        CategoryId: 1,
        start_date: '2023-08-31',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: gitImageBuffer,
        imageMimeType: "image/jpg",
        name: 'Git e GitHub',
        description: 'O curso de Git e GitHub é um programa educacional que fornece uma compreensão abrangente do controle de versão e colaboração em projetos de desenvolvimento de software. Os alunos aprendem a usar o Git, um sistema de controle de versão distribuído, para gerenciar e rastrear alterações em arquivos de código-fonte. Eles também exploram os recursos e funcionalidades avançadas do GitHub, uma plataforma baseada em nuvem para hospedar repositórios Git e facilitar a colaboração entre desenvolvedores. O curso abrange conceitos como clonagem, criação de branches, mesclagem de código e resolução de conflitos. Além disso, os alunos aprendem a trabalhar em equipe, utilizando recursos como pull requests e revisões de código. Ao concluir o curso, os alunos estarão aptos a usar o Git e o GitHub de maneira eficaz, facilitando a colaboração e o controle de versão em projetos de desenvolvimento de software.',
        status: 'open',
        workload: 60,
        CategoryId: 4,
        start_date: '2023-07-12',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: iaImageBuffer,
        imageMimeType: "image/jpg",
        name: 'Inteligência Artificial',
        description: 'O curso de inteligência artificial é um programa educacional que explora os fundamentos e aplicações dessa área da ciência da computação. Os alunos aprendem conceitos como aprendizado de máquina, redes neurais, processamento de linguagem natural e visão computacional. O curso abrange algoritmos e técnicas de IA, bem como o uso de bibliotecas e frameworks populares, como TensorFlow e PyTorch. Os alunos também trabalham em projetos práticos, desenvolvendo modelos de IA para resolver problemas do mundo real. Ao concluir o curso, os alunos terão adquirido as habilidades necessárias para projetar, implementar e otimizar sistemas de inteligência artificial, e estarão preparados para explorar oportunidades em áreas como análise de dados, automação, reconhecimento de padrões e muito mais.',
        status: 'open',
        workload: 30,
        CategoryId: 2,
        start_date: '2023-08-21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        mobileImageBuffer,
        imageMimeType: "image/jpg",
        name: 'Desenvolvimento Mobile',
        description: 'O curso de desenvolvimento mobile é um programa educacional que oferece uma introdução abrangente às técnicas e ferramentas necessárias para criar aplicativos móveis. Os alunos aprendem a projetar, desenvolver e implantar aplicativos para dispositivos iOS e Android usando linguagens de programação como Swift, Kotlin e React Native. O curso abrange conceitos fundamentais de desenvolvimento de software, interface do usuário, arquitetura de aplicativos móveis e integração de recursos nativos, como câmera e GPS. Os alunos também têm a oportunidade de trabalhar em projetos práticos, onde aplicam seus conhecimentos para criar aplicativos funcionais e interativos. Ao concluir o curso, os alunos terão adquirido as habilidades necessárias para ingressar no mercado de trabalho como desenvolvedores mobile e contribuir para a criação de aplicativos inovadores e de alto desempenho.',
        status: 'open',
        workload: 45,
        CategoryId: 3,
        start_date: '2023-08-21',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
