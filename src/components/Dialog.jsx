import React from 'react';
import styled from 'styled-components';
import { AiFillDelete } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import PropType from 'prop-types';

const Dialog = ({ whatAreYouDeleting, confirm, deny, dataValue }) => {
  const handleDelete = (e) => {
    if (confirm && deny) confirm(e);
    if (deny) deny();
  };

  const handleCancel = () => {
    if (deny) deny();
  };

  return (
    <Wrapper className="flex">
      <h1 className="heading1">{whatAreYouDeleting}</h1>

      <div className="btns flex">
        <button
          type="button"
          className="delete flex"
          onClick={handleDelete}
          data-value={dataValue}
        >
          <AiFillDelete className="del_icon" />
          <span>Delete</span>
        </button>

        <button type="button" className="cancel flex" onClick={handleCancel}>
          <ImCancelCircle className="can_icon" />
          <span>Cancel</span>
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding: 5px 5px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: rgba(0, 0, 0, 0.8);
  flex-direction: column;

  .heading1 {
    color: var(--light-color);
    letter-spacing: 2px;
    font-size: 1.5em;
  }

  .btns {
    padding: 50px 0 0;

    span {
      pointer-events: none;
    }

    .delete {
      color: var(--danger-color);
      font-size: 1em;
      margin-right: 50px;
      transition: transform 0.5s ease;
      background: transparent;
    }

    .delete:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    .cancel {
      font-size: 1em;
      transition: transform 0.5s ease;
      background: transparent;
      color: var(--light-color);
    }

    .cancel:hover {
      transform: scale(1.1);
      cursor: pointer;
    }

    .del_icon,
    .can_icon {
      font-size: 2em;
      margin-right: 4px;
      pointer-events: none;
    }
  }
`;

Dialog.propTypes = {
  whatAreYouDeleting: PropType.string.isRequired,
  confirm: PropType.func.isRequired,
  deny: PropType.func.isRequired,
  dataValue: PropType.string.isRequired,
};

export default Dialog;
