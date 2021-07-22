const releaseImageObjectUrl = (e) => {
  const { src } = e.target;
  URL.revokeObjectURL(src);
};

export default releaseImageObjectUrl;
