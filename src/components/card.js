import React from 'react'

// TODO open google map for address

const Card = ({business:{name, categories, phone, distance,location:{address1, city, state, zip_code}}}) => (
  <section className="col-xs-12">
    <div className="card text-xs-center bg-inverse">
    <img className="img-fluid" src="https://cambodiapackagetravel.com/wp-content/uploads/2016/02/938_1_02_coffeeshop01.jpg" />
    <div className="card-block">
      <a href="/"><h2 className="card-title text-white">{name}</h2></a>
      <ul className="list-group">
        {categories.map(c=>(
            <li key={c.title} className="list-group-item bg-inverse text-white">{c.title}</li>
        ))}
        <a className="list-group-item bg-inverse" href="/">
          {address1} {city}, {state} {zip_code}
        </a>
        <a className="list-group-item bg-inverse" href="/">Call {phone}</a>
      </ul>
    </div>
    <div className="card-footer text-muted bg-inverse">
      Distance {(distance * 0.00062137).toFixed(1)} miles
    </div>
    </div>
  </section>
)

export default Card
