export const projects = [
  {
    slug: "pizza-nova",
    name: "Pizza Nova",
    type: "Cardápio Digital & Sistema de Pedidos",
    image: "https://i.imgur.com/Ed9Oo8w.png",
    hint: "pizza website",
    link: "https://tangerine-lebkuchen-c4599f.netlify.app/",
    description: "Uma landing page e cardápio digital para uma pizzaria, com foco em um design moderno e apetitoso para atrair clientes e facilitar a visualização dos produtos.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
    details: [
        {
            title: "Fluxo do Cliente",
            points: [
                "O cliente escaneia um QR Code único da mesa.",
                "O site abre com o cardápio digital correspondente àquela mesa.",
                "Ele escolhe os produtos (ex: prato principal, bebida, sobremesa).",
                "Clica em “Finalizar Pedido”.",
                "O pedido vai automaticamente para a cozinha e para o painel dos garçons."
            ]
        },
        {
            title: "Funcionalidades do Cliente",
            points: [
                "Visualização de cardápio com filtros por categoria.",
                "Imagens dos pratos e descrição com preço.",
                "Botão “+” para adicionar ao carrinho.",
                "Tela de resumo do pedido, com valor total e tempo estimado.",
                "Após pedido feito, o cliente vê um status em tempo real: “Em preparo” → “A caminho”."
            ]
        },
        {
            title: "Funcionalidades do Painel do Restaurante",
            points: [
                "Painel do administrador (ex: /admin): Cadastrar, editar e excluir produtos.",
                "Ver todos os pedidos por mesa em tempo real.",
                "Marcar pedidos como “Entregue”."
            ]
        },
        {
            title: "Estrutura e Tecnologia",
            points: [
                "Interface com cores do restaurante e design minimalista.",
                "Responsivo: funciona perfeitamente em celulares.",
                "Firestore: Banco de dados para cardápio e pedidos em tempo real.",
                "Authentication: Login seguro para funcionários com e-mail/senha."
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
    description: "Um site institucional moderno e dinâmico para uma equipe de produção de vídeo especializada em conteúdo gerado por IA.",
    technologies: ["Next.js", "React", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
    details: [
        {
            title: "Objetivo do Projeto",
            points: [
                "Criar uma vitrine digital impactante que refletisse a inovação da empresa.",
                "Destacar o portfólio de vídeos gerados por IA de forma imersiva.",
                "Transmitir uma imagem de vanguarda e alta tecnologia para atrair clientes B2B."
            ]
        },
        {
            title: "Funcionalidades Implementadas",
            points: [
                "Animações fluidas e microinterações com Framer Motion para uma experiência de usuário memorável.",
                "Galeria de vídeos otimizada para carregamento rápido e performance.",
                "Design system coeso utilizando ShadCN UI para consistência visual.",
                "Formulário de contato integrado para captação de leads qualificados."
            ]
        },
        {
            title: "Diferenciais Técnicos",
            points: [
                "Arquitetura Next.js para renderização no servidor (SSR), garantindo SEO e performance.",
                "Estética futurista e paleta de cores alinhada com o tema de inteligência artificial.",
                "Layout totalmente responsivo, adaptado para desktops, tablets e smartphones."
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
    description: "Uma plataforma de e-commerce para uma marca de moda com uma estética dark e conceitual, focada em uma experiência de compra imersiva.",
    technologies: ["Next.js", "Shopify API", "Tailwind CSS", "Stripe"],
    details: [
        {
            title: "Experiência do Usuário (UX)",
            points: [
                "Navegação intuitiva focada na descoberta de produtos e coleções.",
                "Checkout simplificado em poucas etapas para minimizar o abandono de carrinho.",
                "Páginas de produto com galerias de imagens de alta resolução e zoom."
            ]
        },
        {
            title: "Funcionalidades de E-commerce",
            points: [
                "Integração com a API do Shopify para gerenciamento de produtos, estoque e pedidos.",
                "Gateway de pagamento seguro com Stripe para transações com cartão de crédito.",
                "Busca de produtos com filtros por categoria, tamanho e preço.",
                "Área do cliente para acompanhamento de pedidos e histórico de compras."
            ]
        },
        {
            title: "Identidade Visual",
            points: [
                "Design dark e minimalista para alinhar com a estética conceitual da marca.",
                "Uso de tipografia e fotografia para criar uma atmosfera imersiva e exclusiva.",
                "Animações sutis que guiam o usuário sem distrair da experiência de compra."
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
    description: "Um dashboard analítico personalizado para visualização de dados complexos em tempo real, permitindo insights rápidos e eficientes.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL"],
    details: [
        {
            title: "Visualização de Dados",
            points: [
                "Gráficos interativos (barras, linhas, pizza) para análise de métricas de vendas, usuários e engajamento.",
                "Filtros dinâmicos por período, região e outras variáveis de negócio.",
                "Exportação de relatórios em formato CSV e PDF."
            ]
        },
        {
            title: "Funcionalidades do Painel",
            points: [
                "KPIs (Key Performance Indicators) principais destacados em cards para visualização rápida.",
                "Tabelas de dados com paginação, ordenação e busca em tempo real.",
                "Sistema de alertas para métricas que atingem um determinado limiar."
            ]
        },
        {
            title: "Arquitetura e Performance",
            points: [
                "Backend robusto em Node.js para processamento e agregação de grandes volumes de dados.",
                "Banco de dados PostgreSQL otimizado para consultas analíticas complexas.",
                "Frontend reativo em React com D3.js para renderização eficiente de gráficos customizados.",
                "Autenticação segura para garantir que apenas usuários autorizados acessem os dados."
            ]
        }
    ]
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
