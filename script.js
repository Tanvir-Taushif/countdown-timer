let intID;
const startbtn = () => {
  const hr = parseInt(document.querySelector("#Hours").value) * 60 * 60 * 1000;
  const mn = parseInt(document.querySelector("#Minutes").value) * 60 * 1000;
  const sc = parseInt(document.querySelector("#Seconds").value) * 1000;
  const d = new Date();
  const timerTime = parseInt(d.getTime()) + hr + mn + sc;
  let finTime;
  const callFunc = () => {
    const current = new Date().getTime();
    finTime = timerTime - current;
    const hour = Math.floor((finTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((finTime % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((finTime % (1000 * 60)) / 1000);
    document.querySelector("#Hours").value = hour;
    document.querySelector("#Minutes").value = minute;
    document.querySelector("#Seconds").value = second;
    if(hour==0) document.querySelector("#Hours").value = "00";
    if(minute==0) document.querySelector("#Minutes").value = "00";
    if(second==0)document.querySelector("#Seconds").value = "00";
    if(finTime<=1000) clearInterval(intID);
  };
  intID = setInterval(callFunc, 1000);

};

const resButton = () => {
  clearInterval(intID);
  document.querySelector("#Hours").value = "00";
  document.querySelector("#Minutes").value = "00";
  document.querySelector("#Seconds").value = "00";
};

const pauseButton = () => {
  clearInterval(intID);
};
