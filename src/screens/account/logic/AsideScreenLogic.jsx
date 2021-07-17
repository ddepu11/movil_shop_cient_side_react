import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendNotification } from '../../../actions/notificationActions';
import { changeDisplayPicture } from '../../../actions/userActions';
import apiUrl from '../../../api/apiUrl';

const AsideScreenLogic = () => {
  const dispatch = useDispatch();

  const { userInfo, userLoading } = useSelector((state) => state.user);

  const [dpSRC, setDpSRC] = useState({ preview: '', file: '' });

  useEffect(() => {
    setDpSRC((prevState) => ({
      ...prevState,
      preview: `${apiUrl}/dp/${userInfo.displayPicture}`,
    }));
  }, [userInfo]);

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

  // Uploading the New User DP
  const changeDP = () => {
    const { file } = dpSRC;
    if (file) {
      const formData = new FormData();
      formData.append('dp', file);

      dispatch(changeDisplayPicture(formData, userInfo._id));
    }
    setWannaChangeDP(false);
    setDpSRC({ ...dpSRC, preview: `${apiUrl}/dp/${userInfo.displayPicture}` });
  };

  const cancelChangeDPProcess = () => {
    setWannaChangeDP(false);
    setDpSRC({ ...dpSRC, preview: `${apiUrl}/dp/${userInfo.displayPicture}` });
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
  };
};

export default AsideScreenLogic;
