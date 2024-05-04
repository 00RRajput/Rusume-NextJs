export default function ExperienceCard({ data }) {
 
  return (
    <div className="exp-section">
      <h3>{data?.company}</h3>
      <p>{data?.duration}</p>
      <ul className="exp-list">
        {data?.additional &&
          data.additional.map((value, ind) => <li key={ind}>{value}</li>)}
      </ul>
    </div>
  );
}
