import setValidationMessage from './setValidationMessage';

const validateMovileForm = (
  mobileInfo,
  setTimeOutId,
  allValidationMessageTags
) => {
  const {
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
  } = allValidationMessageTags;

  let errorFlag = false;

  const {
    title,
    price,
    brand,
    internalMemory,
    ram,
    os,
    battery,
    processor,
    camera,
    files,
  } = mobileInfo;

  if (!title) {
    setValidationMessage(
      titleMessageRefTag,
      'text field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!price) {
    setValidationMessage(
      priceMessageRefTag,
      'price field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!brand) {
    setValidationMessage(
      brandMessageRefTag,
      'brand field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!internalMemory) {
    setValidationMessage(
      internalMemoryMessageRefTag,
      'Internal memory field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!ram) {
    setValidationMessage(
      ramMessageRefTag,
      'ram field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!os) {
    setValidationMessage(
      osMessageRefTag,
      'os field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!battery) {
    setValidationMessage(
      batteryMessageRefTag,
      'battery field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!processor) {
    setValidationMessage(
      processorMessageRefTag,
      'processor field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (!camera) {
    setValidationMessage(
      cameraMessageRefTag,
      'camera field cant be empty!!!',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  if (files.length === 0) {
    setValidationMessage(
      imageUploadValidationMessageTag,
      'please select atleast 1 image file',
      'error',
      setTimeOutId
    );
    errorFlag = true;
  }

  return errorFlag;
};

export default validateMovileForm;
