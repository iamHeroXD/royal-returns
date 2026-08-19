import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  // --- PROPERTY FINANCE (6 Services) ---
  {
    id: 'home-loan',
    slug: 'home-loan',
    name: 'House Purchase Loans',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Guidance and assistance for purchasing ready, under-construction, or resale residential properties.',
    iconName: 'Home',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Purchasing a home is a major financial decision. Royal Returns helps you explore home purchase loan options across reputed banking networks to find repayment terms suited to your requirements.',
    useCases: [
      'Buying new ready-to-move apartment or house',
      'Purchasing under-construction residential properties',
      'Resale home purchases from private sellers',
      'Transferring existing home loan for favorable structure'
    ],
    eligibilityFactors: [
      'Applicant income stability (Salaried / Self-Employed)',
      'Credit score history and existing liabilities',
      'Property valuation and title verification status',
      'Applicant age and desired loan tenure'
    ],
    typicalDocuments: [
      'Identity and Address Proof (Aadhaar, PAN, Passport)',
      'Income documentation (Salary slips, Form 16 / ITR filings)',
      'Bank statements (Last 6 to 12 months)',
      'Property title documents, allotment letter, or sale agreement'
    ],
    processSteps: [
      'Share your property plans and income profile',
      'Explore matching home loan structures across partner institutions',
      'Compile required documentation with advisory support',
      'Application submission and processing by the chosen lender',
      'Lender evaluation, property legal check, and final decision'
    ]
  },
  {
    id: 'home-construction-loan',
    slug: 'home-construction-loan',
    name: 'House Construction Loans',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Funding guidance for constructing your independent home on self-owned residential land.',
    iconName: 'Hammer',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Building your own home requires staged financial planning. Construction loans disburse funds in tranches linked to construction milestones, helping manage cash flow effectively.',
    useCases: [
      'Constructing a custom house on owned plot',
      'Phased residential construction funding',
      'Architect-approved residential building projects'
    ],
    eligibilityFactors: [
      'Clear plot title and local authority building approval plan',
      'Detailed construction cost estimate from certified engineer',
      'Applicant income and debt-to-income ratio',
      'Lender-specific construction lending norms'
    ],
    typicalDocuments: [
      'KYC documents and proof of income',
      'Plot ownership document (Sale deed, tax receipts)',
      'Approved building construction plan from local authority',
      'Itemized construction cost estimate'
    ],
    processSteps: [
      'Discuss construction timeline and cost estimates',
      'Review stage-disbursement loan products',
      'Organize plot legal documents and building plan approvals',
      'Application submission for technical inspection',
      'Tranche disbursement upon lender milestone verification'
    ]
  },
  {
    id: 'home-improvement-loan',
    slug: 'home-improvement-loan',
    name: 'House Improvement Loans',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Financial solutions for renovating, repairing, tiling, painting, or upgrading existing residential space.',
    iconName: 'Paintbrush',
    enabled: true,
    verified: true,
    featured: false,
    overview: 'Give your existing residence a structural or interior upgrade. House improvement loans provide structured financing for renovations, interior work, and structural repairs.',
    useCases: [
      'Interior renovation and structural repair work',
      'Roof waterproofing, flooring, or kitchen remodeling',
      'Electrical and plumbing system modernizations'
    ],
    eligibilityFactors: [
      'Ownership verification of the residence being renovated',
      'Estimated renovation budget',
      'Applicant repayment capacity and income stability',
      'Lender criteria for property improvement advances'
    ],
    typicalDocuments: [
      'KYC and financial proof (Salary slips / ITR)',
      'Property ownership deed or tax receipt',
      'Renovation budget estimate from contractor/architect'
    ],
    processSteps: [
      'Detail the scope and budget of renovation work',
      'Compare home improvement loan options',
      'Submit financial and property ownership documents',
      'Lender verification and loan approval',
      'Direct disbursement for project execution'
    ]
  },
  {
    id: 'home-extension-loan',
    slug: 'home-extension-loan',
    name: 'House Extension Loans',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Funding options for adding extra rooms, floors, or expanded living space to your existing home.',
    iconName: 'Maximize2',
    enabled: true,
    verified: true,
    featured: false,
    overview: 'As your family grows, expand your existing home rather than moving. Extension loans finance vertical or horizontal additions to current residential properties.',
    useCases: [
      'Adding an extra floor or additional bedrooms',
      'Expanding living or dining spaces',
      'Building balcony extensions or enclosed garages'
    ],
    eligibilityFactors: [
      'Structural feasibility and municipal expansion sanction',
      'Ownership of existing residential building',
      'Borrower credit profile and monthly income'
    ],
    typicalDocuments: [
      'Personal identity and income proof',
      'Existing property title deed',
      'Sanctioned plan for structural extension'
    ],
    processSteps: [
      'Assess proposed expansion plan and estimate',
      'Identify suitable extension loan schemes',
      'Submit documentation for lender verification',
      'Lender site evaluation and credit sanction',
      'Fund release to commence construction'
    ]
  },
  {
    id: 'plot-purchase-construction',
    slug: 'plot-purchase-construction',
    name: 'Plot Purchase + Construction Loans',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Combined financial guidance for acquiring residential plot and constructing your house under a single arrangement.',
    iconName: 'MapPin',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Simplify plot acquisition and building by combining both requirements into a single structured financial path, saving time and administrative hassle.',
    useCases: [
      'Buying residential land and starting construction within specified timeframe',
      'Streamlining land acquisition and house construction financing'
    ],
    eligibilityFactors: [
      'Plot location approval (Municipal / Panchayat approved land)',
      'Construction timeline commitment',
      'Borrower eligibility based on total project cost'
    ],
    typicalDocuments: [
      'KYC and income documentation',
      'Plot seller documents and draft agreement',
      'Proposed construction layout and cost plan'
    ],
    processSteps: [
      'Evaluate land purchase and building budget',
      'Structure dual-purpose application',
      'Provide title check documents and building estimates',
      'Plot purchase funding followed by construction tranche releases'
    ]
  },
  {
    id: 'loan-against-property',
    slug: 'loan-against-property',
    name: 'Loan Against Property (LAP)',
    category: 'property',
    categoryLabel: 'Property Finance',
    shortDescription: 'Unlock capital equity from your residential or commercial real estate for major business or personal needs.',
    iconName: 'Building2',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Mortgage loan options leverage the market value of fully constructed property to secure multi-purpose funding at competitive interest rates compared to uncollateralized loans.',
    useCases: [
      'Business expansion and working capital injection',
      'Consolidating high-cost short-term obligations',
      'Higher education funding or major family commitments'
    ],
    eligibilityFactors: [
      'Property market valuation and clear legal title',
      'Property type (Residential / Commercial / Industrial)',
      'Applicant monthly cash flow and repayment history'
    ],
    typicalDocuments: [
      'Complete property chain title documents and tax paid receipts',
      'Income documents (3 years ITR with financial statements)',
      'Bank statements and personal KYC'
    ],
    processSteps: [
      'Discuss collateral valuation and funding target',
      'Identify LTV structures across lender network',
      'Legal search and property valuation by lender',
      'Final credit sanction and mortgage deed execution'
    ]
  },

  // --- LOANS & FUNDING (7 Services) ---
  {
    id: 'personal-loan',
    slug: 'personal-loan',
    name: 'Personal Loans',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Unsecured personal loan guidance for sudden requirements, medical events, or family expenses.',
    iconName: 'UserCheck',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Personal loans offer flexible, uncollateralized financing for personal priorities. Royal Returns guides applicants through lender criteria to match repayment comfort.',
    useCases: [
      'Emergency medical or family expenses',
      'Home cosmetic upgrades or event planning',
      'Short-term financial bridging requirements'
    ],
    eligibilityFactors: [
      'Monthly net income and employer category (Salaried / Professional)',
      'Credit bureau score and repayment history',
      'Existing Monthly Obligations (FOIR)'
    ],
    typicalDocuments: [
      'PAN Card, Aadhaar Card',
      'Latest 3 to 6 months salary credit bank statements',
      'Salary slips / Form 16 / ITR'
    ],
    processSteps: [
      'Submit basic requirement and income details',
      'Review suitable loan tenure and rate options',
      'Submit documentation for lender verification',
      'Lender approval and direct disbursement'
    ]
  },
  {
    id: 'business-loan',
    slug: 'business-loan',
    name: 'Business Loans',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Customized funding options for business growth, equipment acquisition, inventory, and operations.',
    iconName: 'Briefcase',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Fuel business momentum with structured commercial loans. We help sole proprietors, firms, and companies explore unsecured and collateralized business credit options.',
    useCases: [
      'Working capital expansion and inventory bulk purchases',
      'Machinery, equipment, or tech upgrades',
      'Business outlet expansion or renovation'
    ],
    eligibilityFactors: [
      'Business vintage (Years of continuous operation)',
      'Annual turnover and GST returns balance sheet health',
      'Credit profile of business entity and promoters'
    ],
    typicalDocuments: [
      'GST Registration, Udyam / Business License',
      'Last 2-3 years Audited Financials & ITR',
      'Latest 12 months primary bank statement'
    ],
    processSteps: [
      'Analyze cash flow and credit requirements',
      'Select matching banking partners',
      'Submit business financial dossier',
      'Lender evaluation and credit limit sanction'
    ]
  },
  {
    id: 'education-loan',
    slug: 'education-loan',
    name: 'Education / Study Loans',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Structured financing assistance for higher studies in India and abroad.',
    iconName: 'GraduationCap',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Invest in educational aspirations without straining family savings. Explore education loan options covering tuition, living expenses, and travel for accredited programs.',
    useCases: [
      'Undergraduate and Postgraduate degrees in India',
      'International university admission financing',
      'Specialized professional certifications'
    ],
    eligibilityFactors: [
      'Admission confirmation from recognized institution',
      'Academic track record of the student',
      'Co-applicant (parent/guardian) income profile'
    ],
    typicalDocuments: [
      'Admission letter and detailed fee structure',
      'Student academic marksheets & entrance exam scores',
      'Co-applicant KYC, bank statements & income proof'
    ],
    processSteps: [
      'Review program costs and moratorium options',
      'Organize academic and co-borrower financial documents',
      'Submit application to education loan lender desk',
      'Sanction letter issuance and tuition fee disbursement'
    ]
  },
  {
    id: 'vehicle-loan',
    slug: 'vehicle-loan',
    name: 'Vehicle Loans',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Finance assistance for new or pre-owned four-wheelers and commercial vehicles.',
    iconName: 'Car',
    enabled: true,
    verified: true,
    featured: false,
    overview: 'Drive your preferred vehicle with tailored auto loan choices. Royal Returns assists in comparing vehicle finance options for personal and commercial usage.',
    useCases: [
      'New passenger car purchases',
      'Certified pre-owned / used car financing',
      'Commercial transport vehicle acquisitions'
    ],
    eligibilityFactors: [
      'Applicant monthly income stability',
      'Vehicle model, quotation, or valuation (for used cars)',
      'Credit score and existing EMI commitments'
    ],
    typicalDocuments: [
      'KYC and income documentation',
      'Vehicle proforma invoice or dealership quotation',
      'Used vehicle RC book & valuation report (if applicable)'
    ],
    processSteps: [
      'Provide vehicle choice and loan amount requirement',
      'Compare interest rate structures and tenure',
      'Document submission and dealer verification',
      'Lender approval and direct disbursement to dealer'
    ]
  },
  {
    id: 'loan-consolidation',
    slug: 'loan-consolidation',
    name: 'Loan Consolidation Services',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Combine multiple high-interest obligations into a single structured repayment plan.',
    iconName: 'Layers',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Managing multiple monthly EMIs can be stressful. Loan consolidation options help unify debt commitments into a single structured loan with manageable monthly payouts.',
    useCases: [
      'Merging multiple credit card balances and high-interest personal loans',
      'Lowering total monthly EMI burden through extended tenure',
      'Simplifying monthly tracking to a single payment date'
    ],
    eligibilityFactors: [
      'Overall existing debt profile vs monthly income',
      'Repayment history on active loans',
      'Availability of collateral (if converting to LAP consolidation)'
    ],
    typicalDocuments: [
      'Active loan sanction letters and latest SOA (Statement of Account)',
      'Income proof and bank statements (last 6 months)',
      'Identity and address verification'
    ],
    processSteps: [
      'Detailed audit of active loans and interest rates',
      'Formulate single structured consolidation plan',
      'Submit application for balance transfer and top-up',
      'Lender settles existing debts and establishes single facility'
    ]
  },
  {
    id: 'overdraft',
    slug: 'overdraft',
    name: 'Overdraft (OD) Facilities',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Revolving credit options for businesses and self-employed individuals to manage cash flow.',
    iconName: 'CreditCard',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'An Overdraft facility provides flexible liquidity where interest is calculated only on the exact amount utilized for the exact duration of use.',
    useCases: [
      'Managing seasonal business cash flow fluctuations',
      'Meeting unexpected inventory or operational bills',
      'Revolving working capital buffer'
    ],
    eligibilityFactors: [
      'Business turnover and bank account transaction history',
      'Collateral provided (Property / FD / Business Assets)',
      'Entity financial health and credit evaluation'
    ],
    typicalDocuments: [
      'Business registration and GST returns',
      'Bank statements for past 12 months',
      'Financial statements and collateral papers (if secured OD)'
    ],
    processSteps: [
      'Assess average liquidity gap and required OD limit',
      'Explore secured or unsecured OD facilities across banks',
      'Submit banking history and financial records',
      'Sanction of OD limit account for immediate drawdowns'
    ]
  },
  {
    id: 'project-funding',
    slug: 'project-funding',
    name: 'Project Funding',
    category: 'loans',
    categoryLabel: 'Loans & Funding',
    shortDescription: 'Comprehensive guidance for medium to large commercial and industrial development projects.',
    iconName: 'TrendingUp',
    enabled: true,
    verified: true,
    featured: false,
    overview: 'Capital-intensive projects require specialized debt structuring. We assist entrepreneurs and companies in preparing financial proposals for project finance options.',
    useCases: [
      'Setting up new manufacturing units or commercial complexes',
      'Infrastructure expansion and hospitality ventures',
      'Phased industrial project development'
    ],
    eligibilityFactors: [
      'Project viability, DPR (Detailed Project Report), and promoter equity',
      'Promoter industry experience and track record',
      'Regulatory approvals and environmental clearances'
    ],
    typicalDocuments: [
      'Detailed Project Report (DPR) & Techno-Economic Viability study',
      'Promoter company audited balance sheets',
      'Land title and statutory project clearances'
    ],
    processSteps: [
      'Review project blueprint, capital requirement & DPR',
      'Connect with institutional lending desks and consortiums',
      'Formal appraisal and risk evaluation by financial institution',
      'Project sanction, escrow setup & phased disbursement'
    ]
  },

  // --- SAVINGS OPTIONS (2 Services) ---
  {
    id: 'fixed-deposit',
    slug: 'fixed-deposit',
    name: 'Fixed Deposit (FD) Guidance',
    category: 'savings',
    categoryLabel: 'Savings Options',
    shortDescription: 'Explore term deposit solutions across partner banks and RBI-regulated financial institutions.',
    iconName: 'Lock',
    enabled: true,
    verified: true,
    featured: true,
    overview: 'Grow your surplus capital securely. Fixed deposits offer predictable returns over a chosen tenure across top-rated banking and financial institutions.',
    useCases: [
      'Lump-sum capital preservation with predictable returns',
      'Senior citizen savings with higher yield potential',
      'Short to long-term financial goal planning'
    ],
    eligibilityFactors: [
      'Individual resident, NRI, or corporate entity status',
      'Minimum deposit tenure criteria (7 days to 10 years)',
      'KYC compliance'
    ],
    typicalDocuments: [
      'PAN Card and Aadhaar Card',
      'Passport size photographs',
      'Cheque / Bank transfer details for deposit booking'
    ],
    processSteps: [
      'Discuss tenure preference and yield expectations',
      'Compare verified bank and NBFC FD interest rates',
      'Complete application and KYC documentation',
      'Receive official Fixed Deposit Advice / Certificate'
    ]
  },
  {
    id: 'recurring-deposit',
    slug: 'recurring-deposit',
    name: 'Recurring Deposit (RD) Guidance',
    category: 'savings',
    categoryLabel: 'Savings Options',
    shortDescription: 'Build disciplined monthly savings habits with structured recurring deposit options.',
    iconName: 'Clock',
    enabled: true,
    verified: true,
    featured: false,
    overview: 'Accumulate capital systematically by depositing a fixed amount monthly. Ideal for building emergency funds or planning upcoming life events.',
    useCases: [
      'Disciplined monthly wealth building from regular income',
      'Accumulating down-payment or annual insurance premiums',
      'Low-risk structured savings habit'
    ],
    eligibilityFactors: [
      'Individual or joint account holders',
      'Selected monthly deposit commitment and tenure'
    ],
    typicalDocuments: [
      'Standard KYC documents (Identity & Address proof)',
      'Linked savings account details for auto-debit'
    ],
    processSteps: [
      'Set monthly savings target and comfortable tenure',
      'Select institution matching interest rate requirements',
      'Initiate account setup and standing instructions',
      'Track interest accumulation through bank statements'
    ]
  },

  // --- FINANCIAL GUIDANCE (5 Advisory Services - Configurable & Verified Flags) ---
  {
    id: 'loan-advisory',
    slug: 'loan-advisory',
    name: 'Loan Advisory & Profile Assessment',
    category: 'advisory',
    categoryLabel: 'Financial Guidance',
    shortDescription: 'Personalized evaluation of your financial requirement and borrowing eligibility across banking options.',
    iconName: 'FileText',
    enabled: true,
    verified: true,
    featured: true,
    isAdvisoryConfirmationRequired: true,
    overview: 'Navigating loan markets can be overwhelming. Loan advisory provides structured profile analysis to help you understand suitable borrowing choices before applying.',
    useCases: [
      'Understanding maximum borrowing potential based on income',
      'Clarifying document requirements prior to formal application',
      'Evaluating interest rate structures (Fixed vs Floating)'
    ],
    eligibilityFactors: [
      'Open to individuals and business owners exploring financial options',
      'No minimum score required for initial consultation'
    ],
    typicalDocuments: [
      'Basic income summary and existing EMI schedule',
      'ID proof for initial profile review'
    ],
    processSteps: [
      'Initial discussion of goals and financial background',
      'Comprehensive profile evaluation against general lender criteria',
      'Presentation of suitable loan options and checklist',
      'Assistance with application preparation'
    ]
  },
  {
    id: 'financial-consulting',
    slug: 'financial-consulting',
    name: 'Financial Consulting Services',
    category: 'advisory',
    categoryLabel: 'Financial Guidance',
    shortDescription: 'Strategic guidance for individuals and small businesses to align cash flow with long-term goals.',
    iconName: 'Compass',
    enabled: true,
    verified: true,
    featured: false,
    isAdvisoryConfirmationRequired: true,
    overview: 'Gain clarity on financial organization. We assist clients in evaluating debt structures, cash flow timing, and practical capital management.',
    useCases: [
      'Cash flow structuring for expanding small businesses',
      'Personal financial organization and debt-to-income balance',
      'Evaluating major financial decisions'
    ],
    eligibilityFactors: [
      'Customized consultation tailored to client requirement'
    ],
    typicalDocuments: [
      'Overview of current assets, liabilities, and income sources'
    ],
    processSteps: [
      'Requirement mapping and financial audit session',
      'Analysis of debt, liquidity, and goal horizons',
      'Actionable financial roadmap delivery'
    ]
  },
  {
    id: 'investment-planning',
    slug: 'investment-planning',
    name: 'Investment Planning Guidance',
    category: 'advisory',
    categoryLabel: 'Financial Guidance',
    shortDescription: 'Exploratory discussions on aligning surplus capital with structured financial goals.',
    iconName: 'PieChart',
    enabled: true,
    verified: false,
    featured: false,
    isAdvisoryConfirmationRequired: true,
    overview: 'Understand basic investment vehicles and risk-return characteristics. (Note: Royal Returns provides general informational guidance; specific financial products depend on registered partner institutions).',
    useCases: [
      'Understanding asset allocation fundamentals',
      'Planning for medium to long-term liquidity milestones'
    ],
    eligibilityFactors: [
      'Informational advisory open to all clients'
    ],
    typicalDocuments: [
      'Goal timeline and risk comfort discussion notes'
    ],
    processSteps: [
      'Identify financial timeline and liquidity needs',
      'Review generic asset class features (FDs, Deposits, Funds)',
      'Referral or coordination with licensed partner desks if required'
    ]
  },
  {
    id: 'retirement-planning',
    slug: 'retirement-planning',
    name: 'Retirement Planning Guidance',
    category: 'advisory',
    categoryLabel: 'Financial Guidance',
    shortDescription: 'Educational discussion on structuring post-retirement corpus and regular cash flow options.',
    iconName: 'ShieldCheck',
    enabled: true,
    verified: false,
    featured: false,
    isAdvisoryConfirmationRequired: true,
    overview: 'Prepare for post-professional financial independence. Learn how guaranteed yield deposits and structured plans help maintain financial security in later years.',
    useCases: [
      'Calculating future retirement income requirements',
      'Structuring conservative income streams for senior citizens'
    ],
    eligibilityFactors: [
      'Open to individuals planning early or upcoming retirement'
    ],
    typicalDocuments: [
      'Current age, target retirement age, and monthly expenditure estimate'
    ],
    processSteps: [
      'Determine post-retirement inflation-adjusted expense targets',
      'Explore low-volatility deposit and pension-linked structures',
      'Formulate structured savings timeline'
    ]
  },
  {
    id: 'tax-optimization',
    slug: 'tax-optimization',
    name: 'Tax Optimization Guidance',
    category: 'advisory',
    categoryLabel: 'Financial Guidance',
    shortDescription: 'General overview of tax-saving avenues permissible under applicable Indian tax frameworks.',
    iconName: 'Calculator',
    enabled: true,
    verified: false,
    featured: false,
    isAdvisoryConfirmationRequired: true,
    overview: 'Learn how housing loans, education loans, and specified deposits interact with tax savings provisions under applicable IT Act sections.',
    useCases: [
      'Understanding tax deduction benefits on home loan interest (Sec 24)',
      'Understanding principal deduction (Sec 80C) and education loan interest (Sec 80E)'
    ],
    eligibilityFactors: [
      'Informational guidance for tax-paying individuals and entities'
    ],
    typicalDocuments: [
      'Existing loan interest certificates & deposit statements'
    ],
    processSteps: [
      'Identify eligible tax-deductible financial commitments',
      'Provide general information on applicable deductions',
      'Recommend coordination with qualified Chartered Accountants for filing'
    ]
  }
];

// Helper export to fetch only enabled services across the website
export const getActiveServices = () => servicesData.filter((s) => s.enabled);
