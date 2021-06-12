import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { ImCancelCircle } from 'react-icons/im';
import {
  changeDisplayPicture,
  sendNotification,
} from '../../actions/user_actions';

const Aside = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user);

  const [dpSRC, setDpSRC] = useState({ preview: '', file: '' });

  useEffect(() => {
    setDpSRC(() => ({ ...dpSRC, preview: `dp/${userInfo.displayPicture}` }));

    // eslint-disable-next-line
  }, [userInfo]);

  const [wannaChangeDP, setWannaChangeDP] = useState(false);

  const initiateChangeDPProcess = (e) => {
    setWannaChangeDP(true);
    const file = e.target.files[0];

    if (file.size < 5242880) {
      const fileSRC = URL.createObjectURL(file);
      setDpSRC({ ...dpSRC, preview: fileSRC, file });
    } else {
      dispatch(sendNotification('Image size should not be geater then 5mb!!!'));
    }
  };

  // Uploading the New User DP
  const changeDP = () => {
    const { file } = dpSRC;
    if (file) {
      const formData = new FormData();
      formData.append('dp', file);
      dispatch(changeDisplayPicture(formData));
    }
    setWannaChangeDP(false);
    setDpSRC({ ...dpSRC, preview: `dp/${userInfo.displayPicture}` });
  };

  const cancelChangeDPProcess = () => {
    setWannaChangeDP(false);
    setDpSRC({ ...dpSRC, preview: `dp/${userInfo.displayPicture}` });
  };

  const { firstName, lastName } = userInfo;

  return (
    <Wrapper className="flex">
      <div className="dp">
        <img src={dpSRC.preview} alt={`${firstName} ${lastName}`} />

        <div className="change_dp_div flex">
          <label htmlFor="change_dp">Change DP</label>

          <input
            type="file"
            name="newDP"
            id="change_dp"
            accept=".jpg, .jpeg, .png"
            onChange={initiateChangeDPProcess}
          />

          {wannaChangeDP && (
            <>
              <button onClick={changeDP} type="button" className="upload_btn">
                Upload
              </button>
              <button
                type="button"
                onClick={cancelChangeDPProcess}
                className="cancel_upload_btn flex"
              >
                Cancel Upload
                <ImCancelCircle />
              </button>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-area: as;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  z-index: 0;

  .dp {
    width: 180px;
    height: 180px;
    transform: translateX(-15%);
    position: relative;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      box-shadow: -5px 6px 8px 1px #252525;
      transition: transform 0.6s cubic-bezier(0.65, 0.05, 0.36, 1);
    }

    img:hover {
      cursor: pointer;
      transform: scale(1.6);
    }

    .change_dp_div {
      margin-top: 20px;
      text-align: center;
      flex-direction: column;
      gap: 8px 0;

      label {
        font-size: 1em;
        padding: 5px 10px;
        background: #1e6adb;
        border-radius: 2px;
        color: white;
        width: 100%;
      }

      .upload_btn {
        font-size: 1em;
        padding: 5px 10px;
        background: #1c8f0d;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
        width: 100%;
      }

      .cancel_upload_btn {
        color: red;
        width: 100%;
        font-size: 1.1em;
        background: #b9b7b7;
        justify-content: space-between;
        padding: 5px 10px;
      }

      label,
      .cancel_upload_btn,
      .upload_btn {
        transition: transform 0.5s ease;
      }

      label:hover,
      .cancel_upload_btn:hover,
      .upload_btn:hover {
        transform: scale(1.15);
        cursor: pointer;
      }

      input {
        display: none;
      }
    }
  }

  .dp::before {
    content: '';
    background: #1e6adb;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -10px;
    left: 12px;
    z-index: -1;
    box-shadow: 5px -2px 8px #252525;
  }

  .dp::after {
    font-family: 'Font Awesome 5 Free';
    content: '\f083';
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #1e6adb;
    position: absolute;
    top: 0;
    left: -20px;
    color: white;
    font-size: 1.1em;
    font-weight: bold;
    display: grid;
    place-content: center;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export default Aside;
