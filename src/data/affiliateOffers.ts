import { AffiliateOffer } from '../types';

export const AFFILIATE_OFFERS: AffiliateOffer[] = [
  {
    id: 'marcus-hysa',
    category: 'High-Yield Savings',
    title: 'Marcus by Goldman Sachs Online Savings',
    provider: 'Goldman Sachs Bank USA',
    highlightBadge: '4.40% APY • No Minimums',
    apyOrReward: '4.40% APY',
    description: 'Stop letting your recovered subscription money sit in 0.01% checking. Earn over 10x the national average with zero monthly fees and FDIC insurance up to $250,000.',
    estimatedExtraAnnualValue: 440.00,
    ctaText: 'Open High-Yield Account',
    affiliateUrl: 'https://www.marcus.com',
    rating: 4.9,
    keyFeatures: [
      'Earn 4.40% APY on all balance tiers',
      'No monthly maintenance or transfer fees',
      'Same-day transfers up to $100,000',
      'FDIC insured up to $250,000'
    ]
  },
  {
    id: 'sofi-banking',
    category: 'High-Yield Savings',
    title: 'SoFi Checking & Savings Account',
    provider: 'SoFi Bank, N.A.',
    highlightBadge: 'Up to 4.50% APY + $300 Bonus',
    apyOrReward: '4.50% APY',
    description: 'Get up to $300 sign-up bonus with direct deposit. Automatically sort your saved subscription cash into high-yield savings Vaults.',
    estimatedExtraAnnualValue: 550.00,
    ctaText: 'Claim $300 Bonus & 4.50% APY',
    affiliateUrl: 'https://www.sofi.com',
    rating: 4.8,
    keyFeatures: [
      'Up to 4.50% APY with direct deposit',
      'Get paid up to 2 days early',
      'Zero account or overdraft fees',
      'Automated savings rounding rules'
    ]
  },
  {
    id: 'chase-freedom-flex',
    category: 'Cashback Credit Cards',
    title: 'Chase Freedom Flex® Card',
    provider: 'JPMorgan Chase Bank',
    highlightBadge: '$200 Bonus + 5% Rotating Cashback',
    apyOrReward: '5% Cash Back',
    description: 'Earn 5% cash back on rotating quarterly bonus categories (like grocery stores, streaming, and gas) and 3% on dining/drugstores with $0 annual fee.',
    estimatedExtraAnnualValue: 380.00,
    ctaText: 'View Card Details & Apply',
    affiliateUrl: 'https://creditcards.chase.com',
    rating: 4.9,
    keyFeatures: [
      '$200 bonus after spending $500 in first 3 months',
      '5% cash back on quarterly bonus categories (up to $1,500)',
      '3% on dining at restaurants & takeout',
      '$0 annual fee forever'
    ]
  },
  {
    id: 'credit-karma',
    category: 'Credit & Identity',
    title: 'Credit Karma Free Score & Dark Web Monitoring',
    provider: 'Intuit Credit Karma',
    highlightBadge: '100% Free • No Credit Card Required',
    apyOrReward: 'Free Monitoring',
    description: 'Monitor your TransUnion and Equifax credit scores in real time. Get instant alerts whenever new recurring inquiries or credit lines are opened.',
    estimatedExtraAnnualValue: 120.00,
    ctaText: 'Check Free Credit Score',
    affiliateUrl: 'https://www.creditkarma.com',
    rating: 4.7,
    keyFeatures: [
      'Free credit scores updated weekly',
      'Identity theft and dark web breach monitoring',
      'Personalized debt consolidation rate finder',
      'Zero impact on your credit score'
    ]
  },
  {
    id: 'lemonade-insurance',
    category: 'Insurance Savings',
    title: 'Lemonade Renters & Auto Policy Refinance',
    provider: 'Lemonade Insurance Company',
    highlightBadge: 'Plans starting at $5/month',
    apyOrReward: 'Save up to 40%',
    description: 'Switch and save hundreds on renters, homeowners, and car insurance powered by instant AI claims and transparent flat-rate pricing.',
    estimatedExtraAnnualValue: 360.00,
    ctaText: 'Get 90-Second Quote',
    affiliateUrl: 'https://www.lemonade.com',
    rating: 4.8,
    keyFeatures: [
      'Renters insurance from $5/month',
      'Bundle car + renters for extra 20% discount',
      'Instant AI claims payouts in seconds',
      'Unused premiums donated to charities'
    ]
  },
  {
    id: 'amex-blue-cash',
    category: 'Cashback Credit Cards',
    title: 'Blue Cash Everyday® Card from American Express',
    provider: 'American Express',
    highlightBadge: '3% U.S. Supermarkets & Online Retail',
    apyOrReward: '3% Cash Back',
    description: 'Earn 3% cash back on U.S. supermarkets, U.S. online retail purchases, and U.S. gas stations (up to $6,000 per year in each category) + $7/month Disney Bundle credit.',
    estimatedExtraAnnualValue: 320.00,
    ctaText: 'Apply in Minutes',
    affiliateUrl: 'https://www.americanexpress.com',
    rating: 4.9,
    keyFeatures: [
      '$84 Disney Bundle statement credit ($7/month)',
      '3% cash back on U.S. online retail purchases',
      '3% on U.S. supermarkets (up to $6,000/yr)',
      '$0 annual fee'
    ]
  }
];
