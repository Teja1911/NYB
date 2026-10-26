function StatCard({ title, value, description, icon }) {
  return (
    <article className="stat-card">
      <div className="stat-card-top">
        <p className="stat-card-title">{title}</p>

        {icon && (
          <span className="stat-card-icon" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>

      <h2 className="stat-card-value">{value}</h2>

      {description && (
        <p className="stat-card-description">
          {description}
        </p>
      )}
    </article>
  );
}

export default StatCard;