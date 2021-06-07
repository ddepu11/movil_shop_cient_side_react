const setNotification = (ref, message, className, timeOutId) => {
  ref.current.innerText = message;
  ref.current.classList.add(className);
  timeOutId.current = setTimeout(() => {
    ref.current.innerText = '';
    ref.current.classList.remove(className);
  }, 4000);
};

export default setNotification;
