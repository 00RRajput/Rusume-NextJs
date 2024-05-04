export default function EducationCard({ data }) {
  return (
    <div className="n-card">
      <div className="card-header">
        <h2>{data.title}</h2>
      </div>
      <div className="exp-section">
        <h3>{data.company}</h3>
        <p>{data.duration}</p>
      </div>
    </div>
  );
}
