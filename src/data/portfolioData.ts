export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Data & Database' | 'Web Apps';
  tagline: string;
  description: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  highlights: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  schemaDetails: {
    description: string;
    sqlSnippet: string;
    tables: string[];
  };
  features: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    focus: string;
    codeSnippet?: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Prerna Shergar",
  role: "Aspiring Data Engineer",
  education: {
    degree: "B.Tech in Computer Science & Engineering (AIML)",
    year: "2nd Year Undergraduate",
    university: "REVA University",
    location: "Bengaluru, Karnataka, India",
    focus: "Data Pipelines, Relational Databases, Algorithmic Problem Solving & Full-Stack Development",
    coursework: [
      "Database Management Systems (DBMS)",
      "Data Structures & Algorithms",
      "Object-Oriented Programming with Python & C",
      "Applied Mathematics & Statistics for AI/ML",
      "Operating Systems & Computer Architecture",
      "Web Technologies & Client-Side Architectures"
    ]
  },
  careerObjective: "Passionate 2nd-year CSE (AIML) undergraduate at REVA University aspiring to build high-throughput data pipelines, robust relational database architectures, and scalable full-stack applications. Dedicated to mastering Python, SQL query optimization, and cloud storage systems.",
  contact: {
    email: "prernashergar@gmail.com",
    github: "https://github.com/prernashergar-sketch",
    linkedin: "https://www.linkedin.com/in/prerna-shergar-8b421b376/",
    location: "Bengaluru, India"
  }
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core algorithmic foundations and computational scripting",
    skills: [
      {
        name: "Python",
        level: "Core Strength",
        focus: "Data processing, automated scripts, backend logic & object-oriented programming",
        codeSnippet: `# Data pipeline aggregation snippet in Python
def process_ticket_metrics(transactions):
    summary = {}
    for tx in transactions:
        stand = tx.get("stand_tier")
        amount = tx.get("amount", 0)
        summary[stand] = summary.get(stand, 0) + amount
    return [{"tier": k, "revenue": v} for k, v in summary.items()]`
      },
      {
        name: "C",
        level: "Academic Foundation",
        focus: "Memory management, pointers, low-level data structures & algorithms",
        codeSnippet: `// Linear search & pointer manipulation
int search_slot(int *slots, int size, int target) {
    for (int i = 0; i < size; i++) {
        if (*(slots + i) == target) return i;
    }
    return -1;
}`
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        focus: "ES6+ asynchronous workflows, event-driven DOM, REST APIs",
        codeSnippet: `// Asynchronous data fetcher with error isolation
async function loadReservationSlots(restaurantId, date) {
  try {
    const res = await fetch(\`/api/restaurants/\${restaurantId}/slots?date=\${date}\`);
    if (!res.ok) throw new Error("Slot load failed");
    return await res.json();
  } catch (err) {
    console.error("Reservation Error:", err);
    return [];
  }
}`
      }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational modeling, schema constraints and cloud data persistence",
    skills: [
      {
        name: "MySQL",
        level: "Proficient",
        focus: "Complex JOINs, indexes, referential integrity, foreign key relations & DDL/DML",
        codeSnippet: `-- MySQL query to find top revenue stands for a match
SELECT 
  s.stand_name,
  COUNT(b.seat_id) AS tickets_sold,
  SUM(s.price) AS total_revenue
FROM stadium_stands s
LEFT JOIN seats st ON s.stand_id = st.stand_id
LEFT JOIN bookings b ON st.seat_id = b.seat_id
WHERE b.match_id = 104 AND b.booking_status = 'CONFIRMED'
GROUP BY s.stand_id, s.stand_name
ORDER BY total_revenue DESC;`
      },
      {
        name: "Supabase",
        level: "Working Knowledge",
        focus: "PostgreSQL cloud backend, row-level security, instant REST endpoints",
        codeSnippet: `// Supabase real-time expense data synchronization
import { createClient } from '@supabase/supabase-js';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const fetchMonthlyExpenses = async (userId) => {
  const { data, error } = await supabase
    .from('expenses')
    .select('id, category, amount, created_at')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};`
      }
    ]
  },
  {
    title: "Web Technologies",
    description: "Component-driven frontend engineering and responsive interfaces",
    skills: [
      {
        name: "React.js",
        level: "Proficient",
        focus: "State management, reusable hooks, functional components, UI state lifecycle",
        codeSnippet: `// Custom hook for active filter state
import { useState, useMemo } from 'react';

export function useProjectFilter(projects, initialCategory = 'All') {
  const [filter, setFilter] = useState(initialCategory);
  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter(p => p.category === filter);
  }, [projects, filter]);

  return { filter, setFilter, filtered };
}`
      },
      {
        name: "HTML5 & CSS3",
        level: "Advanced",
        focus: "Semantic document structure, flexbox/grid architectures, accessibility",
        codeSnippet: `/* Modern container grid layout */
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}`
      }
    ]
  },
  {
    title: "Tools & Version Control",
    description: "Collaborative engineering workflows and terminal utilities",
    skills: [
      {
        name: "Git",
        level: "Proficient",
        focus: "Branch management, commit hygiene, rebase/merge, conflict resolution",
        codeSnippet: `# Git workflow standards
git checkout -b feature/ipl-seat-reservation
git add src/components/SeatGrid.tsx
git commit -m "feat(booking): implement real-time seat status toggling"
git push origin feature/ipl-seat-reservation`
      },
      {
        name: "GitHub",
        level: "Proficient",
        focus: "Repository management, project issue tracking, pull requests, release tagging",
        codeSnippet: `# Repository cloning and remote synchronisation
git remote add origin https://github.com/prernashergar-sketch/ipl-ticket-booking.git
git branch -M main
git push -u origin main`
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ipl-ticket-booking",
    title: "IPL Ticket Booking System",
    category: "Full Stack",
    tagline: "High-concurrency sports ticketing platform with seat selection & transaction safety",
    description: "An end-to-end cricket match ticketing platform designed to manage stadium fixtures, tier-based stand capacities (VIP, Pavilion, General), seat allocation locks, and instant invoice generation with relational database integrity.",
    technologies: ["Python", "MySQL", "React.js", "JavaScript", "HTML/CSS"],
    metrics: [
      { label: "Stands Modeled", value: "4 Tiers" },
      { label: "Concurrent Holds", value: "ACID Safe" },
      { label: "Data Integrity", value: "100% Normalized" }
    ],
    highlights: [
      "Relational schema modeling stadium layouts, fixture dates, ticket pricing, and booking states.",
      "Interactive seat grid selector allowing visual tier identification and real-time total estimation.",
      "Transaction boundary design to prevent double-booking of seats during concurrent checkouts.",
      "Instant e-ticket receipt breakdown including booking ID, match details, and seat coordinates."
    ],
    githubUrl: "https://github.com/prernashergar-sketch",
    schemaDetails: {
      description: "Relational database schema enforcing foreign key constraints across matches, stadium stands, individual seats, and confirmed customer bookings.",
      sqlSnippet: `CREATE TABLE matches (
    match_id INT PRIMARY KEY AUTO_INCREMENT,
    team_home VARCHAR(50) NOT NULL,
    team_away VARCHAR(50) NOT NULL,
    venue VARCHAR(100) NOT NULL,
    match_date DATETIME NOT NULL
);

CREATE TABLE stadium_stands (
    stand_id INT PRIMARY KEY AUTO_INCREMENT,
    stand_name VARCHAR(50) NOT NULL,
    tier ENUM('VIP', 'Pavilion', 'East Stand', 'West Stand') NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    capacity INT NOT NULL
);

CREATE TABLE seats (
    seat_id INT PRIMARY KEY AUTO_INCREMENT,
    stand_id INT NOT NULL,
    row_num VARCHAR(5) NOT NULL,
    seat_num INT NOT NULL,
    status ENUM('AVAILABLE', 'LOCKED', 'BOOKED') DEFAULT 'AVAILABLE',
    FOREIGN KEY (stand_id) REFERENCES stadium_stands(stand_id)
);

CREATE TABLE bookings (
    booking_id VARCHAR(36) PRIMARY KEY,
    match_id INT NOT NULL,
    seat_id INT NOT NULL,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    amount_paid DECIMAL(8, 2) NOT NULL,
    booked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (match_id) REFERENCES matches(match_id),
    FOREIGN KEY (seat_id) REFERENCES seats(seat_id)
);`,
      tables: ["matches", "stadium_stands", "seats", "bookings"]
    },
    features: [
      "Live fixture selector with home/away team matchups",
      "Visual stadium layout representation with categorized color-coded seat tiers",
      "Real-time ticket pricing calculation including subtotal and tax charges",
      "Simulated ticket confirmation with downloadable/printable ticket voucher card",
      "Search and filtering by fixture date and stand affordability"
    ]
  },
  {
    id: "restaurant-reservation",
    title: "Restaurant Reservation System",
    category: "Full Stack",
    tagline: "Dining slot scheduling and table inventory management engine",
    description: "A centralized restaurant booking engine built to streamline table occupancy, prevent overbooking, and match customer parties with appropriate seating capacities across daily service shifts.",
    technologies: ["MySQL", "Python", "React.js", "JavaScript", "HTML/CSS"],
    metrics: [
      { label: "Party Capacities", value: "2 to 10 Pax" },
      { label: "Shift Management", value: "Lunch & Dinner" },
      { label: "Query Speed", value: "< 15ms" }
    ],
    highlights: [
      "Dynamic table assignment algorithm mapping requested party sizes to the most optimal table capacity.",
      "Slot-based reservation logic segmenting dining hours into discrete 90-minute service windows.",
      "Structured customer confirmation database tracking contact details, dietary requests, and status.",
      "Relational integrity preventing table collisions on identical date and time slot tuples."
    ],
    githubUrl: "https://github.com/prernashergar-sketch",
    schemaDetails: {
      description: "Normalized MySQL schema holding dining tables, shift timings, customer profiles, and active reservations with unique collision constraints.",
      sqlSnippet: `CREATE TABLE dining_tables (
    table_id INT PRIMARY KEY AUTO_INCREMENT,
    table_number VARCHAR(10) UNIQUE NOT NULL,
    capacity INT NOT NULL,
    location_zone ENUM('Indoors', 'Patio', 'Rooftop', 'Private Dining') NOT NULL
);

CREATE TABLE reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    customer_phone VARCHAR(20) NOT NULL,
    party_size INT NOT NULL,
    table_id INT NOT NULL,
    reservation_date DATE NOT NULL,
    time_slot VARCHAR(20) NOT NULL,
    special_requests TEXT,
    status ENUM('CONFIRMED', 'SEATED', 'CANCELLED') DEFAULT 'CONFIRMED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (table_id) REFERENCES dining_tables(table_id),
    UNIQUE KEY unique_table_slot (table_id, reservation_date, time_slot)
);`,
      tables: ["dining_tables", "reservations", "time_slots"]
    },
    features: [
      "Real-time dining table availability checker across morning, lunch, and dinner slots",
      "Dynamic table filtering by seating area (Rooftop, Patio, Indoors, Private Dining)",
      "Instant reservation confirmation with unique reservation reference ID",
      "Party size validation ensuring table capacity limits are respected",
      "Special dietary preference logging"
    ]
  },
  {
    id: "personal-expense-tracker",
    title: "Personal Expense Tracker",
    category: "Data & Database",
    tagline: "Categorized ledger system and monthly cash-flow analytics dashboard",
    description: "A personal finance management web application that records incoming revenue and expenditures, categorizes spending behaviors, computes net savings rates, and renders visual summaries for financial tracking.",
    technologies: ["JavaScript", "Supabase", "React.js", "CSS3", "HTML5"],
    metrics: [
      { label: "Ledger Categories", value: "6 Types" },
      { label: "Net Calculation", value: "Real-Time" },
      { label: "Storage", value: "Cloud / Local" }
    ],
    highlights: [
      "Streamlined transaction logging with income vs. expense distinction and timestamping.",
      "Dynamic categorical breakdown analyzing expenditure in Food, Education, Commute, and Utilities.",
      "Running net balance aggregation alerting users when monthly spending surpasses budget thresholds.",
      "Interactive transaction filtering by month, category, and minimum amount."
    ],
    githubUrl: "https://github.com/prernashergar-sketch",
    schemaDetails: {
      description: "Supabase / PostgreSQL data model with transaction classification, user foreign key, and category enum constraints.",
      sqlSnippet: `CREATE TABLE expense_categories (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    color_code VARCHAR(10) NOT NULL
);

CREATE TABLE transactions (
    transaction_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(120) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('INCOME', 'EXPENSE')),
    category VARCHAR(50) NOT NULL,
    transaction_date DATE NOT NULL DEFAULT CURRENT_DATE,
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytical aggregation view
CREATE VIEW monthly_spending_summary AS
SELECT 
    category,
    SUM(amount) AS total_spent,
    COUNT(*) AS transaction_count
FROM transactions
WHERE type = 'EXPENSE'
GROUP BY category;`,
      tables: ["transactions", "expense_categories", "monthly_spending_summary"]
    },
    features: [
      "Quick transaction modal with automated date capture and category classification",
      "Visual budget progress indicator showing spent vs remaining balance",
      "Interactive category breakdown bar and percentage distribution",
      "Searchable history log with one-click deletion and category filtering",
      "Export summary snapshot for monthly student bookkeeping"
    ]
  },
  {
    id: "wanderlust-travel",
    title: "Wanderlust Travel",
    category: "Web Apps",
    tagline: "Destination exploration portal and dynamic trip itinerary builder",
    description: "A responsive travel discovery application offering curated destination guides, day-by-day travel planners, budget calculators, and booking inquiry workflows designed for experiential explorers.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Git"],
    metrics: [
      { label: "Destinations", value: "Curated Guides" },
      { label: "Itinerary Planner", value: "Dynamic Days" },
      { label: "Design", value: "Responsive" }
    ],
    highlights: [
      "Curated travel packages featuring high-contrast itineraries, estimated costs, and best travel seasons.",
      "Interactive multi-day trip planner calculating estimated flight, lodging, and activity costs.",
      "Responsive card grid displaying regional attractions, difficulty ratings, and recommended gear.",
      "Inquiry and contact pipeline connecting travelers with personalized trip planning details."
    ],
    githubUrl: "https://github.com/prernashergar-sketch",
    schemaDetails: {
      description: "Normalized travel destination data structure capturing daily itineraries, lodging estimates, and customer inquiry queues.",
      sqlSnippet: `CREATE TABLE destinations (
    dest_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(60) NOT NULL,
    climate VARCHAR(50) NOT NULL,
    estimated_daily_cost DECIMAL(8, 2) NOT NULL,
    recommended_days INT NOT NULL
);

CREATE TABLE trip_itineraries (
    itinerary_id INT PRIMARY KEY AUTO_INCREMENT,
    dest_id INT NOT NULL,
    day_number INT NOT NULL,
    activity_title VARCHAR(150) NOT NULL,
    activity_cost DECIMAL(8, 2) DEFAULT 0.00,
    FOREIGN KEY (dest_id) REFERENCES destinations(dest_id)
);

CREATE TABLE travel_inquiries (
    inquiry_id INT PRIMARY KEY AUTO_INCREMENT,
    dest_id INT NOT NULL,
    traveler_name VARCHAR(100) NOT NULL,
    traveler_email VARCHAR(100) NOT NULL,
    travel_date DATE NOT NULL,
    group_size INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);`,
      tables: ["destinations", "trip_itineraries", "travel_inquiries"]
    },
    features: [
      "Filterable destination catalog (Mountain Escapes, Coastal Retreats, Cultural Capitals)",
      "Interactive Trip Budget Estimator calculating per-person costs based on days and group size",
      "Day-by-day itinerary view with activities, timings, and packing recommendations",
      "Interactive inquiry form with validated dates and traveler details"
    ]
  },
  {
    id: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Apps",
    tagline: "Architectural developer portfolio built with the Obsidian Precision design system",
    description: "The very portfolio you are browsing: an ultra-clean, engineering-grade web application built to exhibit technical proficiency in data engineering, database schemas, and frontend architectures.",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "Git", "GitHub"],
    metrics: [
      { label: "Design System", value: "Obsidian Precision" },
      { label: "Lighthouse Score", value: "99+" },
      { label: "Accessibility", value: "WCAG AA" }
    ],
    highlights: [
      "Built with strict Obsidian Precision design guidelines: deep navy canvas (#0B1120), hairline cyan borders, and electric blue accents.",
      "Contains interactive SQL query playgrounds and live simulators for all personal projects.",
      "Fully responsive across mobile, tablet, and desktop viewports with 44px+ touch targets.",
      "Zero AI-slop compliance: no generic pills, no mechanical prefixes, unboxed metadata."
    ],
    githubUrl: "https://github.com/prernashergar-sketch",
    liveDemoUrl: "#",
    schemaDetails: {
      description: "Frontend architectural state model managing project filtering, modal dialogs, interactive query executions, and contact validations.",
      sqlSnippet: `// Portfolio data model representation
interface PortfolioState {
  activeSection: string;
  selectedProject: Project | null;
  activeFilter: 'All' | 'Full Stack' | 'Data & Database' | 'Web Apps';
  resumeModalOpen: boolean;
  contactFormState: 'IDLE' | 'SUBMITTING' | 'SUCCESS' | 'ERROR';
}`,
      tables: ["projects", "skills", "education", "experience"]
    },
    features: [
      "Interactive project simulation modals with functional business logic",
      "Interactive Data Engineering terminal executing live SQL and Python scripts",
      "Filterable technical skills matrix with practical code previews",
      "Clean printable/viewable academic Resume modal with coursework details",
      "Direct email and social integration with copy-to-clipboard feedback"
    ]
  }
];

export const DATA_ENGINEERING_QUERIES = [
  {
    id: "sql-analytics",
    title: "IPL Revenue & Occupancy Analytical Query",
    language: "sql",
    description: "Multi-table relational aggregation analyzing ticket revenue, stand occupancy rate, and average ticket price by fixture.",
    code: `SELECT 
    m.match_id,
    CONCAT(m.team_home, ' vs ', m.team_away) AS fixture,
    s.stand_name,
    COUNT(b.booking_id) AS total_tickets_sold,
    s.capacity AS total_stand_capacity,
    ROUND((COUNT(b.booking_id) / s.capacity) * 100, 2) AS occupancy_rate_pct,
    SUM(b.amount_paid) AS gross_revenue
FROM matches m
JOIN stadium_stands s ON 1=1
LEFT JOIN seats st ON s.stand_id = st.stand_id
LEFT JOIN bookings b ON st.seat_id = b.seat_id AND b.match_id = m.match_id
WHERE m.match_id = 101
GROUP BY m.match_id, fixture, s.stand_id, s.stand_name, s.capacity
ORDER BY gross_revenue DESC;`,
    output: [
      { fixture: "RCB vs CSK", stand_name: "Pavilion Terrace", tickets_sold: 450, capacity: 500, occupancy: "90.00%", revenue: "₹1,575,000" },
      { fixture: "RCB vs CSK", stand_name: "VIP Lounge", tickets_sold: 280, capacity: 300, occupancy: "93.33%", revenue: "₹1,400,000" },
      { fixture: "RCB vs CSK", stand_name: "East Stand", tickets_sold: 1980, capacity: 2000, occupancy: "99.00%", revenue: "₹1,980,000" },
      { fixture: "RCB vs CSK", stand_name: "West Stand", tickets_sold: 1950, capacity: 2000, occupancy: "97.50%", revenue: "₹1,950,000" }
    ]
  },
  {
    id: "python-etl",
    title: "Python Data Pipeline: Expense Extraction & Anomaly Detection",
    language: "python",
    description: "Automated ETL routine reading raw JSON transaction payloads, enforcing schema typing, and detecting outlier spending spikes.",
    code: `import json
from datetime import datetime

def transform_and_flag_expenses(raw_records, threshold=5000):
    cleaned_records = []
    anomalies = []
    
    for item in raw_records:
        try:
            amount = float(item.get("amount", 0))
            category = str(item.get("category", "General")).strip().capitalize()
            date_parsed = datetime.strptime(item.get("date"), "%Y-%m-%d").date()
            
            record = {
                "id": item["id"],
                "category": category,
                "amount": amount,
                "date": str(date_parsed),
                "is_anomaly": amount > threshold
            }
            cleaned_records.append(record)
            if record["is_anomaly"]:
                anomalies.append(record)
        except (ValueError, KeyError) as e:
            continue
            
    return {
        "processed_count": len(cleaned_records),
        "total_volume": sum(r["amount"] for r in cleaned_records),
        "flagged_anomalies": anomalies
    }`,
    output: [
      { metric: "Processed Records", value: "248 items" },
      { metric: "Data Validation Rate", value: "100.0% clean" },
      { metric: "Flagged High-Value Spikes", value: "2 transactions (> ₹5,000)" },
      { metric: "Status", value: "Pipeline Execution: SUCCESS" }
    ]
  },
  {
    id: "restaurant-concurrency",
    title: "Restaurant Table Collision & Slot Reservation Lock",
    language: "sql",
    description: "Transaction-safe SQL query ensuring no table is reserved twice for conflicting reservation time slots.",
    code: `START TRANSACTION;

-- Step 1: Check if requested table has existing reservations in target slot
SELECT COUNT(*) INTO @existing_conflict
FROM reservations
WHERE table_id = 4
  AND reservation_date = '2026-11-05'
  AND time_slot = '19:30 - 21:00'
  AND status = 'CONFIRMED'
FOR UPDATE;

-- Step 2: Conditionally insert only if conflict count equals zero
INSERT INTO reservations (customer_name, customer_phone, party_size, table_id, reservation_date, time_slot, status)
SELECT 'Rohan Verma', '+91 98765 43210', 4, 4, '2026-11-05', '19:30 - 21:00', 'CONFIRMED'
WHERE @existing_conflict = 0;

COMMIT;`,
    output: [
      { status: "TRANSACTION COMMITTED", lock_status: "ACID ISOLATION GRANTED", tables_affected: "1 row inserted" }
    ]
  }
];
