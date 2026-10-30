import React, { useState } from 'react';
import { CheckCircle2, Ticket, Utensils, Wallet, Compass, Layers, ShieldCheck, RefreshCw, Calendar, Clock, Users, ArrowRight, DollarSign, MapPin } from 'lucide-react';

// ==========================================
// 1. IPL TICKET BOOKING SIMULATOR
// ==========================================
export const IPLBookingSimulator: React.FC = () => {
  const matches = [
    { id: 1, home: "Royal Challengers Bengaluru", away: "Chennai Super Kings", venue: "M. Chinnaswamy Stadium, Bengaluru", date: "May 14, 2026 · 19:30 IST" },
    { id: 2, home: "Mumbai Indians", away: "Kolkata Knight Riders", venue: "Wankhede Stadium, Mumbai", date: "May 18, 2026 · 19:30 IST" }
  ];

  const stands = [
    { id: "vip", name: "VIP Lounge", price: 5000, desc: "Prime hospitality view & lounge access" },
    { id: "pavilion", name: "Pavilion Terrace", price: 3500, desc: "Elevated mid-wicket perspective" },
    { id: "east", name: "East Stand Tier 1", price: 1200, desc: "High energy supporters stand" },
    { id: "west", name: "West Stand Tier 2", price: 1000, desc: "Direct bowler arm angle" }
  ];

  const [selectedMatch, setSelectedMatch] = useState(matches[0]);
  const [selectedStand, setSelectedStand] = useState(stands[1]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>(["P-12", "P-13"]);
  const [customerName, setCustomerName] = useState("Aditya Rao");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState("IPL-RCB-84920");

  const bookedSeats = ["P-01", "P-02", "P-08", "P-09", "P-17"];

  const toggleSeat = (seatId: string) => {
    if (bookedSeats.includes(seatId)) return;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatId));
    } else {
      if (selectedSeats.length >= 4) {
        alert("Maximum 4 tickets per booking transaction.");
        return;
      }
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const subtotal = selectedSeats.length * selectedStand.price;
  const gst = Math.round(subtotal * 0.18);
  const grandTotal = subtotal + gst;

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }
    const generatedId = `IPL-RCB-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingId(generatedId);
    setBookingConfirmed(true);
  };

  return (
    <div className="space-y-6 text-sm">
      {/* Simulation Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#38BDF8]/15">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono">Live Relational Booking Simulator</span>
          <h4 className="text-base font-semibold text-[#F8FAFC]">M. Chinnaswamy Stadium Ticketing Engine</h4>
        </div>
        <span className="text-xs font-mono text-[#94A3B8] px-2 py-1 bg-[#1E293B] rounded border border-white/5">
          ACID Isolation: Active
        </span>
      </div>

      {!bookingConfirmed ? (
        <form onSubmit={handleConfirm} className="space-y-5">
          {/* Match Selection */}
          <div>
            <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase font-mono">1. Select Fixture</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {matches.map(m => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setSelectedMatch(m)}
                  className={`text-left p-3 rounded-lg border transition-all ${
                    selectedMatch.id === m.id
                      ? 'border-[#38BDF8] bg-[#1E293B] text-[#F8FAFC]'
                      : 'border-white/10 bg-[#0B1120] text-[#94A3B8] hover:border-white/20'
                  }`}
                >
                  <p className="font-semibold text-xs text-[#38BDF8]">{m.home} vs {m.away}</p>
                  <p className="text-[11px] text-[#94A3B8] mt-1">{m.venue}</p>
                  <p className="text-[10px] text-[#64748B] mt-0.5 font-mono">{m.date}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Stand Selection */}
          <div>
            <label className="block text-xs font-medium text-[#94A3B8] mb-1.5 uppercase font-mono">2. Select Stand Category</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {stands.map(s => (
                <button
                  type="button"
                  key={s.id}
                  onClick={() => {
                    setSelectedStand(s);
                    setSelectedSeats([]);
                  }}
                  className={`text-left p-2.5 rounded-lg border transition-all ${
                    selectedStand.id === s.id
                      ? 'border-[#38BDF8] bg-[#1E293B] text-[#F8FAFC]'
                      : 'border-white/10 bg-[#0B1120] text-[#94A3B8] hover:border-white/20'
                  }`}
                >
                  <p className="font-semibold text-xs text-[#F8FAFC] truncate">{s.name}</p>
                  <p className="text-xs text-[#38BDF8] font-mono mt-1 font-semibold">₹{s.price.toLocaleString()}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Stadium Seat Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-[#94A3B8] uppercase font-mono">
                3. Choose Seats ({selectedSeats.length} selected, max 4)
              </label>
              <div className="flex items-center gap-3 text-[11px] text-[#94A3B8]">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#1E293B] border border-white/20 inline-block"></span> Available</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#3B82F6] inline-block"></span> Selected</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-[#334155] inline-block opacity-40"></span> Booked</span>
              </div>
            </div>

            {/* Stadium Pitch Indicator */}
            <div className="p-3 bg-[#080E1D] rounded-lg border border-white/5 space-y-3">
              <div className="w-full py-1 bg-emerald-950/40 border border-emerald-500/20 text-center rounded text-[10px] font-mono text-emerald-400">
                BOUNDARY ROPE / PITCH DIRECTION
              </div>

              {/* Grid of 20 seats in this stand tier */}
              <div className="grid grid-cols-10 gap-1.5 sm:gap-2 justify-items-center py-2">
                {Array.from({ length: 20 }, (_, i) => {
                  const seatNumber = `P-${String(i + 1).padStart(2, '0')}`;
                  const isBooked = bookedSeats.includes(seatNumber);
                  const isSelected = selectedSeats.includes(seatNumber);

                  return (
                    <button
                      type="button"
                      key={seatNumber}
                      onClick={() => toggleSeat(seatNumber)}
                      disabled={isBooked}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded text-[10px] font-mono flex items-center justify-center transition-all ${
                        isBooked
                          ? 'bg-[#1E293B]/40 text-[#475569] cursor-not-allowed border border-transparent'
                          : isSelected
                          ? 'bg-[#3B82F6] text-white font-bold shadow-md shadow-blue-500/30 scale-105'
                          : 'bg-[#1E293B] text-[#94A3B8] border border-white/10 hover:border-[#38BDF8] hover:text-white'
                      }`}
                      title={isBooked ? `Seat ${seatNumber} (Sold Out)` : `Seat ${seatNumber} (₹${selectedStand.price})`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Customer Input & Pricing Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono uppercase">Ticket Holder Name</label>
              <input
                type="text"
                required
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full px-3 py-2 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8]"
                placeholder="Enter full name"
              />
            </div>
            <div className="p-3 bg-[#0B1120] rounded-lg border border-white/10 flex flex-col justify-between">
              <div className="flex justify-between text-xs text-[#94A3B8]">
                <span>Tickets ({selectedSeats.length}):</span>
                <span className="font-mono text-[#F8FAFC]">₹{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs text-[#94A3B8] mt-1">
                <span>GST (18%):</span>
                <span className="font-mono text-[#F8FAFC]">₹{gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#38BDF8] mt-2 pt-2 border-t border-white/10">
                <span>Total Amount:</span>
                <span className="font-mono text-base text-[#38BDF8]">₹{grandTotal.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={selectedSeats.length === 0}
            className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg text-xs transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <Ticket className="w-4 h-4" />
            Lock Seats & Confirm Booking (₹{grandTotal.toLocaleString()})
          </button>
        </form>
      ) : (
        /* Confirmed Ticket Receipt Card */
        <div className="p-5 bg-[#080E1D] border border-emerald-500/30 rounded-xl space-y-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <h5 className="font-semibold text-white text-base">Booking Confirmed & Seats Locked</h5>
              <p className="text-xs text-[#94A3B8] font-mono">Ref ID: {bookingId} · Transaction ACID Validated</p>
            </div>
          </div>

          <div className="p-4 bg-[#0F172A] border border-white/10 rounded-lg space-y-3 font-mono text-xs">
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#94A3B8]">Match:</span>
              <span className="text-[#F8FAFC] font-semibold">{selectedMatch.home} vs {selectedMatch.away}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#94A3B8]">Venue:</span>
              <span className="text-[#F8FAFC]">{selectedMatch.venue}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#94A3B8]">Stand & Tier:</span>
              <span className="text-[#38BDF8] font-semibold">{selectedStand.name}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#94A3B8]">Seats Allocated:</span>
              <span className="text-emerald-400 font-bold">{selectedSeats.join(', ')}</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-white/5">
              <span className="text-[#94A3B8]">Customer:</span>
              <span className="text-[#F8FAFC]">{customerName}</span>
            </div>
            <div className="flex justify-between pt-1 text-sm font-semibold">
              <span className="text-[#94A3B8]">Total Paid (Incl. GST):</span>
              <span className="text-[#38BDF8]">₹{grandTotal.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => {
                setBookingConfirmed(false);
                setSelectedSeats(["P-14"]);
              }}
              className="px-4 py-2 text-xs text-[#94A3B8] hover:text-white border border-white/10 rounded-lg hover:bg-[#1E293B] transition-colors flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Book Another Match
            </button>
            <span className="text-[11px] text-[#64748B] font-mono">
              Database Row Status: COMMITTED
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 2. PERSONAL EXPENSE TRACKER SIMULATOR
// ==========================================
export const ExpenseTrackerSimulator: React.FC = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Internship Stipend", amount: 15000, type: "INCOME", category: "Earnings", date: "2026-10-15" },
    { id: 2, title: "DBMS Textbook & Lab Manual", amount: 1200, type: "EXPENSE", category: "College", date: "2026-10-18" },
    { id: 3, title: "Metro Pass (REVA Campus)", amount: 950, type: "EXPENSE", category: "Commute", date: "2026-10-20" },
    { id: 4, title: "Hostel Mess & Cafe", amount: 2400, type: "EXPENSE", category: "Food", date: "2026-10-24" },
    { id: 5, title: "Cloud DB Subscription (Supabase)", amount: 650, type: "EXPENSE", category: "Tech", date: "2026-10-27" }
  ]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"EXPENSE" | "INCOME">("EXPENSE");
  const [category, setCategory] = useState("Food");

  const categories = ["Food", "College", "Commute", "Tech", "Earnings", "Other"];

  const totalIncome = transactions
    .filter(t => t.type === "INCOME")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "EXPENSE")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netSavings = totalIncome - totalExpense;

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !amount || Number(amount) <= 0) return;

    const newTx = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      type,
      category: type === "INCOME" ? "Earnings" : category,
      date: new Date().toISOString().split('T')[0]
    };

    setTransactions([newTx, ...transactions]);
    setTitle("");
    setAmount("");
  };

  const handleDelete = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#38BDF8]/15">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono">Live Ledger & Analytics</span>
          <h4 className="text-base font-semibold text-[#F8FAFC]">Personal Financial Health Dashboard</h4>
        </div>
        <span className="text-xs font-mono text-emerald-400 px-2 py-1 bg-emerald-950/30 rounded border border-emerald-500/20">
          Supabase Sync: Active
        </span>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="p-3 bg-[#080E1D] border border-white/10 rounded-lg">
          <p className="text-[11px] text-[#94A3B8] font-mono uppercase">Total Income</p>
          <p className="text-base font-bold text-emerald-400 font-mono mt-1">₹{totalIncome.toLocaleString()}</p>
        </div>
        <div className="p-3 bg-[#080E1D] border border-white/10 rounded-lg">
          <p className="text-[11px] text-[#94A3B8] font-mono uppercase">Total Expenses</p>
          <p className="text-base font-bold text-rose-400 font-mono mt-1">₹{totalExpense.toLocaleString()}</p>
        </div>
        <div className="p-3 bg-[#080E1D] border border-white/10 rounded-lg">
          <p className="text-[11px] text-[#94A3B8] font-mono uppercase">Net Savings</p>
          <p className={`text-base font-bold font-mono mt-1 ${netSavings >= 0 ? 'text-[#38BDF8]' : 'text-rose-400'}`}>
            ₹{netSavings.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Quick Add Form */}
      <form onSubmit={handleAdd} className="p-4 bg-[#080E1D] border border-white/10 rounded-lg space-y-3">
        <span className="text-xs font-semibold text-[#F8FAFC]">Quick Transaction Entry</span>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
          <input
            type="text"
            required
            placeholder="Title (e.g., Python Course)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="sm:col-span-2 px-3 py-2 bg-[#0F172A] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8]"
          />
          <input
            type="number"
            required
            placeholder="Amount (₹)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-3 py-2 bg-[#0F172A] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8]"
          />
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setType("EXPENSE")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                type === "EXPENSE" ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40' : 'bg-[#0F172A] text-[#94A3B8]'
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setType("INCOME")}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors ${
                type === "INCOME" ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-[#0F172A] text-[#94A3B8]'
              }`}
            >
              Income
            </button>
          </div>
        </div>

        {type === "EXPENSE" && (
          <div className="flex items-center gap-2 pt-1 overflow-x-auto">
            <span className="text-[11px] text-[#94A3B8] font-mono shrink-0">Category:</span>
            {categories.filter(c => c !== "Earnings").map(cat => (
              <button
                type="button"
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-2.5 py-1 text-[11px] rounded transition-colors shrink-0 ${
                  category === cat
                    ? 'bg-[#38BDF8] text-[#0B1120] font-semibold'
                    : 'bg-[#0F172A] text-[#94A3B8] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold rounded-lg transition-all"
        >
          Append Record to Database
        </button>
      </form>

      {/* Transaction Records List */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs font-mono text-[#94A3B8]">
          <span>RECENT LEDGER TRANSACTIONS ({transactions.length})</span>
          <span>AUTOSAVED</span>
        </div>
        <div className="max-h-48 overflow-y-auto space-y-1.5 pr-1">
          {transactions.map(t => (
            <div key={t.id} className="p-2.5 bg-[#080E1D] border border-white/5 rounded-lg flex items-center justify-between hover:border-white/15 transition-all text-xs">
              <div className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${t.type === "INCOME" ? 'bg-emerald-400' : 'bg-rose-400'}`}></span>
                <div>
                  <p className="font-medium text-[#F8FAFC]">{t.title}</p>
                  <p className="text-[10px] text-[#64748B] font-mono">{t.category} · {t.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`font-mono font-semibold ${t.type === "INCOME" ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {t.type === "INCOME" ? "+" : "-"}₹{t.amount.toLocaleString()}
                </span>
                <button
                  type="button"
                  onClick={() => handleDelete(t.id)}
                  className="text-xs text-[#64748B] hover:text-rose-400 px-1.5 py-0.5 rounded hover:bg-rose-950/30"
                  title="Delete transaction"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. RESTAURANT RESERVATION SIMULATOR
// ==========================================
export const RestaurantReservationSimulator: React.FC = () => {
  const [partySize, setPartySize] = useState(4);
  const [diningDate, setDiningDate] = useState("2026-11-02");
  const [timeSlot, setTimeSlot] = useState("19:30 - 21:00 (Dinner)");
  const [selectedTable, setSelectedTable] = useState<number | null>(3);
  const [guestName, setGuestName] = useState("Priya Nair");
  const [confirmed, setConfirmed] = useState(false);
  const [resId, setResId] = useState("RES-8291");

  const tables = [
    { id: 1, name: "Table 1 (Window Booth)", capacity: 2, zone: "Window Alcove", status: "Available" },
    { id: 2, name: "Table 2 (Indoor Center)", capacity: 4, zone: "Main Dining", status: "Booked" },
    { id: 3, name: "Table 3 (Sky Garden)", capacity: 4, zone: "Rooftop Garden", status: "Available" },
    { id: 4, name: "Table 4 (Chef's Counter)", capacity: 6, zone: "Culinary Bar", status: "Available" },
    { id: 5, name: "Table 5 (Executive Suite)", capacity: 8, zone: "Private Dining", status: "Available" }
  ];

  const slots = [
    "12:30 - 14:00 (Lunch)",
    "14:00 - 15:30 (Lunch)",
    "19:00 - 20:30 (Dinner)",
    "19:30 - 21:00 (Dinner)",
    "21:00 - 22:30 (Dinner)"
  ];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTable) {
      alert("Please select an available dining table.");
      return;
    }
    setResId(`RES-${Math.floor(1000 + Math.random() * 9000)}`);
    setConfirmed(true);
  };

  const currentTable = tables.find(t => t.id === selectedTable);

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#38BDF8]/15">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono">Table Capacity & Collision Engine</span>
          <h4 className="text-base font-semibold text-[#F8FAFC]">Restaurant Reservation System</h4>
        </div>
        <span className="text-xs font-mono text-[#38BDF8] px-2 py-1 bg-[#1E293B] rounded border border-white/5">
          MySQL Unique Constraint Enforced
        </span>
      </div>

      {!confirmed ? (
        <form onSubmit={handleBook} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono uppercase">Reservation Date</label>
              <input
                type="date"
                value={diningDate}
                onChange={(e) => setDiningDate(e.target.value)}
                className="w-full px-3 py-2 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono uppercase">Time Slot</label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full px-3 py-2 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8]"
              >
                {slots.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono uppercase">Guests: {partySize} People</label>
              <input
                type="range"
                min="1"
                max="8"
                value={partySize}
                onChange={(e) => setPartySize(Number(e.target.value))}
                className="w-full mt-2 accent-[#38BDF8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#94A3B8] mb-2 font-mono uppercase">
              Select Suitable Table (Matches capacity $\ge$ {partySize} guests)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tables.map(table => {
                const fits = table.capacity >= partySize;
                const isBooked = table.status === "Booked";
                const isSelected = selectedTable === table.id;

                return (
                  <button
                    type="button"
                    key={table.id}
                    disabled={!fits || isBooked}
                    onClick={() => setSelectedTable(table.id)}
                    className={`p-3 rounded-lg border text-left transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#1E293B] border-[#38BDF8] shadow-md shadow-blue-500/10'
                        : !fits || isBooked
                        ? 'bg-[#080E1D]/50 border-white/5 opacity-40 cursor-not-allowed'
                        : 'bg-[#080E1D] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <p className="font-semibold text-xs text-white">{table.name}</p>
                      <p className="text-[11px] text-[#94A3B8] mt-0.5">{table.zone} · Up to {table.capacity} guests</p>
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                      isBooked ? 'bg-rose-950/40 text-rose-400' : !fits ? 'bg-amber-950/40 text-amber-400' : 'bg-emerald-950/40 text-emerald-400'
                    }`}>
                      {isBooked ? 'Reserved' : !fits ? 'Too Small' : 'Available'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-[#94A3B8] mb-1 font-mono uppercase">Primary Guest Contact</label>
            <input
              type="text"
              required
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              placeholder="Guest full name"
              className="w-full px-3 py-2 bg-[#080E1D] border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-[#38BDF8]"
            />
          </div>

          <button
            type="submit"
            disabled={!selectedTable}
            className="w-full py-3 bg-[#3B82F6] hover:bg-[#2563EB] disabled:opacity-50 text-white font-semibold rounded-lg text-xs transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
          >
            <Utensils className="w-4 h-4" />
            Reserve Dining Table ({partySize} Guests)
          </button>
        </form>
      ) : (
        <div className="p-5 bg-[#080E1D] border border-emerald-500/30 rounded-xl space-y-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <h5 className="font-semibold text-white text-base">Dining Reservation Confirmed</h5>
              <p className="text-xs text-[#94A3B8] font-mono">Reference: {resId} · Table Collision Checked</p>
            </div>
          </div>

          <div className="p-4 bg-[#0F172A] border border-white/10 rounded-lg space-y-2.5 font-mono text-xs">
            <div className="flex justify-between pb-1.5 border-b border-white/5">
              <span className="text-[#94A3B8]">Guest:</span>
              <span className="text-white font-semibold">{guestName}</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-white/5">
              <span className="text-[#94A3B8]">Table Assigned:</span>
              <span className="text-[#38BDF8] font-bold">{currentTable?.name}</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-white/5">
              <span className="text-[#94A3B8]">Date & Slot:</span>
              <span className="text-white">{diningDate} · {timeSlot}</span>
            </div>
            <div className="flex justify-between pb-1.5 border-b border-white/5">
              <span className="text-[#94A3B8]">Party Size:</span>
              <span className="text-white">{partySize} Guests</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-[#94A3B8]">Status:</span>
              <span className="text-emerald-400 font-bold">SEATING RESERVED</span>
            </div>
          </div>

          <button
            onClick={() => setConfirmed(false)}
            className="w-full py-2 text-xs text-[#94A3B8] hover:text-white border border-white/10 rounded-lg hover:bg-[#1E293B] transition-colors"
          >
            Make Another Reservation
          </button>
        </div>
      )}
    </div>
  );
};

// ==========================================
// 4. WANDERLUST TRAVEL SIMULATOR
// ==========================================
export const WanderlustTravelSimulator: React.FC = () => {
  const destinations = [
    {
      id: "manali",
      name: "Manali & Solang Valley",
      location: "Himachal Pradesh, India",
      tag: "Alpine Pass",
      baseDailyCost: 2800,
      days: 5,
      highlights: ["Rohtang Pass Trek", "Paragliding", "Hot Springs", "Old Manali Cafes"]
    },
    {
      id: "goa",
      name: "Goa Coastal Haven",
      location: "Goa, India",
      tag: "Tropical Coastal",
      baseDailyCost: 3500,
      days: 4,
      highlights: ["Vagator Sunset", "Spice Plantations", "Heritage Churches", "Water Sports"]
    },
    {
      id: "kyoto",
      name: "Kyoto Ancient Gardens",
      location: "Japan",
      tag: "Cultural Monograph",
      baseDailyCost: 8500,
      days: 6,
      highlights: ["Fushimi Inari Shrine", "Bamboo Grove", "Tea Ceremony", "Gion District"]
    }
  ];

  const [selectedDest, setSelectedDest] = useState(destinations[0]);
  const [travelers, setTravelers] = useState(2);
  const [duration, setDuration] = useState(5);
  const [tier, setTier] = useState<"standard" | "comfort">("standard");

  const dailyMultiplier = tier === "comfort" ? 1.4 : 1.0;
  const perPersonCost = Math.round(selectedDest.baseDailyCost * duration * dailyMultiplier);
  const totalTripCost = perPersonCost * travelers;

  return (
    <div className="space-y-6 text-sm">
      <div className="flex items-center justify-between pb-3 border-b border-[#38BDF8]/15">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#38BDF8] font-mono">Itinerary & Budget Engine</span>
          <h4 className="text-base font-semibold text-[#F8FAFC]">Wanderlust Travel Planner</h4>
        </div>
        <span className="text-xs font-mono text-[#38BDF8] px-2 py-1 bg-[#1E293B] rounded border border-white/5">
          Dynamic Day Estimator
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {destinations.map(d => (
          <button
            type="button"
            key={d.id}
            onClick={() => {
              setSelectedDest(d);
              setDuration(d.days);
            }}
            className={`p-3 rounded-lg border text-left transition-all ${
              selectedDest.id === d.id
                ? 'bg-[#1E293B] border-[#38BDF8] text-white shadow-md shadow-blue-500/10'
                : 'bg-[#080E1D] border-white/10 text-[#94A3B8] hover:border-white/20'
            }`}
          >
            <span className="text-[10px] font-mono uppercase text-[#38BDF8]">{d.tag}</span>
            <p className="font-semibold text-xs text-white mt-0.5">{d.name}</p>
            <p className="text-[11px] text-[#94A3B8]">{d.location}</p>
          </button>
        ))}
      </div>

      {/* Sliders & Tier Controls */}
      <div className="p-4 bg-[#080E1D] border border-white/10 rounded-lg space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-[#94A3B8]">TRIP DURATION:</span>
              <span className="text-[#38BDF8] font-bold">{duration} Days</span>
            </div>
            <input
              type="range"
              min="3"
              max="10"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full accent-[#38BDF8]"
            />
          </div>
          <div>
            <div className="flex justify-between text-xs font-mono mb-1">
              <span className="text-[#94A3B8]">TRAVELERS:</span>
              <span className="text-[#38BDF8] font-bold">{travelers} Guests</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={travelers}
              onChange={(e) => setTravelers(Number(e.target.value))}
              className="w-full accent-[#38BDF8]"
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span className="text-xs text-[#94A3B8] font-mono uppercase">Travel Style:</span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setTier("standard")}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                tier === "standard" ? 'bg-[#38BDF8] text-[#0B1120] font-semibold' : 'bg-[#0F172A] text-[#94A3B8]'
              }`}
            >
              Standard Explorer
            </button>
            <button
              type="button"
              onClick={() => setTier("comfort")}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                tier === "comfort" ? 'bg-[#38BDF8] text-[#0B1120] font-semibold' : 'bg-[#0F172A] text-[#94A3B8]'
              }`}
            >
              Comfort Boutique (+40%)
            </button>
          </div>
        </div>
      </div>

      {/* Itinerary & Financial Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="p-3 bg-[#080E1D] border border-white/10 rounded-lg space-y-2">
          <p className="text-xs font-semibold text-white font-mono uppercase">Curated Itinerary Focus</p>
          <ul className="space-y-1.5 text-xs text-[#94A3B8]">
            {selectedDest.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-mono text-[11px]">0{i+1}.</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3 bg-[#080E1D] border border-[#38BDF8]/20 rounded-lg flex flex-col justify-between font-mono">
          <div>
            <p className="text-xs text-[#94A3B8] uppercase">Estimated Budget</p>
            <div className="mt-2 space-y-1 text-xs">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Per Traveler ({duration}d):</span>
                <span className="text-white">₹{perPersonCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#94A3B8]">
                <span>Total for {travelers} Pax:</span>
                <span className="text-[#38BDF8] text-base font-bold">₹{totalTripCost.toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="text-[10px] text-[#64748B] pt-2 border-t border-white/5">
            Includes estimated lodging, food, inner transfers & sightseeing permits.
          </div>
        </div>
      </div>
    </div>
  );
};
