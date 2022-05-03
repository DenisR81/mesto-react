import React from 'react';
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import PopupWithForm from "./PopupWithForm"
import ImagePopup from "./ImagePopup"



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, name: "", link: "" })

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard({...card, isOpen: true})
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({...selectedCard, isOpen: false})
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups} 
      buttonTitle="Сохранить">
        <input id="name" type="text" name="name" placeholder="имя" className="popup__fields popup__fields_field_name" minLength = "2" maxLength = "40" required />
        <span id="error-name" className="popup__error-message popup__error-message_visible"></span>
        <input id="work" type="text" name="work" placeholder="о себе" className="popup__fields popup__fields_field_work" minLength = "2" maxLength = "200" required />
        <span id="error-work" className="popup__error-message popup__error-message_visible"></span>
    </PopupWithForm>

    <PopupWithForm
      name='edit-avatar'
      title='Обновить аватар'
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      buttonTitle="Сохранить">
        <input id="avatar" type="url" name="name" defaultValue="" placeholder="ссылка на картинку" className="popup__fields popup__fields_field_editImgProfile" required/>
        <span id="error-avatar" className="popup__error-message popup__error-message_visible"></span>
        </PopupWithForm>

    <PopupWithForm
        name='add-picture'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonTitle="Сохранить">
        <input id="addname" type="text" name="addname" placeholder="название" className="popup__fields popup__fields_field_addname" minLength = "2" maxLength = "30" required />
        <span id="error-addname" className="popup__error-message popup__error-message_visible"></span>
        <input id="link" type="url" name="addlink" placeholder="ссылка на картинку" className="popup__fields popup__fields_field_addlink" required />
        <span id="error-link" className="popup__error-message popup__error-message_visible"></span>
    </PopupWithForm>

    <PopupWithForm
        name="card-delete"
        title="Вы уверены?"
        buttonTitle="Да" />
  </div>
    );
}

export default App;
