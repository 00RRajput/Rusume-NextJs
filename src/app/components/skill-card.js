export default function SkillCard({title, data}) {

    return (
        <div className="n-card">
          <div className="card-header">
            <h2>{ title }</h2>
          </div>
          <div>
            <ul className="list">
                {data && data.map((value, ind) => (
                    <li key={ind}>{value}</li>
                ))}
            </ul>
          </div>
        </div>
    )
}