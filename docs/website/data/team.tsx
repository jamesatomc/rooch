const ROOCH_TEAM: Record<string, AuthorDetails> = {
  jolestar: {
    name: 'Jolestar',
    twitterUsername: 'jolestar',
    avatar: '/images/people/jolestar.jpg',
  },
  haichao: {
    name: 'Haichao',
    twitterUsername: 'HaichaoZ',
    avatar: '/images/people/haichao.jpg',
  },
  ren: {
    name: 'Ren',
    twitterUsername: 'renryderauthor',
    avatar: '/images/people/ren.jpg',
  },
  omnihand: {
    name: 'Omnihand',
    twitterUsername: 'metairis',
    avatar: '/images/people/omnihand.jpg',
  },
  popcnt: {
    name: 'POPCNT',
    twitterUsername: 'evex_popcnt',
    avatar: '/images/people/popcnt.jpeg',
  },
  geometryolife: {
    name: 'Joe Chen',
    twitterUsername: 'joechendev',
    avatar: '/images/people/joe.jpg',
  },
  justin: {
    name: 'Justin Y.',
    twitterUsername: 'justinkn08',
    avatar: '/images/people/justin.jpg',
  },
  baichuan: {
    name: 'Bai Chuan',
    twitterUsername: 'muzixinly',
    avatar: '/images/people/baichuan.jpg',
  },
  ghpZ54K8ZRwU62zGVSePPs97yAv9swuAY0mVDR4: {
    name: 'ZHANG, HENGMING',
    avatar: '/images/people/ghpZ54K8ZRwU62zGVSePPs97yAv9swuAY0mVDR4.jpg', // Initials by DiceBear, licensed under CC0 1.0 .
  },
}

export type Author = keyof typeof ROOCH_TEAM
export type AuthorDetails = {
  name: string
  twitterUsername?: string
  avatar: string
}

export default ROOCH_TEAM
