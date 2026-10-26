function StatusBadge({ status }) {
  const normalizedStatus = String(status ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");

  const supportedStatuses = ["active", "inactive", "on-leave"];

  const statusClass = supportedStatuses.includes(normalizedStatus)
    ? normalizedStatus
    : "unknown";

  const label = status
    ? String(status)
    : "Unknown";

  return (
    <span className={`status-badge status-${statusClass}`}>
      {label}
    </span>
  );
}

export default StatusBadge;
