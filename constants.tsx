
import { Category, GalleryItem, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Loja', href: '#' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contato', href: '#contact' },
];

export const CATEGORIES: Category[] = [
  {
    id: 'hair',
    title: 'Cabelos Naturais & Tranças',
    description: 'Produtos especializados para nutrir e estilizar cabelos crespos e cacheados.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsI4nAN6lh6g2uMeXDsW_SeDRzU3JKMs2_Jhrk9tDm-g8ZMHk2TbocQmuQBTcvbL_eI0e4M5DCUUKIcteSRg0yX5hifHNHv_3-9yfTvkNiomtiGcYlcHwQGgPBQh415AzDHdZIm8a0foCzRBU_k9p2BJDRDJ19i_1Bn9GVe2rgZGblefVwpOTINrllp1dlbbmwp1nWKYUWixNFKE3wwxa2dASu_gEbs4v3Vu9l7QYG7NM1eyIPgResuWwK8WKXXMDYhar2jPum5huF',
    alt: 'Close up de tranças naturais'
  },
  {
    id: 'fashion',
    title: 'Moda Contemporânea',
    description: 'Estampas vibrantes e cortes modernos que contam história e tradição.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQo60esbOl3KTEhwomvpbQhe7EUPuuyVbVBsj4jWBXV_3aCZgi5H810KA_qzbkrE0KCxIwqj8KS05fCuFs7eZ5v8BfhsTaCiLVzb29OP8Y7UMjlnHZRxCLs0VmuUCxdzmpdXCzGzdjufsyc1X86VCslV0M7gUwSxNNAzQKmIiIv5ZrFud8FefqP2gKHS9iIguJmvw25-1la2e5Wn5IetNq4mzhn4o5FbXv0F6RK2bYPFo6rSJzbgs7DIynKCvJdXgtpLKB8hYyf4nC',
    alt: 'Modelo com vestido africano colorido'
  },
  {
    id: 'accessories',
    title: 'Acessórios Artesanais',
    description: 'Joias e adereços feitos à mão com design único e materiais naturais.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEB4VuLUv1u83pgunJCx9XwRhPYY0B9ChTGJV92u0-qbHzrw03RC3igBaRWHjBkxVO1XwlmAbBqNdkGM0brUX5Pw0vuvWgkqJSwIpcv8ZudtXusbGUEW4qrSGQoU0-kpQAI56grqB20rmGCVdmDa2JN7VhXCPMn0-k-052HLqs0ICxqdteQjXD_d64PKluIQW6urYWBP8zutzWa2SH2O-VZS3KnSprMEW9ENx3S-Db7xMX4zcGzpPYshGs1AHiah-SYnOqWJSR0nLr',
    alt: 'Colar de contas artesanais'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: '1', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXYIQxRkKpU81l-PSwm-fgnTEWVd4ZzB3YmHKzGuNSukvehUbG7eXqnEvfovb2ZovMZxmi336xMI0oT96wfldH_ttFBDs5plGlLQ31SQ4ogVvT4U_y-RNC3pd_Hg9tMiJA0MA2CZTRQd6_-aKFO5HeOhO6LF1lCLGD12PVWXqGn5nDn-lBALodkk8JmQOd5ZX15RpLUY4-yo3g4Q07DLEewUXrrwSH92392a0o_CYiEq6xMJfveS_EXREYk59yEuZji7QPY17RJVzY', alt: 'Woman with yellow headwrap', aspect: 'portrait' },
  { id: '2', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC661QIxyK7_-grk2qLJNenZCzx2gvyd1tpdpDqv6Ia15m-Yr-4Vx8pmUH5woGq-30HQgL5-TI6ZRvaK8y9Dgsc_MnY2L1ZYc4fDSaMen7oWvq_GDmOvgwQdBXAc8J59hQ8e5w6rxEQ9LoRoQxzGtAJoIFLAiWqEk_gUPruKOgEqrHRMds6a6mauuSJ_MpGEUC-IQtnr87uFjSoZGG4Ioh--WUmrNPQQRgT7TSTu82Xb_lxM8EPUvyTNw9BDxA3pvGfSd8ulDsebh75', alt: 'Patterned fabric', aspect: 'square' },
  { id: '3', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwL8FFr8adoObEboDrJwvF6P2RD2ofjhmVavzU6x7x8Vp4AYsOrnzH-IKXimf42MzUG5YMjn4pu8cWMVcWWjB9qJtgtEWnx9r9Q2JwIYk5ZMIhA0teO5WABO48r4n83O2ZVaLObWA2Qk0hqJFaTAprYp4-rpbuatUV3jKza071yCSpdSOh-E2hEdB_gQxaHJMXQCgxU-sifkT_sEUh29D1ZvIl28RWaQA-Lp7zWMglap3ey3aUES_KiBqTyORJ9HIj1todn-ZRauoQ', alt: 'Golden earrings', aspect: 'square' },
  { id: '4', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUlhaYfw7ZlGMdwF5V-0NKEyYohEPhTSHXVjlNLeD8vv8ub-wqvPFCTEjK2ZB9yvCGUYcUKqNMyUeUn_VGko_8cj9t7r7KULypTy0UNJR1uA7x2auAajL_1ClqMhrn0PMc082qKKkaS3wv6sO0LONeGdQxIi9krasFsrbnBSZdA9ilboZUvXTqVaNR3zdqJJCcDFVhwGcOGU-MlSa0a8hX3PoIwFCnMIh_wYoXBuLeIUe7FzjxmqqMnCyVLYFjDLpGp4aYOk7O8DiI', alt: 'Man laughing in dashiki', aspect: 'portrait' },
  { id: '5', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0EYUoCRL5Vw9lhg8PIkcN1R1dhpXO5YyZlQ7EbhCCAwrBD6CTH08CsNKNAr0R167cpQSWTQraJo5mRWSEMKhAoUK6CvZlNUZDncE762D0MsK8aR3VHhz1igYG4T5V8jQ6YP7wgF6Ce8sd3yT0qtF3QQu27bywbE-DmTelQwgwQI2xIQgJOt1Th0p5ZE1SJIL7FbcCQaHq0VgeeZzEelI3LiMFy6UsuU9aZTT6-nH5hWOktlaBmjc-zau2uvih-rBXP0kgwVAQaN4', alt: 'Full body fashion shot', aspect: 'portrait' },
  { id: '6', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpk2WcLwYBsJFcTaxt_ljF6WF__STgrLrJ3PsbmzyahD-wPlBni7pzZSZVoDcC2edwWHTT19GZM0CDwmhLAS03KbXK4ulmkKhKJTqKvfEN1M1j1X2sXFk6XNdjwj1C5v1x8VopyWw7ZSvT5VkCFnRD6q_unkPIsMiIlyk5ais6P-sRuIry1tweSV4TPZN_R7owqtM68HisjEqQIeao_QYSDICeH5KeG3fuky6bnmz6tRkDW8xAZSra33gAZWlwjsC5j6xo6aJzJ7Ic', alt: 'Makeup beauty shot', aspect: 'square' },
  { id: '7', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFRBtd3e5fhLJKboo15hzi7CgFOfpLmBj5o9GUl_gAUA44Kj0G4gAvNaG3vSvXmvWNTuI48blWOt186UWVTNtWXAsDJQfViqcJPM2NObM2nPZIYsHn0VnMIeZYPrnTuTaVzdGASvRxHW22ydL0kSKGCsLBgZ9cs_ZxOMAtIvAXWeRtmDBMcnWcXJyCc1j3tJ3YIpDMAZDHM1wYZ7LleFLO95HQu8dGkd57RuuSThrAIJNeLkVWKrcOGdKIw1MUopo8tmt6F6eU69fS', alt: 'Traditional beadwork', aspect: 'square' },
  { id: '8', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWNOiBO4ZNZd8xLfnnat5J060jMr41mbmfxtIn_yywv2ySaVDx2gEjWL8dsg9f1iozKRuBcW262uxS5ZaiM1CSW5g8BHRea-t5oqRa0bdFzHrONt5S8ANBgHsWJhskCCNvMUqi5l4cJafyV23EIIHwmFY3Oi2RQoG9a1ZBG7GNkezMbdxO6QDviml7BJVAsoyAeHt05R3TMem8-QwIDg-aeULRr_HMogvKwvczdHtndF3dqEZicA_6VfdPlcIArkTDRy9TgL9X5d4O', alt: 'Man with dreadlocks', aspect: 'portrait' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dandara Silva',
    location: 'Rio de Janeiro, RJ',
    text: '"As estampas são ainda mais vibrantes pessoalmente. Sinto uma conexão incrível com minha ancestralidade toda vez que uso as peças da AfroElegance."',
    rating: 5,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCapCDxIo1_oEt6TJKI6_Ez-XT_bVQF9cYPFj2rcqfdlzmp2tIngfLWZJBLKHWTb5C3Hz8pBkN7RU-i-YX8k6V4b_fS8TWo1KuAWpvO5dFyYznOxLV2A6K76ZTrwwO7EdokjYBP0UdE7bVmZbbB3vWK2ZhJpuDZWSz5lajigSZ-fJw_-KfLyRQqTQt6xt0_2xwI0FCpBeCn_OeMpo6TlsxhsNLItAyMKhS9u5C5a1cG929HZZQYtr6UKc3KMfCK-igQPErynswcPlb_'
  },
  {
    id: '2',
    name: 'Marcos Oliveira',
    location: 'Salvador, BA',
    text: '"Encontrei finalmente produtos para meu cabelo crespo que realmente funcionam e hidratam. A entrega foi super rápida e o atendimento excelente."',
    rating: 4.5,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqJG4mjdtOir4zuFtHZxg0h83G7CAPg83YBuKd0BufEj4J8AP13XhLlKsZVachb9VIqcAu77G059tw3ErMrc7R6sXa9w4n8orAP31ZEw8f4fvHZnfH0zhD41bVfQPWWt-D6CLhQB1PGi1eY-Z_eMiwKVq-yrmQVA65MruQfMZidorUOqrns-lM9bZ5RfaDdfb8PK1g9GrmNNzGA_FRaJtgQYCwbaxklt9xf87cWh6kYFrD_bI-X93F3RzIhWR4cRzwEv0bTTZ_m9dU'
  },
  {
    id: '3',
    name: 'Luana Costa',
    location: 'São Paulo, SP',
    text: '"A qualidade das joias artesanais é impecável. Comprei um colar para minha esposa e ela amou. Recomendo muito!"',
    rating: 5,
    avatarUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNXbEDwiI5qTtBqsDB_CsyIcANSKEikKhS7SGmSNpPx629s1AbXgzGRW7OnuHLYYAMhK603aR7DUYTa2DKyJ3bhotXh95VvV1m6yQrdJthRCx6-4Guv23PHkEwei6vcQLa7Cy0dsd3RDNTaYYalxMnajLYXWQaC8Vc1pgaWDJekgfjlodqwh8cZ1ND6vU2DerNorFHt3kzUZsPymazqhm9ipEH53t9UU-6mUdnRcdUUpGOGo_dWNf8LKYMHO7ApcNH57rVVlIeZdCs'
  }
];
