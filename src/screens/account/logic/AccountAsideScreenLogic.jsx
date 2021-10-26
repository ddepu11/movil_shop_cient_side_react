import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { sendNotification } from '../../../actions/notificationActions';
import { changeDisplayPicture } from '../../../actions/userActions';
import releaseImageObjectUrl from '../../../utils/releaseImageObject';
import femaleDP from '../../../assests/femaleDP.png';
import maleDP from '../../../assests/maleDP.png';
import {
  USER_CHANGE_DP_BEGIN,
  USER_CHANGE_DP_ERROR,
} from '../../../constants/userConstants';
import { storageInstance } from '../../../config/firebase';

const AccountAsideScreenLogic = () => {
  const dispatch = useDispatch();

  const { userInfo, userLoading } = useSelector((state) => state.user);

  const [dpSRC, setDpSRC] = useState({ preview: '', file: '' });

  let dp = '';

  if (userInfo.displayPicture) {
    if (userInfo.displayPicture.url) {
      dp = userInfo.displayPicture.url;
    } else if (userInfo.displayPicture.fileName === 'femaleDP.png') {
      dp = femaleDP;
    } else {
      dp = maleDP;
    }
  }

  useEffect(() => {
    setDpSRC((prevState) => ({
      ...prevState,
      preview: dp,
    }));
  }, [userInfo, dp]);

  const [wannaChangeDP, setWannaChangeDP] = useState(false);

  const initiateChangeDPProcess = (e) => {
    setWannaChangeDP(true);
    const file = e.target.files[0];

    if (file.size < 5242880) {
      const fileSRC = URL.createObjectURL(file);
      setDpSRC({ ...dpSRC, preview: fileSRC, file });
    } else {
      dispatch(
        sendNotification('Image size should not be geater then 5mb!!!', true)
      );
    }
  };

  const uploadNewDp = async () => {
    dispatch({ type: USER_CHANGE_DP_BEGIN });

    const fileName = `DP_${Math.floor(Math.random() * Date.now())}_${
      dpSRC.file.name
    }`;

    const newDpRef = ref(
      storageInstance,
      `displayPictures/${userInfo.email}/${fileName}`
    );

    try {
      await uploadBytes(newDpRef, dpSRC.file);

      const url = await getDownloadURL(newDpRef);

      dispatch(changeDisplayPicture({ url, fileName }, userInfo._id));

      // console.log(downloadURL);
    } catch (err) {
      dispatch({ type: USER_CHANGE_DP_ERROR, payload: err.code });
      dispatch(sendNotification(err.code, true));
    }
  };

  const deletePreviousDp = async () => {
    dispatch({ type: USER_CHANGE_DP_BEGIN });

    const previousDpRef = ref(
      storageInstance,
      `displayPictures/${userInfo.email}/${userInfo.displayPicture.fileName}`
    );

    try {
      await deleteObject(previousDpRef);

      await uploadNewDp();
    } catch (err) {
      dispatch({ type: USER_CHANGE_DP_ERROR, payload: err.code });
      dispatch(sendNotification(err.code, true));
    }
  };

  // Uploading the New User DP
  const changeDP = async () => {
    const { file } = dpSRC;

    if (file) {
      if (userInfo.displayPicture.url) {
        deletePreviousDp();
      } else {
        uploadNewDp();
      }
    }

    setWannaChangeDP(false);

    setDpSRC({ ...dpSRC, preview: dp });
  };

  const cancelChangeDPProcess = () => {
    setWannaChangeDP(false);
    setDpSRC({
      ...dpSRC,
      preview: dp,
    });
  };

  const { firstName, lastName } = userInfo;

  return {
    firstName,
    lastName,
    cancelChangeDPProcess,
    changeDP,
    initiateChangeDPProcess,
    wannaChangeDP,
    dpSRC,
    userLoading,
    releaseImageObjectUrl,
  };
};

export default AccountAsideScreenLogic;
