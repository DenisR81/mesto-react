import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }  

  return (
  <article className="place">
    <img src={props.card.link} className="effecthov place__photo" alt={props.card.name} onClick={handleClick}/>
    <div className="place__list">
      <h2 className="place__title">{props.card.name}</h2>
      <div className="place__like">
        <button type="button" className="effecthov place__heart" aria-label="Лайк"></button>
        <span className="place__like-count">{props.card.likes.length}</span>
      </div>
    </div>
    <button type="button" className="effecthov place__urn" aria-label="Удаление"></button>
  </article>
  );
}

export default Card