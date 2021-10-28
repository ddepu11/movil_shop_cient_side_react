import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ref, deleteObject } from 'firebase/storage';
import { storageInstance } from '../../../config/firebase';
import { deleteMobile, listMobiles } from '../../../actions/adminActions';
import CircleLoader from '../../../components/CircleLoader';
import Mobile from '../../../components/Mobile';
import {
  ADMIN_DELETE_MOBILE_BEGIN,
  ADMIN_DELETE_MOBILE_ERROR,
} from '../../../constants/adminConstants';
import { sendNotification } from '../../../actions/notificationActions';

const AdminDashboardMobilesScreen = () => {
  const { mobiles, adminLoading } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    mobiles.length === 0 && dispatch(listMobiles());
  }, [dispatch, mobiles]);

  const deleteMobilePic = (mobileId) => {
    const { pictures, sellerInfo } = mobiles.filter(
      (item) => item._id === mobileId
    )[0];

    try {
      let index = 0;

      pictures.forEach(async (item) => {
        const mobilePicRef = ref(
          storageInstance,
          `mobileImages/${sellerInfo.email}/${item.fileName}`
        );

        await deleteObject(mobilePicRef);

        if (pictures.length - 1 === index) {
          dispatch(deleteMobile(mobileId));
        }

        index += 1;
      });
    } catch (err) {
      dispatch({ type: ADMIN_DELETE_MOBILE_ERROR });
      dispatch(sendNotification(err.code, true));
    }
  };

  const handleDelete = (mobileId) => {
    dispatch({ type: ADMIN_DELETE_MOBILE_BEGIN });
    deleteMobilePic(mobileId);
  };

  if (adminLoading) {
    return (
      <CircleLoader
        bgColor="var(--secondary-color)"
        wrapperH="80vh"
        spW="90px"
        spH="90px"
        cirW="90px"
        cirH="90px"
      />
    );
  }

  return mobiles.map((m) => (
    <Mobile
      key={m._id}
      mobileId={m._id}
      pictures={m.pictures}
      title={m.title}
      os={m.os}
      brand={m.brand}
      internalMemory={+m.internalMemory}
      ram={m.ram}
      camera={m.camera}
      processor={m.processor}
      battery={m.battery}
      price={m.price}
      sellerName={m.sellerInfo.name}
      userId={m.sellerInfo.id}
      usedFor="ADMIN"
      handleDeleteMobile={handleDelete}
    />
  ));
};

export default AdminDashboardMobilesScreen;
