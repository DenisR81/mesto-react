import React from 'react';
import { api } from '../utils/Api';
import Card from "./Card";

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription , setUserDescription ] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
      api.getProfile()
      .then((res) => {
        setUserName(res.name)
        setUserAvatar(res.avatar)
        setUserDescription(res.about)
      })
      api.getInitialCards()
      .then((card) => {
        setCards(card)
      })
      .catch(err => {
        console.log(err); 
      });
    },[])

  return (
    <main>
      <section className="profile">
        <div className="profile__item">
          <img src={userAvatar} onClick={props.onEditAvatar} className="profile__avatar" alt="Фото профиля"/>
          <div className="profile__list">
            <div className="profile__flex">
              <h1 className="profile__title">{userName}</h1>
              <p className="profile__subtitle">{userDescription}</p>
            </div>
            <button type="button" className="effecthov profile__edit-button" onClick={props.onEditProfile} aria-label="Кнопка редактирования профиля"></button>
          </div>
        </div>
        <button type="button" className="effecthov profile__add-button" onClick={props.onAddPlace} aria-label="Кнопка добавления"></button>
      </section>

      <section className="photo-grid">
        {cards.map(card => <Card card={card} key={card._id} onCardClick={props.onCardClick}/>)}
      </section>

      </main>
  );
}
  export default Main;