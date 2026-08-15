export type RiskLevel = 'Low' | 'Medium' | 'High';
export type ActionType = 'Cancel' | 'Downgrade' | 'Negotiate' | 'Review' | 'Keep';
export type CategoryType = 
  | 'Streaming & Media'
  | 'Software & SaaS'
  | 'Fitness & Gym'
  | 'Utilities & Telecom'
  | 'Shopping & Boxes'
  | 'Finance & Banking'
  | 'Gaming & Apps'
  | 'News & Publications'
  | 'Other';

export interface SubscriptionItem {
  id: string;
  name: string;
  category: CategoryType;
  monthlyCost: number;
  annualCost: number;
  lastChargedDate: string;
  billingCycle: 'Monthly' | 'Annual' | 'Quarterly' | 'Weekly' | 'Bi-weekly';
  riskLevel: RiskLevel;
  riskReason: string;
  suggestedAction: ActionType;
  actionDetails: string;
  priceIncreaseDetected?: boolean;
  previousPrice?: number;
  percentageIncrease?: number;
  duplicateOf?: string;
  isTrialConversion?: boolean;
  status: 'active' | 'cancelled' | 'negotiating' | 'kept';
  cancellationDifficulty?: 'Easy (1-click)' | 'Medium (Web chat/Form)' | 'Hard (Phone call required)';
  merchantWebsite?: string;
  cancellationUrl?: string;
}

export interface SavingsInsight {
  id: string;
  type: 'waste_warning' | 'duplicate_alert' | 'price_hike' | 'trial_trap' | 'bundle_opportunity' | 'annual_plan_tip';
  title: string;
  description: string;
  estimatedAnnualSavings: number;
  severity: 'high' | 'medium' | 'info';
}

export interface SavingsReport {
  id: string;
  createdAt: string;
  statementPeriod: string;
  bankName: string;
  totalMonthlyWaste: number;
  totalAnnualSavings: number;
  totalSubscriptionsCount: number;
  highRiskCount: number;
  priceHikesCount: number;
  duplicatesCount: number;
  subscriptions: SubscriptionItem[];
  insights: SavingsInsight[];
  summaryText: string;
}

export interface FeeItem {
  id: string;
  feeType: 'Annual Card Fee' | 'Foreign Transaction' | 'Late Payment Fee' | 'Overdraft / NSF' | 'Paper Statement Fee' | 'Interest Charge / APR Sneak' | 'Wire / Transfer Fee';
  institution: string;
  amount: number;
  chargeDate: string;
  isWaivable: boolean;
  waiveProbability: 'High (85%+)' | 'Medium (50-70%)' | 'Low';
  aiWaiverScript: string;
}

export interface BNPLItem {
  id: string;
  provider: 'Klarna' | 'Afterpay' | 'Affirm' | 'PayPal Pay-in-4' | 'Zip' | 'Sezzle';
  merchant: string;
  installmentAmount: number;
  frequency: string;
  installmentsRemaining: number;
  totalRemaining: number;
  estimatedPayoffDate: string;
  interestRate: number;
}

export interface UtilityBillItem {
  id: string;
  provider: string;
  serviceType: 'Broadband / Internet' | 'Mobile / Cellular' | 'Electricity / Power' | 'Cable TV / Bundle' | 'Home Security';
  currentMonthly: number;
  previousMonthly: number;
  hikePercentage: number;
  contractStatus: 'Month-to-Month (Negotiable)' | 'Under Contract' | 'Expiring Soon';
  potentialMonthlySavings: number;
  aiNegotiationScript: string;
}

export interface AffiliateOffer {
  id: string;
  category: 'High-Yield Savings' | 'Cashback Credit Cards' | 'Credit & Identity' | 'Insurance Savings' | 'Budgeting Companion';
  title: string;
  provider: string;
  highlightBadge: string;
  apyOrReward: string;
  description: string;
  estimatedExtraAnnualValue: number;
  ctaText: string;
  affiliateUrl: string;
  rating: number;
  keyFeatures: string[];
}

export interface DemoStatement {
  id: string;
  title: string;
  bank: string;
  accountType: string;
  badge: string;
  description: string;
  rawText: string;
  expectedAnnualWaste: number;
  tags: string[];
}

export interface NegotiationDraft {
  subject: string;
  body: string;
  serviceName: string;
  targetOutcome: 'Full Cancellation & Refund' | '50% Retention Discount' | 'Downgrade to Free Tier' | 'Fee Waiver';
  phoneScript?: string;
}

export interface PricingTier {
  id: 'free' | 'pro_monthly' | 'pro_annual';
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  cta: string;
}
