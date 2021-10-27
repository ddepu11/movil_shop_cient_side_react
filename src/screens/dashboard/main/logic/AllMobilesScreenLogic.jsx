import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, deleteObject } from 'firebase/storage';
import { storageInstance } from '../../../../config/firebase';

import { sendNotification } from '../../../../actions/notificationActions';
import { listMobiles, removeMobile } from '../../../../actions/sellerActions';
import {
  SELLER_MOBILE_DELETE_BEGIN,
  SELLER_MOBILE_DELETE_ERROR,
} from '../../../../constants/sellerConstants';

const AllMobilesScreenLogic = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { sellerLoading, sellerMobiles } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0 && sellerMobiles.length === 0)
      dispatch(listMobiles(userInfo._id));
  }, [dispatch, userInfo, sellerMobiles]);

  const deleteMobilePic = (id) => {
    const { pictures } = sellerMobiles.filter((item) => item._id === id)[0];

    try {
      let index = 0;

      pictures.forEach(async (item) => {
        const mobilePicRef = ref(
          storageInstance,
          `mobileImages/${userInfo.email}/${item.fileName}`
        );

        await deleteObject(mobilePicRef);

        if (pictures.length - 1 === index) {
          dispatch(removeMobile(id));
        }

        index += 1;
      });
    } catch (err) {
      dispatch({ type: SELLER_MOBILE_DELETE_ERROR });

      dispatch(sendNotification(err.code, true));
    }
  };

  const handleDeleteMobile = (id) => {
    dispatch({ type: SELLER_MOBILE_DELETE_BEGIN });
    deleteMobilePic(id);
  };

  return { handleDeleteMobile, sellerLoading, userInfo, sellerMobiles };
};

export default AllMobilesScreenLogic;
