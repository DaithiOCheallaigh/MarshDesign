// Concept 6 — Assignment Requirements (Member-First)
// All user flows and component variations. Inline styles only.

import React from "react";

// ── Asset paths (served from public/) ────────────────────────────────────────
const imgLogoCp          = "/assets/logo-cp.svg";
const imgAvatarCircle    = "/assets/avatar-circle.svg";
const imgIconDashboard   = "/assets/icon-dashboard.svg";
const imgIconTeamAssign  = "/assets/icon-team-assignment.svg";
const imgIconWorkQueue   = "/assets/icon-work-queue.svg";
const imgIconTeamSetup   = "/assets/icon-team-setup.svg";
const imgIconBackHome    = "/assets/icon-back-home.svg";
const imgIconBackTop     = "/assets/icon-back-top.svg";
const imgMarshLogo       = "/assets/marsh-logo-white.png";
const imgIconClock       = "/assets/icon-clock.svg";
const imgIconSearch      = "/assets/icon-search.svg";

// ── Design tokens ────────────────────────────────────────────────────────────
const C = {
  navy:      "#002c77",
  accent:    "#009de0",
  bg:        "#f8f8f8",
  white:     "#fff",
  border:    "#e2e2e2",
  border2:   "#c4c4c4",
  panelBg:   "#f4f8ff",
  text:      "#222",
  muted:     "#5c5c5c",
  dim:       "#777",
  red:       "#b30000",
  green:     "#008b06",
  greenDark: "#15803d",
  amber:     "#b45309",
  redDark:   "#b91c1c",
  blueDark:  "#1d4ed8",
  placeholder: "#a0a0a0",
  inputBg:   "#fafafa",
  label:     "#555",
  labelDark: "#404040",
  badgeGrey: "#f0f0f0",
  badgeRed:  "#ffe4e3",
  badgeDate: "#e7e7e7",
  badgeGreen: "rgba(175,244,198,0.7)",
  memberBg:  "#e8e8e8",
};

// ── Sample data ──────────────────────────────────────────────────────────────
const MEMBERS = [
  { id: "m1", initials: "SB", name: "Sarah Brennan",    title: "Senior Account Manager", capacity: 75 },
  { id: "m2", initials: "JC", name: "James Collins",    title: "Project Manager",        capacity: 60 },
  { id: "m3", initials: "AC", name: "Aoife Conway",     title: "Product Owner",          capacity: 45 },
  { id: "m4", initials: "TM", name: "Tom Murphy",       title: "Risk Analyst",           capacity: 30 },
  { id: "m5", initials: "EK", name: "Emma Kelly",       title: "Account Executive",      capacity: 20 },
  { id: "m6", initials: "PD", name: "Patrick Daly",     title: "Senior Risk Consultant", capacity: 10 },
];

const ROLES = [
  { id: "r1", name: "Senior Account Manager" },
  { id: "r2", name: "Project Manager" },
  { id: "r3", name: "Risk Analyst" },
];

const NAV = [
  { icon: imgIconDashboard,  label: "Dashboard",          active: false },
  { icon: imgIconTeamAssign, label: "My Team Assignment",  active: false },
  { icon: imgIconWorkQueue,  label: "Work Queue",          active: true },
  { icon: imgIconTeamSetup,  label: "Team Setup",          active: false },
];

const SUB_NAV = [
  { icon: imgIconBackHome, label: "Back to Home" },
  { icon: imgIconBackTop,  label: "Back to Top" },
];

// ── Helpers ──────────────────────────────────────────────────────────────────
function capColor(cap: number) {
  if (cap >= 50) return { bg: "#f0fdf4", text: C.greenDark, border: "#bbf7d0" };
  if (cap >= 20) return { bg: "#fffbeb", text: C.amber,     border: "#fde68a" };
  return              { bg: "#fef2f2", text: C.redDark,    border: "#fecaca" };
}

// ── Shared layout pieces ─────────────────────────────────────────────────────
function Header() {
  return (
    <div style={{
      position: "absolute", left: 37, top: 23, width: 1458, height: 59,
      background: C.white, border: `1px solid ${C.accent}`, borderRadius: 8,
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 14px",
    }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12 }}>
        <img alt="" src={imgLogoCp} style={{ width: 36, height: 22 }} />
        <span style={{ fontWeight: 700, color: C.navy, fontSize: 20 }}>Colleague Profile</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontWeight: 600, color: C.navy, fontSize: 12 }}>Good Morning, [First Name]</span>
        <img alt="" src={imgAvatarCircle} style={{ width: 24, height: 24 }} />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div style={{
      position: "absolute", left: 37, top: 104, width: 295, height: 408,
      backgroundImage: "radial-gradient(ellipse at 50% 110%, #009de0 0%, #0165ac 50%, #014891 75%, #002c77 100%)",
      borderRadius: 8, padding: 16,
      display: "flex", flexDirection: "column",
    }}>
      <div style={{ display: "flex", flexDirection: "column", width: 255 }}>
        {NAV.map(({ icon, label, active }) => (
          <div key={label} style={{
            display: "flex", alignItems: "center", gap: 12,
            height: 48, padding: "0 20px", borderRadius: 8,
            background: active ? C.accent : "transparent",
          }}>
            <img alt="" src={icon} style={{ width: 20, height: 14 }} />
            <span style={{ color: C.white, fontSize: 12, fontWeight: 500, letterSpacing: "-0.24px" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ width: 255, margin: "12px 0", borderTop: "0.5px solid rgba(255,255,255,0.3)" }} />
      <div style={{ display: "flex", flexDirection: "column", width: 255 }}>
        {SUB_NAV.map(({ icon, label }) => (
          <div key={label} style={{
            display: "flex", alignItems: "center", gap: 12,
            height: 48, padding: "0 20px", borderRadius: 8,
          }}>
            <img alt="" src={icon} style={{ width: 12, height: 12 }} />
            <span style={{ color: "#76d3ff", fontSize: 12, fontWeight: 500 }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "auto", display: "flex", justifyContent: "center" }}>
        <img alt="Marsh" src={imgMarshLogo} style={{ width: 85, height: 19 }} />
      </div>
    </div>
  );
}

function Pill({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ background: bg, borderRadius: 4, padding: "4px 12px" }}>
      <span style={{ fontSize: 12, fontWeight: 500, color }}>{children}</span>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div style={{ position: "absolute", left: 356, top: 100, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {["Work Queue", ">", "Work Details", ">", "Assignment Requirements"].map((t, i) => (
          <span key={i} style={{
            fontSize: 12,
            color: i === 0 || i === 1 || i === 3 ? C.muted : C.navy,
            fontWeight: i === 2 || i === 4 ? 600 : 400,
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontWeight: 700, color: C.navy, fontSize: 16, letterSpacing: "-0.32px" }}>
          Work ID - 3 | John Grimes
        </span>
        <Pill bg={C.badgeGrey} color="#202020">Leaver</Pill>
        <span style={{ color: C.labelDark, fontSize: 12 }}>Work Type:</span>
        <Pill bg={C.badgeRed} color={C.red}>High</Pill>
        <span style={{ color: C.labelDark, fontSize: 12 }}>Priority:</span>
        <div style={{
          display: "flex", alignItems: "center", gap: 6,
          background: C.badgeDate, borderRadius: 8, padding: "3px 8px",
        }}>
          <img alt="" src={imgIconClock} style={{ width: 12, height: 12 }} />
          <span style={{ color: C.labelDark, fontSize: 10 }}>03 Jan 2026 13:42 EST</span>
        </div>
        <Pill bg={C.badgeGreen} color={C.green}>On Track</Pill>
      </div>
    </div>
  );
}

function BottomBar() {
  return (
    <div style={{
      position: "absolute", left: 356, top: 990, width: 1135,
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <div style={{
        background: C.white, border: `1px solid ${C.red}`,
        borderRadius: 8, height: 32, padding: "0 17px",
        display: "flex", alignItems: "center",
      }}>
        <span style={{ fontWeight: 500, color: C.red, fontSize: 12 }}>Cancel Work Item</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          background: C.white, border: `1px solid ${C.navy}`,
          borderRadius: 8, height: 32, padding: "0 17px",
          display: "flex", alignItems: "center",
        }}>
          <span style={{ fontWeight: 500, color: C.navy, fontSize: 12 }}>Exit</span>
        </div>
        <div style={{
          background: C.navy, borderRadius: 8,
          height: 32, padding: "0 16px",
          display: "flex", alignItems: "center",
        }}>
          <span style={{ fontWeight: 500, color: C.white, fontSize: 12 }}>Complete Work Item</span>
        </div>
      </div>
    </div>
  );
}

// ── Member list (left panel) ─────────────────────────────────────────────────
function MemberList({ selectedId, searchQuery, highlightLow }: {
  selectedId: string | null;
  searchQuery?: string;
  highlightLow?: boolean;
}) {
  const filtered = searchQuery
    ? MEMBERS.filter(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : MEMBERS;

  return (
    <div style={{
      width: 432, flexShrink: 0, display: "flex", flexDirection: "column",
      background: C.white, border: `1px solid ${C.border}`, borderRadius: 8,
      overflow: "hidden",
    }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "12px 16px" }}>
        <p style={{ margin: 0, fontWeight: 700, color: C.navy, fontSize: 13 }}>Team Members</p>
        <p style={{ margin: "4px 0 0", fontSize: 11, color: C.muted }}>
          {MEMBERS.length} members · sorted by availability
        </p>
      </div>

      {/* Search */}
      <div style={{ borderBottom: `1px solid ${C.border}`, padding: "12px 16px" }}>
        <div style={{
          display: "flex", alignItems: "center", gap: 8,
          border: `1px solid ${C.border}`, borderRadius: 6,
          background: C.inputBg, padding: "0 13px", height: 36,
        }}>
          <img alt="" src={imgIconSearch} style={{ width: 16, height: 16, opacity: 0.5 }} />
          <span style={{ fontSize: 12, color: C.placeholder }}>{searchQuery || "Search members…"}</span>
          {searchQuery && (
            <span style={{ marginLeft: "auto", fontSize: 11, color: C.accent, fontWeight: 500 }}>Clear</span>
          )}
        </div>
      </div>

      {/* Member rows */}
      <div style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}>
        {filtered.map(m => {
          const isSel = m.id === selectedId;
          const cap = capColor(m.capacity);
          const isLow = m.capacity < 20;

          return (
            <div key={m.id} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px",
              borderLeft: `2px solid ${isSel ? C.navy : "transparent"}`,
              background: isSel ? C.panelBg : highlightLow && isLow ? "#fff8f8" : C.white,
              borderBottom: "1px solid #f0f0f0",
            }}>
              {/* Radio */}
              <div style={{
                flexShrink: 0, width: 16, height: 16, borderRadius: "50%",
                border: `2px solid ${isSel ? C.navy : "#c0c0c0"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                {isSel && <div style={{ width: 8, height: 8, borderRadius: "50%", background: C.navy }} />}
              </div>

              {/* Avatar */}
              <div style={{
                flexShrink: 0, width: 32, height: 32, borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 700,
                background: isSel ? C.navy : C.memberBg,
                color: isSel ? C.white : C.label,
              }}>
                {m.initials}
              </div>

              {/* Name + title */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0, fontSize: 13, fontWeight: 500,
                  color: isSel ? C.navy : C.text,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{m.name}</p>
                <p style={{
                  margin: "2px 0 0", fontSize: 11, color: C.dim,
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                }}>{m.title}</p>
              </div>

              {/* Capacity badge */}
              <span style={{
                flexShrink: 0, fontSize: 11, fontWeight: 600,
                padding: "3px 9px", borderRadius: 999,
                background: cap.bg, color: cap.text, border: `1px solid ${cap.border}`,
              }}>
                {m.capacity}%
              </span>

              {/* Low capacity warning icon */}
              {highlightLow && isLow && (
                <span style={{ fontSize: 10, color: C.red }}>⚠</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Dropdown chevron SVG ─────────────────────────────────────────────────────
function ChevronDown() {
  return (
    <svg viewBox="0 0 16 16" fill="#888" width={12} height={12}>
      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
}

// ── Trash icon SVG ───────────────────────────────────────────────────────────
function TrashIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="#ccc" width={14} height={14}>
      <path d="M5.5 5.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5z" />
      <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3h11V2h-11v1z" />
    </svg>
  );
}

// ── Notes icon SVG ───────────────────────────────────────────────────────────
function NotesIcon({ active }: { active?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" fill={active ? C.navy : C.dim} width={13} height={13}>
      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12z" />
    </svg>
  );
}

// ── Role card component ──────────────────────────────────────────────────────
function RoleCard({ role, showAssigned, chairLabel, saveState, showNotes }: {
  role: typeof ROLES[0];
  showAssigned?: boolean;
  chairLabel?: string;
  saveState?: "saving" | "success" | "error" | null;
  showNotes?: boolean;
}) {
  const member = MEMBERS[0];
  const borderColor = saveState === "success" ? "#bbf7d0"
    : saveState === "error" ? "#fecaca"
    : C.border;
  const headerBg = saveState === "success" ? "#f0fdf4"
    : saveState === "error" ? "#fef2f2"
    : "transparent";

  return (
    <div style={{ border: `1px solid ${borderColor}`, borderRadius: 8, overflow: "hidden" }}>
      {/* Card header */}
      <div style={{
        padding: "10px 16px", borderBottom: `1px solid ${borderColor}`,
        background: headerBg,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <p style={{ margin: 0, fontSize: 13, fontWeight: 600, color: C.navy }}>{role.name}</p>
        {saveState === "success" && (
          <span style={{ fontSize: 11, color: C.greenDark, fontWeight: 500 }}>✓ Assigned</span>
        )}
        {saveState === "error" && (
          <span style={{ fontSize: 11, color: C.redDark, fontWeight: 500 }}>⚠ Failed</span>
        )}
      </div>

      {/* Assigned member row */}
      {showAssigned && (
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "10px 16px", background: C.panelBg,
          borderBottom: `1px solid ${C.border}`,
        }}>
          <span style={{ fontSize: 11, color: C.dim, width: 100, flexShrink: 0 }}>Primary Chair</span>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
            <div style={{
              width: 24, height: 24, borderRadius: "50%", background: C.navy,
              color: C.white, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700, flexShrink: 0,
            }}>{member.initials}</div>
            <span style={{
              fontSize: 13, fontWeight: 500, color: C.navy,
              overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>{member.name}</span>
          </div>
          <span style={{ fontSize: 11, color: C.label, flexShrink: 0 }}>20%</span>
          <div style={{ color: "#ccc", flexShrink: 0 }}>
            <TrashIcon />
          </div>
        </div>
      )}

      {/* Form row */}
      <div style={{ padding: "12px 16px" }}>
        {showAssigned && (
          <p style={{ margin: "0 0 8px", fontSize: 10, color: "#aaa", fontStyle: "italic" }}>
            Additional chair selection available
          </p>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          {/* Chair dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 0 }}>
            <label style={{ fontSize: 11, fontWeight: 500, color: C.label, whiteSpace: "nowrap" }}>Chair</label>
            <div style={{
              flex: 1, height: 36, border: `1px solid ${C.border}`, borderRadius: 6,
              background: C.inputBg, display: "flex", alignItems: "center",
              justifyContent: "space-between", padding: "0 13px",
            }}>
              <span style={{ fontSize: 12, color: chairLabel ? "#333" : C.placeholder }}>
                {chairLabel || "Select Chair"}
              </span>
              <ChevronDown />
            </div>
          </div>

          {/* Workload input */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
            <label style={{ fontSize: 11, fontWeight: 500, color: C.label, whiteSpace: "nowrap" }}>Workload</label>
            <div style={{
              width: 64, height: 36, border: `1px solid ${C.border}`, borderRadius: 6,
              background: C.inputBg, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ fontSize: 13, color: "#333" }}>20</span>
            </div>
            <span style={{ fontSize: 12, color: C.dim }}>%</span>
          </div>

          {/* Notes button */}
          <div style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "0 9px", height: 36, borderRadius: 6,
            border: `1px solid ${showNotes ? C.navy : C.border}`,
            background: showNotes ? C.panelBg : C.white,
            color: showNotes ? C.navy : C.dim,
          }}>
            <NotesIcon active={showNotes} />
            <span style={{ fontSize: 11, fontStyle: "italic", opacity: 0.7 }}>Notes</span>
          </div>
        </div>

        {/* Notes textarea */}
        {showNotes && (
          <div style={{ marginTop: 10 }}>
            <textarea
              readOnly
              defaultValue="Sarah has strong relationships with this client. Primary contact since 2023."
              style={{
                width: "100%", height: 64, borderRadius: 6,
                border: `1px solid ${C.navy}`, padding: "8px 12px",
                fontSize: 12, color: C.text, resize: "none",
                background: "#fafff8", outline: "none",
                fontFamily: "'Noto Sans', sans-serif",
                boxSizing: "border-box",
              }}
            />
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 4 }}>
              <span style={{ fontSize: 10, color: C.dim }}>83 / 500</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Saving dots ──────────────────────────────────────────────────────────────
function SavingDot() {
  return (
    <span style={{
      display: "inline-block", width: 8, height: 8,
      borderRadius: "50%", background: C.accent, margin: "0 2px",
    }} />
  );
}

// ── Main component ───────────────────────────────────────────────────────────
export type Concept6Variant =
  | "default"
  | "member-selected"
  | "chair-assigned"
  | "all-assigned"
  | "saving"
  | "success"
  | "error"
  | "search"
  | "low-capacity"
  | "notes"
  | "modal";

interface Props {
  variant?: Concept6Variant;
}

export default function AssignmentRequirementsConcept6({ variant = "default" }: Props) {
  const font = "'Noto Sans', sans-serif";

  // Derive display state from variant
  const hasSelection   = variant !== "default";
  const selectedId     = hasSelection ? "m1" : null;
  const selected       = MEMBERS[0];
  const searchQuery    = variant === "search" ? "james" : undefined;
  const highlightLow   = variant === "low-capacity";
  const saveState: "saving" | "success" | "error" | null =
    variant === "saving"  ? "saving"  :
    variant === "success" ? "success" :
    variant === "error"   ? "error"   : null;
  const showModal      = variant === "modal";
  const showNotes      = variant === "notes";
  const chairAssigned  = ["chair-assigned", "all-assigned", "saving", "success", "error", "notes"].includes(variant);
  const allAssigned    = ["all-assigned", "saving", "success", "error"].includes(variant);
  const assignBtnActive = chairAssigned;

  const readyCount = allAssigned ? 3 : chairAssigned ? 1 : 0;
  const lowCapMember = MEMBERS[5]; // Patrick Daly 10%

  return (
    <div style={{
      position: "relative", width: 1531, height: 1020,
      background: C.bg, fontFamily: font, overflow: "hidden",
    }}>
      <Header />
      <Sidebar />
      <Breadcrumb />

      {/* ── Main panel ── */}
      <div style={{
        position: "absolute", left: 356, top: 170, width: 1135, height: 812,
        background: C.white, border: `1px solid ${C.border2}`, borderRadius: 8,
        display: "flex", flexDirection: "column",
      }}>
        {/* Panel header */}
        <div style={{
          height: 48, background: C.panelBg,
          borderBottom: `1px solid ${C.border}`,
          borderRadius: "8px 8px 0 0",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 16px", flexShrink: 0,
        }}>
          <span style={{ fontWeight: 700, color: C.navy, fontSize: 14 }}>
            Assignment Requirements — Concept 6
          </span>
          <span style={{ fontSize: 12, color: C.muted }}>Member-First Assignment</span>
        </div>

        {/* Two-column body */}
        <div style={{ display: "flex", gap: 16, padding: 16, flex: 1, minHeight: 0 }}>

          {/* LEFT: Team Members */}
          <MemberList
            selectedId={variant === "low-capacity" ? "m6" : selectedId}
            searchQuery={searchQuery}
            highlightLow={highlightLow}
          />

          {/* RIGHT: Role Assignments */}
          <div style={{
            flex: 1, minWidth: 0, display: "flex", flexDirection: "column",
            background: C.white, border: `1px solid ${C.border}`, borderRadius: 8,
            overflow: "hidden",
          }}>
            {/* Right panel header */}
            <div style={{
              borderBottom: `1px solid ${C.border}`, padding: "12px 16px",
              display: "flex", alignItems: "flex-start", justifyContent: "space-between",
              flexShrink: 0,
            }}>
              {hasSelection ? (
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: C.navy, fontSize: 13 }}>Role Assignments</p>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: C.muted }}>
                    Assigning to:{" "}
                    <span style={{ fontWeight: 600, color: C.navy }}>
                      {variant === "low-capacity" ? lowCapMember.name : selected.name}
                    </span>
                    <span style={{ margin: "0 6px", color: C.dim }}>·</span>
                    {variant === "low-capacity" ? (
                      <span style={{ fontSize: 11, fontWeight: 600, color: C.redDark }}>
                        ⚠ {lowCapMember.capacity}% available — low capacity
                      </span>
                    ) : (
                      <span style={{ fontSize: 11, fontWeight: 600, color: C.greenDark }}>
                        {selected.capacity}% available
                      </span>
                    )}
                  </p>
                </div>
              ) : (
                <div>
                  <p style={{ margin: 0, fontWeight: 700, color: C.navy, fontSize: 13 }}>Role Assignments</p>
                  <p style={{ margin: "4px 0 0", fontSize: 11, color: C.muted }}>
                    Select a team member to begin assigning roles
                  </p>
                </div>
              )}
              {hasSelection && (
                <span style={{ fontSize: 11, color: C.muted, flexShrink: 0, whiteSpace: "nowrap" }}>
                  {readyCount > 0
                    ? `${readyCount} role${readyCount > 1 ? "s" : ""} ready to assign`
                    : "No roles assigned yet"}
                </span>
              )}
            </div>

            {/* Role cards or empty state */}
            {!hasSelection ? (
              <div style={{
                flex: 1, display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 12,
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%",
                  background: C.panelBg, display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: 24,
                }}>
                  👤
                </div>
                <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: C.navy }}>No member selected</p>
                <p style={{ margin: 0, fontSize: 12, color: C.muted, textAlign: "center", maxWidth: 280 }}>
                  Choose a team member from the left panel to view and assign their roles
                </p>
              </div>
            ) : (
              <div style={{
                display: "flex", flexDirection: "column", gap: 12,
                padding: 16, flex: 1, overflowY: "auto",
              }}>
                {/* Low capacity warning */}
                {variant === "low-capacity" && (
                  <div style={{
                    background: "#fef2f2", border: "1px solid #fecaca",
                    borderRadius: 8, padding: "10px 14px",
                    display: "flex", alignItems: "flex-start", gap: 10,
                  }}>
                    <span style={{ fontSize: 16, flexShrink: 0 }}>⚠️</span>
                    <div>
                      <p style={{ margin: 0, fontSize: 12, fontWeight: 600, color: C.redDark }}>
                        Low capacity warning
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: 11, color: C.redDark }}>
                        Patrick Daly has only 10% available capacity. Consider selecting a different team member.
                      </p>
                    </div>
                  </div>
                )}

                {/* Saving banner */}
                {saveState === "saving" && (
                  <div style={{
                    background: "#eff6ff", border: "1px solid #bfdbfe",
                    borderRadius: 8, padding: "10px 14px",
                    display: "flex", alignItems: "center", gap: 10,
                  }}>
                    <SavingDot /><SavingDot /><SavingDot />
                    <span style={{ fontSize: 12, color: C.blueDark, fontWeight: 500 }}>
                      Saving assignments…
                    </span>
                  </div>
                )}

                {/* Success banner */}
                {saveState === "success" && (
                  <div style={{
                    background: "#f0fdf4", border: "1px solid #bbf7d0",
                    borderRadius: 8, padding: "10px 14px",
                    display: "flex", alignItems: "center", gap: 10,
                  }}>
                    <span style={{ fontSize: 16 }}>✅</span>
                    <span style={{ fontSize: 12, color: C.greenDark, fontWeight: 500 }}>
                      Assignments saved successfully!
                    </span>
                  </div>
                )}

                {/* Error banner */}
                {saveState === "error" && (
                  <div style={{
                    background: "#fef2f2", border: "1px solid #fecaca",
                    borderRadius: 8, padding: "10px 14px",
                    display: "flex", alignItems: "center", gap: 10,
                  }}>
                    <span style={{ fontSize: 16 }}>❌</span>
                    <div>
                      <p style={{ margin: 0, fontSize: 12, color: C.redDark, fontWeight: 500 }}>
                        Failed to save assignments
                      </p>
                      <p style={{ margin: "2px 0 0", fontSize: 11, color: C.redDark }}>
                        Please try again or contact support if the issue persists.
                      </p>
                    </div>
                  </div>
                )}

                {/* Role cards */}
                {ROLES.map((role, idx) => (
                  <RoleCard
                    key={role.id}
                    role={role}
                    showAssigned={chairAssigned && idx === 0}
                    chairLabel={
                      allAssigned
                        ? idx === 0 ? "Secondary Chair" : "Primary Chair"
                        : chairAssigned && idx === 0 ? "Secondary Chair" : undefined
                    }
                    saveState={saveState && idx === 0 ? saveState : null}
                    showNotes={showNotes && idx === 0}
                  />
                ))}
              </div>
            )}

            {/* Footer */}
            <div style={{
              borderTop: `1px solid ${C.border}`, padding: "12px 16px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
              flexShrink: 0,
            }}>
              <span style={{ fontSize: 12, color: C.dim }}>
                {readyCount > 0
                  ? `${readyCount} role${readyCount > 1 ? "s" : ""} ready to assign`
                  : "Select chairs to enable assignment"}
              </span>
              <div style={{
                background: assignBtnActive ? C.navy : "#d1d5db",
                borderRadius: 6, height: 36, padding: "0 24px",
                display: "flex", alignItems: "center", justifyContent: "center",
                opacity: saveState === "saving" ? 0.7 : 1,
              }}>
                <span style={{ fontWeight: 500, color: C.white, fontSize: 13 }}>
                  {saveState === "saving" ? "Saving…" : "Assign"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar />

      {/* ── Complete Work Item Modal ── */}
      {showModal && (
        <>
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 10 }} />
          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%,-50%)", zIndex: 11,
            width: 480, background: C.white, borderRadius: 12,
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)", overflow: "hidden",
          }}>
            {/* Dialog header */}
            <div style={{
              background: C.navy, padding: "20px 24px",
              display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>
              <span style={{ fontWeight: 700, color: C.white, fontSize: 16 }}>Complete Work Item</span>
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: C.white, fontSize: 16, cursor: "pointer",
              }}>×</div>
            </div>
            {/* Dialog body */}
            <div style={{ padding: 24 }}>
              <p style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 600, color: C.navy }}>
                Are you sure you want to complete this work item?
              </p>
              <p style={{ margin: "0 0 20px", fontSize: 13, color: C.muted, lineHeight: 1.6 }}>
                This will finalise all assignments for <strong>Work ID - 3 | John Grimes</strong> and
                mark the work item as complete. This action cannot be undone.
              </p>
              {/* Assignment summary */}
              <div style={{
                background: C.panelBg, borderRadius: 8,
                border: `1px solid ${C.border}`, padding: "12px 16px", marginBottom: 20,
              }}>
                <p style={{ margin: "0 0 8px", fontSize: 12, fontWeight: 600, color: C.navy }}>
                  Assignment Summary
                </p>
                {ROLES.map(r => (
                  <div key={r.id} style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "4px 0",
                    borderBottom: `1px solid ${C.border}`,
                  }}>
                    <span style={{ fontSize: 12, color: C.text }}>{r.name}</span>
                    <span style={{ fontSize: 12, fontWeight: 500, color: C.greenDark }}>
                      {selected.name} · 20%
                    </span>
                  </div>
                ))}
              </div>
              {/* Actions */}
              <div style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}>
                <div style={{
                  background: C.white, border: `1px solid ${C.border2}`,
                  borderRadius: 8, height: 36, padding: "0 20px",
                  display: "flex", alignItems: "center",
                }}>
                  <span style={{ fontSize: 13, color: C.muted }}>Cancel</span>
                </div>
                <div style={{
                  background: C.navy, borderRadius: 8,
                  height: 36, padding: "0 20px",
                  display: "flex", alignItems: "center",
                }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: C.white }}>Confirm & Complete</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
