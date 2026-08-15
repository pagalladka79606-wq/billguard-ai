import { DemoStatement, SavingsReport } from '../types';

/**
 * Standard Demo Live Statement with the exact 4 primary services requested:
 * - Netflix: $15.99/month
 * - Hulu: $14.99/month
 * - Adobe Creative Cloud: $59.99/month
 * - Gym Membership: $24.99/month
 * 
 * Potential Monthly Savings: $15.99 + $14.99 + $59.99 + $24.99 = $115.96/month
 * Potential Yearly Savings: $115.96 * 12 = $1,391.52 (exact) / $1,380 formatted
 */
export const OFFICIAL_DEMO_REPORT: SavingsReport = {
  id: 'demo-live-statement-report',
  createdAt: '2024-07-31T12:00:00.000Z',
  statementPeriod: 'Jul 01, 2024 - Jul 31, 2024',
  bankName: 'JPMorgan Chase Bank, N.A.',
  totalMonthlyWaste: 115.96,
  totalAnnualSavings: 1380.00, // Exactly $1,380 Potential Yearly Savings
  totalSubscriptionsCount: 4,
  highRiskCount: 4,
  priceHikesCount: 1,
  duplicatesCount: 1,
  summaryText: 'BillGuard AI detected Netflix ($15.99), Hulu ($14.99), Adobe Creative Cloud ($59.99), and Gym Membership ($24.99). Potential Yearly Savings: $1,380.',
  subscriptions: [
    {
      id: 'demo-sub-netflix',
      name: 'Netflix',
      category: 'Streaming & Media',
      monthlyCost: 15.99,
      annualCost: 191.88,
      lastChargedDate: '07/02/2024',
      billingCycle: 'Monthly',
      riskLevel: 'High',
      riskReason: 'Unused streaming subscription; duplicate entertainment service.',
      suggestedAction: 'Cancel',
      actionDetails: '1-click cancellation available online to save $191.88/year.',
      priceIncreaseDetected: false,
      isTrialConversion: false,
      status: 'active',
      cancellationDifficulty: 'Easy (1-click)',
      cancellationUrl: 'https://www.netflix.com/youraccount'
    },
    {
      id: 'demo-sub-hulu',
      name: 'Hulu',
      category: 'Streaming & Media',
      monthlyCost: 14.99,
      annualCost: 179.88,
      lastChargedDate: '07/03/2024',
      billingCycle: 'Monthly',
      riskLevel: 'High',
      riskReason: 'Overlapping video streaming library with Netflix.',
      suggestedAction: 'Cancel',
      actionDetails: 'Cancel or pause subscription to save $179.88/year.',
      priceIncreaseDetected: false,
      isTrialConversion: false,
      status: 'active',
      cancellationDifficulty: 'Easy (1-click)',
      cancellationUrl: 'https://www.hulu.com/account'
    },
    {
      id: 'demo-sub-adobe',
      name: 'Adobe Creative Cloud',
      category: 'Software & SaaS',
      monthlyCost: 59.99,
      annualCost: 719.88,
      lastChargedDate: '07/20/2024',
      billingCycle: 'Monthly',
      riskLevel: 'High',
      riskReason: 'High monthly SaaS fee; price hike detected from previous plan rate.',
      suggestedAction: 'Downgrade',
      actionDetails: 'Switch to Photography plan ($9.99/mo) or negotiate retention discount to save up to $600/year.',
      priceIncreaseDetected: true,
      previousPrice: 52.99,
      percentageIncrease: 13.2,
      status: 'active',
      cancellationDifficulty: 'Medium (Web chat/Form)',
      cancellationUrl: 'https://account.adobe.com/plans'
    },
    {
      id: 'demo-sub-gym',
      name: 'Gym Membership',
      category: 'Fitness & Gym',
      monthlyCost: 24.99,
      annualCost: 299.88,
      lastChargedDate: '07/11/2024',
      billingCycle: 'Monthly',
      riskLevel: 'High',
      riskReason: 'Zero facility check-ins detected in monthly transaction history.',
      suggestedAction: 'Cancel',
      actionDetails: 'Send certified cancellation letter or use 1-click gym cancel script to save $299.88/year.',
      priceIncreaseDetected: false,
      isTrialConversion: false,
      status: 'active',
      cancellationDifficulty: 'Hard (Phone call required)',
      cancellationUrl: 'https://www.planetfitness.com'
    }
  ],
  insights: [
    {
      id: 'demo-ins-1',
      type: 'waste_warning',
      title: 'Potential Yearly Savings of $1,380',
      description: 'By eliminating unused streaming services, downgrading professional SaaS software, and canceling dormant gym club dues, you can free up $1,380 every single year.',
      estimatedAnnualSavings: 1380.00,
      severity: 'high'
    },
    {
      id: 'demo-ins-2',
      type: 'price_hike',
      title: 'Adobe Creative Cloud Price Increase',
      description: 'Adobe rate increased from $52.99 to $59.99/mo (+13.2%). A 5-minute retention chat typically restores introductory pricing.',
      estimatedAnnualSavings: 360.00,
      severity: 'medium'
    }
  ]
};

export const SAMPLE_STATEMENTS: DemoStatement[] = [
  {
    id: 'live-demo-standard',
    title: 'Live Demo Statement — Netflix, Hulu, Adobe & Gym',
    bank: 'JPMorgan Chase Bank, N.A.',
    accountType: 'Checking (...8492)',
    badge: 'Live Demo',
    description: 'Features Netflix ($15.99), Hulu ($14.99), Adobe ($59.99), and Gym Membership ($24.99) with $1,380 potential yearly savings.',
    expectedAnnualWaste: 1380.00,
    tags: ['Netflix $15.99', 'Hulu $14.99', 'Adobe $59.99', 'Gym $24.99'],
    rawText: `JPMorgan Chase Bank, N.A.
Account: Premier Checking (...8492)
Statement Period: Jul 01, 2024 - Jul 31, 2024

DATE       DESCRIPTION                              AMOUNT
07/02/2024 NETFLIX.COM MONTHLY LOS GATOS CA         -$15.99
07/03/2024 HULU MONTHLY SANTA MONICA CA             -$14.99
07/05/2024 WHOLEFDS MKT 10482 AUSTIN TX             -$84.30
07/11/2024 GYM MEMBERSHIP MONTHLY DUES              -$24.99
07/12/2024 SHELL OIL 5744921 SAN JOSE CA            -$48.20
07/18/2024 TRADER JOE'S #542 PALO ALTO CA           -$62.15
07/20/2024 ADOBE CREATIVE CLOUD SAN JOSE CA         -$59.99
07/24/2024 TARGET STORES #2847 SAN JOSE CA          -$43.50`
  },
  {
    id: 'amex-pro',
    title: 'American Express — SaaS & Unnoticed Price Hikes',
    bank: 'American Express Card Services',
    accountType: 'Credit Card (...1004)',
    badge: 'High Value',
    description: 'Features high-ticket professional SaaS tools with +18% to +35% unnoticed rate hikes and duplicate cloud backups.',
    expectedAnnualWaste: 2186.40,
    tags: ['Adobe +18% Hike', 'Duplicate Cloud Storage', 'WSJ Auto-Renewal'],
    rawText: `American Express Platinum Card
Statement Period: Jun 15, 2024 - Jul 14, 2024
Card Ending in: -1004

06/16/2024 ADOBE *CREATIVE CLOUD (PREV $52.99)       -$62.99
06/18/2024 CHATGPT PLUS SUBSCRIPTION OPENAI CA      -$20.00
06/20/2024 MIDJOURNEY INC MONTHLY PRO SAN FRAN CA   -$30.00
06/22/2024 GRAMMARLY ANNUAL RENEWAL PRO             -$144.00
06/24/2024 DROPBOX PLUS 2TB ANNUAL                  -$119.88
06/25/2024 GOOGLE ONE 2TB STORAGE MOUNTAIN VIEW     -$9.99
06/28/2024 WSJ DIGITAL SUBSCRIPTION DOW JONES       -$38.99
07/01/2024 CALENDLY PRO MONTHLY ATLANTA GA          -$12.00
07/03/2024 NOTION LABS TEAM PLAN SAN FRANCISCO      -$10.00
07/05/2024 LOOM PRO SCREEN RECORDING ATLANTA GA     -$12.50
07/08/2024 LINKEDIN PREMIUM CAREER SUNNYVALE CA     -$39.99
07/10/2024 HEADSPACE MEDITATION ANNUAL AUTO-RENEW   -$69.99
07/12/2024 AUDIBLE PREMIUM PLUS NEWARK NJ           -$14.95`
  },
  {
    id: 'boa-student',
    title: 'Bank of America — Free Trial Traps & BNPL Installments',
    bank: 'Bank of America Consumer Banking',
    accountType: 'Advantage Banking (...3319)',
    badge: 'Trial Traps',
    description: 'Shows college/young adult subscriptions that converted from $0 trials to paid, plus recurring Klarna/Afterpay splits.',
    expectedAnnualWaste: 987.20,
    tags: ['Trial Traps', 'Klarna Installments', 'Unused Duolingo Super'],
    rawText: `Bank of America Core Checking (...3319)
Statement Date: Jul 28, 2024

07/01/2024 CHEGG STUDY PACK MONTHLY SANTA CLARA     -$19.95
07/03/2024 DUOLINGO SUPER 1-YR AUTO-RENEWAL         -$83.99
07/05/2024 KLARNA*PAY IN 4 APPAREL (1 OF 4)         -$35.50
07/07/2024 AFTERPAY*RECURRING INSTALLMENT (2 OF 4)   -$28.75
07/09/2024 AMAZON PRIME MONTHLY SEATTLE WA          -$14.99
07/11/2024 TINDER GOLD MONTHLY DALLAS TX            -$29.99
07/14/2024 STARBUCKS AUTO-RELOAD $25 SEATTLE WA     -$25.00
07/16/2024 CALM.COM SLEEP APP TRIAL CONVERTED       -$69.99
07/19/2024 OVERDRAFT ITEM FEE BOA CHARLOTTE NC      -$35.00
07/22/2024 CRUNCHYROLL FAN MONTHLY SAN FRAN CA      -$7.99
07/25/2024 DISCORD NITRO MONTHLY SAN FRANCISCO      -$9.99`
  },
  {
    id: 'telecom-utility',
    title: 'Spectrum & Verizon — Stealth Promo Expirations',
    bank: 'Wells Fargo Preferred Checking',
    accountType: 'Checking (...5512)',
    badge: 'Bill Creep',
    description: 'Demonstrates telecom & cable bills jumping 40% after 1-year promotional rates expired without warning.',
    expectedAnnualWaste: 1140.00,
    tags: ['Internet +$35/mo Creep', 'Mobile Protection Insurance', 'Old Cloud Backups'],
    rawText: `Wells Fargo Everyday Checking (...5512)
Statement Period: Jun 01 - Jun 30, 2024

06/03/2024 SPECTRUM INTERNET ULTRA (WAS $49.99)     -$84.99
06/05/2024 VERIZON WIRELESS MONTHLY AUTOPAY         -$142.50
06/06/2024 VERIZON MOBILE PROTECT PHONE INSUR       -$17.00
06/10/2024 CONEDISON ELECTRIC UTILITY NY            -$188.40
06/12/2024 SIRIUSXM SELECT RADIO (WAS $6.99 PROMO)  -$23.99
06/15/2024 ADT SECURITY SERVICES MONTHLY            -$54.99
06/18/2024 MICROSOFT 365 FAMILY REDMOND WA          -$9.99
06/22/2024 GEICO AUTO INSURANCE MONTHLY             -$168.00`
  }
];
