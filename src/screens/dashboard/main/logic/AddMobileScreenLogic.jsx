import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storageInstance } from '../../../../config/firebase';
import { createMobile } from '../../../../actions/mobileActions';
import { sendNotification } from '../../../../actions/notificationActions';
import clearAllSetTimeOut from '../../../../utils/clearAllSetTimeOut';
import validateMobileForm from '../../../../utils/validateMobileForm';
import releaseImageObjectUrl from '../../../../utils/releaseImageObject';
import {
  MOBILE_CREATE_BEGIN,
  MOBILE_CREATE_ERROR,
} from '../../../../constants/mobileConstants';

const AddMobileScreenLogic = () => {
  const history = useHistory();

  // ,

  const {
    userInfo: { email, firstName, lastName, _id },
  } = useSelector((state) => state.user);

  const { mobileSaved } = useSelector((state) => state.mobile);

  const setTimeOutId = useRef(0);

  // Clearing all set timeouts
  useEffect(() => {
    mobileSaved && history.push('/dashboard/all-mobiles');

    return () => clearAllSetTimeOut(setTimeOutId);
  }, [mobileSaved, history]);

  const [mobileInfo, setMobileInfo] = useState({
    title: '',
    price: '',
    brand: '',
    internalMemory: '',
    ram: '',
    os: '',
    battery: '',
    processor: '',
    camera: '',
    colors: [],
    previews: [],
    files: [],
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setMobileInfo({ ...mobileInfo, [name]: value });
  };

  const titleMessageRefTag = useRef(null);
  const priceMessageRefTag = useRef(null);
  const brandMessageRefTag = useRef(null);
  const internalMemoryMessageRefTag = useRef(null);
  const ramMessageRefTag = useRef(null);
  const osMessageRefTag = useRef(null);
  const batteryMessageRefTag = useRef(null);
  const processorMessageRefTag = useRef(null);
  const cameraMessageRefTag = useRef(null);
  const imageUploadValidationMessageTag = useRef(null);
  const colorsMessageRefTag = useRef(null);

  const handleMobileImages = (e) => {
    // First of all Empty previews and files in mobileInfo
    const { previews, files: prevFiles } = mobileInfo;

    previews.length = 0;
    prevFiles.length = 0;

    setMobileInfo({
      ...mobileInfo,
      previews: [...previews],
      files: [...prevFiles],
    });

    // ################ Empty previews and files Ends #################

    const { files } = e.target;
    const pics = Array.from(files);

    pics.forEach((el, index) => {
      if (index < 6) {
        const fileSRC = URL.createObjectURL(el);

        setMobileInfo((prevState) => ({
          ...prevState,
          previews: [...prevState.previews, fileSRC],
          files: [...prevState.files, el],
        }));
      }
    });
  };

  const dispatch = useDispatch();

  const addMoreImages = (e) => {
    const { files: prevFiles } = mobileInfo;
    const { files } = e.target;

    let pics = Array.from(files);

    for (let i = 0; i < prevFiles.length; i += 1) {
      pics = pics.filter((el) => el.name !== prevFiles[i].name);
    }

    if (prevFiles.length < 6) {
      pics.forEach((el) => {
        const fileSRC = URL.createObjectURL(el);

        setMobileInfo((prevState) => ({
          ...prevState,
          previews: [...prevState.previews, fileSRC],
          files: [...prevState.files, el],
        }));
      });
    } else {
      dispatch(sendNotification('Cant upload more then 6 images!!!', true));
    }
  };

  // Remove a perticular image
  const removeAPreviewImage = (file, preview) => {
    const newPrev = mobileInfo.previews.filter((el) => el !== preview);
    const newFiles = mobileInfo.files.filter((el) => el.name !== file.name);

    setMobileInfo((prevState) => ({
      ...prevState,
      previews: [...newPrev],
      files: [...newFiles],
    }));

    dispatch(sendNotification(`Removed a preview image!!!`, true));
  };

  // Color Handing
  const mobileColors = ['red', 'white', 'black', '#FFD700', 'grey'];

  const handleColors = (e) => {
    const { value } = e.target.dataset;

    setMobileInfo((prevState) => {
      // if color already exits reomve it
      if (prevState.colors.includes(value)) {
        return {
          ...prevState,
          colors: [...prevState.colors.filter((c) => c !== value)],
        };
      }

      return { ...prevState, colors: [...prevState.colors, value.trim()] };
    });
  };

  const saveMobileInfo = (imagesUrls) => {
    const { files, previews, ...newMobileInfo } = mobileInfo;

    const finalMobileInfo = {
      ...newMobileInfo,
      sellerId: _id,
      sellerEmail: email,
      sellerName: `${firstName} ${lastName}`,
      pictures: imagesUrls,
    };

    dispatch(createMobile(finalMobileInfo, _id));
  };

  const uploadImages = async () => {
    const imagesUrl = [];
    let index = 0;

    try {
      mobileInfo.files.forEach(async (f) => {
        const fileName = `${mobileInfo.title}_${mobileInfo.brand}_${Math.floor(
          Math.random() * Date.now()
        )}_${f.name}`;

        const imageRef = ref(
          storageInstance,
          `mobileImages/${email}/${fileName}`
        );

        await uploadBytes(imageRef, f);

        const url = await getDownloadURL(imageRef);

        imagesUrl.push({ url, fileName });

        if (index === mobileInfo.files.length - 1) {
          saveMobileInfo(imagesUrl);
        }

        index += 1;
      });
    } catch (err) {
      dispatch({ type: MOBILE_CREATE_ERROR });
      dispatch(sendNotification(err.code, true));
    }
  };

  const handleSubmit = async () => {
    const errorFlag = validateMobileForm(mobileInfo, setTimeOutId, {
      titleMessageRefTag,
      priceMessageRefTag,
      brandMessageRefTag,
      internalMemoryMessageRefTag,
      ramMessageRefTag,
      osMessageRefTag,
      batteryMessageRefTag,
      processorMessageRefTag,
      cameraMessageRefTag,
      imageUploadValidationMessageTag,
      colorsMessageRefTag,
    });

    if (!errorFlag) {
      dispatch({ type: MOBILE_CREATE_BEGIN });

      await uploadImages();
    }
  };

  return {
    handleSubmit,
    handleColors,
    mobileColors,
    removeAPreviewImage,
    addMoreImages,
    handleMobileImages,
    handleInput,
    mobileInfo,
    priceMessageRefTag,
    titleMessageRefTag,
    colorsMessageRefTag,
    processorMessageRefTag,
    batteryMessageRefTag,
    ramMessageRefTag,
    imageUploadValidationMessageTag,
    internalMemoryMessageRefTag,
    cameraMessageRefTag,
    osMessageRefTag,
    brandMessageRefTag,
    releaseImageObjectUrl,
  };
};

export default AddMobileScreenLogic;
