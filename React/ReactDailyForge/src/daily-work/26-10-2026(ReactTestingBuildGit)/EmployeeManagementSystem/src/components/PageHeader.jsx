function PageHeader({ title, description, action }) {
  return (
    <header className="page-header">
      <div className="page-header-content">
        <h1>{title}</h1>

        {description && <p>{description}</p>}
      </div>

      {action && (
        <div className="page-header-action">
          {action}
        </div>
      )}
    </header>
  );
}

export default PageHeader;