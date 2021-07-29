import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteMobile, listMobiles } from '../../../actions/adminActions';
import CircleLoader from '../../../components/CircleLoader';
import Mobile from '../../../components/Mobile';

const AdminDashboardMobilesScreen = () => {
  const { mobiles, adminLoading } = useSelector((state) => state.admin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMobiles());
  }, [dispatch]);

  const handleDelete = (mobileId) => {
    dispatch(deleteMobile(mobileId));
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
