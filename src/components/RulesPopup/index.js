import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {
  RulesContainer,
  CloseButton,
  RulesImage,
  TriggerButton,
} from './styledComponents'

const RulesPopup = () => (
  <Popup
    modal
    trigger={<TriggerButton type="button">Rules</TriggerButton>}
    position="center center"
  >
    {close => (
      <RulesContainer>
        <CloseButton type="button" onClick={() => close()}>
          <RiCloseLine />
        </CloseButton>
        <RulesImage
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
      </RulesContainer>
    )}
  </Popup>
)

export default RulesPopup
