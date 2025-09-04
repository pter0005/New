export const projects = [
  {
    slug: "pizza-nova",
    name: "Pizza Nova",
    type: "Cardápio Digital & Sistema de Pedidos",
    image: "https://i.imgur.com/Ed9Oo8w.png",
    hint: "pizza website",
    link: "https://tangerine-lebkuchen-c4599f.netlify.app/",
    description: "Uma solução digital completa para pizzarias que agiliza o atendimento. Clientes pedem diretamente da mesa via QR Code, enviando os pedidos para a cozinha em tempo real, o que diminui a espera e otimiza o trabalho dos garçons.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    details: [
        {
            title: "Como funciona para o cliente?",
            points: [
                "O cliente escaneia um QR Code na mesa e acessa o cardápio instantaneamente.",
                "Navega pelas pizzas e bebidas, adicionando itens ao seu pedido com um clique.",
                "Ao finalizar, o pedido é enviado diretamente para a cozinha, sem precisar chamar o garçom.",
                "Pode acompanhar o status do pedido (ex: 'Em preparo', 'Pronto') pelo celular."
            ]
        },
        {
            title: "O que o restaurante controla?",
            points: [
                "Um painel de controle simples permite cadastrar, editar e remover produtos do cardápio a qualquer momento.",
                "A cozinha recebe os pedidos em uma tela organizada, mostrando exatamente o que preparar e para qual mesa.",
                "Os garçons e o caixa têm uma visão geral de todos os pedidos, facilitando o fechamento da conta e o atendimento."
            ]
        },
        {
            title: "Tecnologia por trás da agilidade",
            points: [
                "O sistema foi construído para ser extremamente rápido e responsivo, funcionando perfeitamente em qualquer celular.",
                "Utiliza o Firebase para garantir que os pedidos e atualizações do cardápio aconteçam em tempo real, sem atrasos.",
                "Acesso seguro para funcionários, garantindo que apenas pessoas autorizadas gerenciem o painel."
            ]
        }
    ]
  },
  {
    slug: "team-veo3",
    name: "Team VEO3",
    type: "Site Institucional com IA",
    image: "https://i.imgur.com/Tu4WgVV.png",
    hint: "ia videos",
    link: "https://www.teamveo3.com/",
    description: "Um site institucional de vanguarda para uma produtora de vídeos com Inteligência Artificial. O design futurista e as animações fluidas criam uma vitrine digital que reflete a inovação da marca e cativa clientes de alto nível.",
    technologies: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
    details: [
        {
            title: "Impacto Visual e Navegação",
            points: [
                "O site causa uma primeira impressão memorável com animações que guiam o usuário pela página de forma suave e intuitiva.",
                "O portfólio de vídeos é o centro das atenções, com uma galeria imersiva que carrega rapidamente e funciona bem em todos os dispositivos.",
                "Cada elemento, dos botões aos menus, foi desenhado para reforçar a identidade de uma marca que está à frente do seu tempo."
            ]
        },
        {
            title: "Foco em Resultados",
            points: [
                "O site não é apenas bonito, ele foi projetado para converter visitantes em clientes.",
                "Um formulário de contato direto e de fácil acesso permite que potenciais clientes solicitem orçamentos rapidamente.",
                "A estrutura foi otimizada para os mecanismos de busca (SEO), ajudando a Team VEO3 a ser encontrada no Google por seus serviços."
            ]
        }
    ]
  },
  {
    slug: "sufgang",
    name: "Sufgang",
    type: "E-commerce de Moda Conceitual",
    image: "https://i.imgur.com/78iIp9n.png",
    hint: "fashion store",
    link: "https://www.sufgang.com.br/",
    description: "Uma loja virtual para uma marca de moda com identidade forte e conceitual. A plataforma oferece uma experiência de compra imersiva, onde o design sombrio e minimalista destaca os produtos e reflete a exclusividade da marca.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe"],
    details: [
        {
            title: "Experiência de Compra Única",
            points: [
                "O cliente navega por coleções e produtos de forma fluida, com fotos de alta qualidade que valorizam cada detalhe das peças.",
                "O processo de checkout é rápido e seguro, com poucas etapas para evitar que o cliente desista da compra.",
                "Os clientes podem criar uma conta para salvar seus dados e acompanhar o status de entrega dos seus pedidos."
            ]
        },
        {
            title: "Gestão Simplificada para a Marca",
            points: [
                "A loja é integrada com o sistema da Shopify, permitindo que a Sufgang gerencie produtos, estoque e pedidos de forma centralizada.",
                "Os pagamentos são processados com segurança pela Stripe, uma das maiores e mais confiáveis plataformas do mundo.",
                "Um sistema de busca inteligente ajuda os clientes a encontrarem exatamente o que procuram, seja por nome, categoria ou tamanho."
            ]
        }
    ]
  },
  {
    slug: "personal-trainer-dashboard",
    name: "Personal Trainer",
    type: "Dashboard Analítico de Performance",
    image: "https://i.imgur.com/eiVreq3.png",
    hint: "data dashboard",
    link: "https://personal-example.netlify.app/",
    description: "Um painel de controle personalizado que transforma dados de alunos em insights visuais. Personal trainers podem acompanhar o progresso, ajustar treinos e visualizar o desempenho de seus clientes de forma clara e organizada.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    details: [
        {
            title: "Acompanhamento de Alunos",
            points: [
                "Visualize a evolução de cada aluno através de gráficos interativos de peso, medidas e performance nos treinos.",
                "Filtre os dados por período para analisar o progresso semanal, mensal ou trimestral.",
                "Receba alertas automáticos quando um aluno atinge uma meta importante ou fica um período sem treinar."
            ]
        },
        {
            title: "Gestão de Treinos e Finanças",
            points: [
                "Acesse rapidamente a ficha de treino de cada aluno, facilitando o planejamento e ajustes.",
                "Controle pagamentos e mensalidades em um só lugar, com indicadores visuais de quem está em dia ou com pendências.",
                "Exporte relatórios de progresso em PDF para compartilhar com os alunos, agregando valor ao seu serviço."
            ]
        },
        {
            title: "Plataforma Centralizada",
            points: [
                "O sistema é seguro e apenas o personal trainer tem acesso aos dados de seus alunos.",
                "A interface é limpa e intuitiva, projetada para ser usada tanto no computador quanto no tablet durante os treinos.",
                "O painel foi construído para lidar com um grande número de alunos e dados sem perder a performance."
            ]
        }
    ]
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
