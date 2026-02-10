
import React from 'react';
import { 
  Droplets, 
  ShieldCheck, 
  Zap, 
  Waves, 
  Sparkles, 
  Wind,
  Shield,
  Award,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { Service, Testimonial, Comparison } from './types';

export const SERVICES: Service[] = [
  {
    id: 'lavagem',
    title: 'Lavagem Detalhada',
    description: 'Limpeza profunda com técnica de dois baldes e pincéis de detalhamento para remover toda impureza sem riscar.',
    icon: <Waves className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'polimento',
    title: 'Polimento Técnico',
    description: 'Correção de verniz para remoção de micro-riscos, swirls e oxidação, devolvendo o brilho máximo.',
    icon: <Zap className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'vitrificacao',
    title: 'Vitrificação 9H',
    description: 'Camada de proteção nano-cerâmica que protege contra raios UV, fezes de pássaros e agentes químicos.',
    icon: <ShieldCheck className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'higienizacao',
    title: 'Higienização Interna',
    description: 'Limpeza completa do cockpit, teto, painéis e carpetes com extração de sujeiras profundas.',
    icon: <Wind className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'estofados',
    title: 'Tratamento de Couro',
    description: 'Limpeza e hidratação de bancos de couro para prevenir rachaduras e manter a maciez original.',
    icon: <Droplets className="w-8 h-8 text-blue-500" />
  },
  {
    id: 'protecao',
    title: 'Proteção de Pintura (PPF)',
    description: 'Película invisível de alta resistência contra impactos de pedras, arranhões e desgaste diário.',
    icon: <Sparkles className="w-8 h-8 text-blue-500" />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Roberto Silva',
    car: 'Porsche 911 Carrera',
    text: 'O serviço de vitrificação superou minhas expectativas. O carro parece ter saído da fábrica hoje, mesmo após 3 anos de uso.',
    rating: 5
  },
  {
    id: '2',
    name: 'Ana Carolina',
    car: 'BMW X5',
    text: 'Fiz a higienização interna completa e a hidratação do couro. O cuidado com os detalhes é impressionante. Atendimento nota 10!',
    rating: 5
  },
  {
    id: '3',
    name: 'Marcos Oliveira',
    car: 'Audi RS6',
    text: 'Polimento técnico de mestre. Tiraram todos os riscos que me incomodavam. Vale cada centavo pela valorização do veículo.',
    rating: 5
  }
];

export const COMPARISONS: Comparison[] = [
  {
    id: 'comp1',
    label: 'Polimento Técnico',
    beforeImg: 'https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'comp2',
    label: 'Limpeza de Motor',
    beforeImg: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1493238507154-20d9936bd045?auto=format&fit=crop&q=80&w=800'
  }
];

export const DIFFERENTIATORS = [
  {
    title: 'Produtos Premium',
    desc: 'Utilizamos marcas líderes mundiais (Gyeon, Koch Chemie, Menzerna).',
    icon: <Award className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Técnicas Avançadas',
    desc: 'Metodologia alemã de detalhamento para máxima precisão.',
    icon: <Zap className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Prazos Rigorosos',
    desc: 'Comprometimento com a entrega sem sacrificar a qualidade.',
    icon: <Clock className="w-6 h-6 text-blue-400" />
  },
  {
    title: 'Pós-Venda Ativo',
    desc: 'Acompanhamento constante para manter a proteção do seu bem.',
    icon: <ThumbsUp className="w-6 h-6 text-blue-400" />
  }
];
